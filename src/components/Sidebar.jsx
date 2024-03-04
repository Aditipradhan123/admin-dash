import { useState } from 'react';
import { BiSolidDashboard, BiDetail, BiSolidBriefcase, BiTask, BiUser, BiLogIn } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: BiSolidDashboard
  },
  {
    name: "Project",
    href: "/project",   
    icon: BiDetail,
    subItems: [
      {
        name: "All",
        href: "/all"
      },
      {
        name: "New",
        href: "/new"
      }
    ]
  },
  {
    name: "Career",
    href: "/career",
    icon: BiSolidBriefcase,
    subItems: [
      {
        name: "All",
        href: "/all"
      },
      {
        name: "New",
        href: "/new"
      }
    ]
  },
  {
    name: "My Task",
    href: "/mytask",
    icon: BiTask
  },
  {
    name: "Profile",
    href: "/profile",
    icon: BiUser
  },
  {
    name: "Register",
    href: "/register",
    icon: BsPersonPlus
  },
  {
    name: "Login",
    href: "/login",
    icon: BiLogIn
  },
]

const Sidebar = ({isMenuOpen}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const handleDropdown = (index) => {
    setOpenDropdown(index === openDropdown ? null : index);
  };

  return (
    <aside className="fixed h-screen bg-black mt-14 p-4">
      <ul className="text-gray-200">
        {sidebarItems.map(({ name, href, icon: Icon, subItems }, index) => (
          <li key={name} className={`relative ${subItems ? 'group' : ''}`}>
            <div
              className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${
                pathname === href ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => subItems && handleDropdown(index)}
            >
              <span>
                <Icon size={24} />
              </span>
              <span className={`w-52 ml-3 ${!isMenuOpen ? 'hidden' : 'block'}`}>{name}</span>
            </div>
            {subItems && openDropdown === index && (
              <ul className="">
                {subItems.map(({ name: subName, href: subHref }) => (
                  <li key={subName} className={`flex text-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${
                    pathname === subHref ? 'bg-gray-700' : 'hover:bg-gray-700'
                  }`}>
                    <span>{subName}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
