
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/


export const menuItems = [
    {
      title: 'Home',
      url: '/dashboard',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

export default function Header() {
    return (
        <nav>
          <ul className="menus flex w-screen justify-center space-x-8">
            {menuItems.map((menu, index) => {
              return (
                <li className="menu-items h-12 w-24 flex justify-center items-center" key={index}>
                  <a href={menu.url}>{menu.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      );

}