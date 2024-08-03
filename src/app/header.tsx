
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/


export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    /*{
      title: 'Blog',
      url: '/blog',
    },*/
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    /*{
      title: 'Music',
      url: '/music',
    },*/
    {
      title: 'Contact',
      url: '/contact',
    },

  ];
  

export default function Header() {
    return (
      <div className="shadow-lg">
        <nav>
          <ul className="menus flex flex-wrap w-screen justify-center gap-x-10 md:gap-x-24">
            {menuItems.map((menu, index) => {
              return (
                <li className="group menu-items w-18 my-6 text-center place-content-center content-center transition ease-out hover:scale-110" key={index}>
                  {/* https://stackoverflow.com/questions/70906977/tailwind-underline-hover-animation */}
                  <a href={menu.url}>
                    {menu.title}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-black"></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
      );

}