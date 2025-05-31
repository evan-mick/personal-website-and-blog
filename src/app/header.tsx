// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/

export const menuItems = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  /*{
    title: 'Music',
    url: '/music',
  },*/
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function Header() {
  return (
    <div className="shadow-lg relative z-0">
      <nav>
        <ul className="menus flex flex-wrap w-screen justify-center gap-x-10 md:gap-x-24">
          {menuItems.map((menu, index) => {
            return (
              <li
                className="group menu-items w-18 my-6 text-center place-content-center content-center transition ease-out hover:scale-110"
                key={index}
              >
                {/* https://stackoverflow.com/questions/70906977/tailwind-underline-hover-animation */}
                <a href={menu.url}>
                  {menu.title}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-black">
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex justify-center space-x-4 pb-6 sm:pb-0 sm:absolute sm:right-8 sm:top-1/2 sm:-translate-y-1/2">
        <a
          href={"https://github.com/evan-mick"}
        >
          <img
            className="w-12"
            src={"icons8-github.svg"}
            alt="Photo"
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/evan-mickelson-582586190/"}
        >
          <img
            className="w-12"
            src={"linkedin-svgrepo-com.svg"}
            alt="LinkedIn Link"
          />
        </a>
      </div>
    </div>
  );
}

