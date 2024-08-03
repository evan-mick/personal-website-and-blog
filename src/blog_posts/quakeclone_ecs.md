---
title: "Multiplayer FPS From Scratch: ECS"
description: "How I implemented an Entity Component System for a 2 week quake clone project"
date: "2024-8-01"
lastUpdated: "2024-8-01"
img: "/projects/quakeclonecover.png"
show: true
---




**[Link to demonstration video](https://drive.google.com/file/d/1oyknDe_eDyTXVMn1sffx-3-eQqQfbj4V/view?usp=sharing)**

**[Link to relevant source code from Github](https://github.com/evan-mick/quake-clone/tree/main/src/core)**


In fall of 2023, I was in the privileged (and stressful) position of being registered in both Graphics and Networking courses. 

I was also lucky that both courses had open ended final projects. So, I opted to make a multiplayer deathmatch arena game in the style of Quake. In 2 weeks, I (along with 3 other people) designed a renderer, physics, networking, and gameplay systems using C++ and OpenGL. Though there is a ton of room for improvement, I think we pulled it off okay!

For this first part, I will talk about the underlying Entity Component System which allowed for ease of networking and interaction between different objects. 


## Entity Component System (ECS)

To allow for networking, the underlying gamelogic system is an ECS. There are now, dozens of articles explaining what this is, and you may already know, but I will explain here anyway.

Entities: Somewhere in memory is a representation of an index, and a bitmask. The index is the number of the entity, and the bitmask represents which components the entity has. One key feature of ECS is that entities are stored in memory contiguously. 

In my implementation, there is an array of entities, the index into that array is the entity’s number, and the bitmask is the value of that array

```cpp
// Initialized in ecs.h
// Entity id -> bitmask flags
std::array<flags_t, MAX_ENTITY> m_entities{};
```

Components: Each component is a struct of data. In memory, there are a contiguous array of these structs for every entity in the game. 

Here is an example used in my project, (of note, each glm::vec3 is an array of 3 floats)

```cpp
// Struct initialized in "game_types.h" 
struct Transform {
    glm::vec3 pos;
    glm::vec3 scale;
    glm::vec3 rot;
};

// In "game.cpp" this is called when registered
// FLN_TRANSFORM is a constant representing the Transform component flag number
// and sizeof(Transform) is passed in so 
// the ecs can know what size to make the component data array internally
ecs.registerComponent(FLN_TRANSFORM, sizeof(Transform));
```

Systems: Each system is basically a function that every tick/frame/update gets applied to every entity that as the appropriate set of required components. For instance, a physics “system” may iterate through all entities with a transform, collision, and kinematic body component (as an example) and apply velocity, acceleration, and collision calculations to all those objects. 

Here is an example system

```cpp
ecs.registerSystem([](ECS* e, entity_t ent, float delta) {
				// Get reference to current entity's DestroyData Component information
        DestroyData* destroyDat;
				destroyDat = getComponentData<DestroyData>(e, ent, FLN_DESTROYTIME);

				// Decrement and destroy if time runs out
        destroyDat->timer -= delta;

        if (destroyDat->timer <= 0.f) {
            e->queueDestroyEntity(ent);
        }
		// Only run on entities with the "FLN_DESTROYTIME" flag in their bitmask
    }, { FLN_DESTROYTIME });
```

The first argument is a lambda function, which has to have the argument list shown above. All it does it gets the relevant object data and destroy the entity if enough time has passed. It only runs on objects with the “FLN_DESTROYTIME” flag (which is put in a list because some systems have multiple required flags). 

## ****************Benefits****************

Why did I emphasize that the memory is contiguous? Because one key benefit of ECS is that it allows for many cache hits (if you don’t know what that means, its out of the scope of this article, but in short your computer hardware is optimized for when memory is accessed contiguously, and can be upwards of 25x faster (!!!) if taken into account). This is the predominant reason it is much faster (especially for games with many objects) than alternate approaches to engine design. 

From a networking perspective, the benefits of this is that it is incredibly easy and efficient to hold, sync, and update state. Just share and edit components (literally memcpy), and the systems should just work with the new information. This is a stark contrast with node (ala Godot) or object oriented component architectures (ala Unity) which often require much more manual syncing and editing to allow clients to be synced up. 

Other ECS systems i’ve found online use much more complicated mechanisms with multiple classes for components, systems, etc. which is likely more extensible and battle-ready than what I’ve created. I opted to use one class for all ECS logic and instead of abstracting systems to classes I chose to make them C++ functions. With that said, here’s an overview of how I stored data in my implementation.

```cpp
typedef unsigned int flags_t;
typedef unsigned char entity_t;
typedef unsigned char entityType_t;
typedef std::function<void(struct ECS*, entity_t, float)> system_t;
typedef std::function<void(entity_t)> entbroadcast_t;

// Maximum entities and components based on type data
constexpr entity_t MAX_ENT_VAL = -1;
constexpr size_t MAX_ENTITY = MAX_ENT_VAL + 1; // MAX VALUE OF ENTITY_T
constexpr int MAX_COMPONENTS = sizeof(flags_t) * 8;
// Infinite systems should be possible, but leaving it fixed
constexpr int MAX_SYSTEMS = 32;

class ECS
{
public:
// public functions ellided here, check source code to see, 
// they are well commented 

private:
	struct SystemData {
      system_t func;
      flags_t req_flags;
  };

  // Entity id -> bitmask flags
  std::array<flags_t, MAX_ENTITY> m_entities{};

  // Component id -> component data buffer
  std::array<void*, MAX_COMPONENTS> m_components{};

  // Component id -> bool is the component registered
  std::array<bool, MAX_COMPONENTS> m_component_registered{};

  // Component id -> component struct size
  std::array<size_t, MAX_COMPONENTS> m_component_num_to_size{};

  // To store what entities they have authority over (for networking)
  std::array<bool, MAX_ENTITY> m_hasAuthority{};

  std::vector<SystemData> m_systems = {};

}
```

The setup at the top ensures that for whatever type definition you put, all of the arrays and sizing will be adjusted to be the max value. If I were to change entity_t from a char to a short, then all of the array sizing and values would be updated to accommodate (for char to short they’d all go from 256 entities to 65536 entities) This could quickly spiral to make all of the arrays way to big, but I put that in place as a start. 

Also, other ECS implementations usually don’t just have fixed sized arrays. Because the project is small in scope, it felt “right” and was easy to implement and made copying and setting data much easier. An alternative that I’ve seen is using 2 vectors, one that stores entity→index data and another that stores index→entity data, and with that when objects get destroyed you can move the top object to the destroyed index in the array and delete and/or ignore the top which maintains density. For a more thorough explanation, check here: **[https://austinmorlan.com/posts/entity_component_system/](https://austinmorlan.com/posts/entity_component_system/)**

So there is an overview of the entity component system! A ton of detail was left out, and I am hoping to go more in depth on future parts. I am planning on writing similar posts for the network and physics systems. Thank you for reading!