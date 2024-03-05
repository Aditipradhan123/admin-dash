import { useState } from 'react';
import { BiSolidDashboard, BiDetail, BiSolidBriefcase, BiTask, BiUser } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { FiLogIn } from "react-icons/fi";
import Link from 'next/link';

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: BiSolidDashboard
  },
  {
    name: "Project",
    href: "/projects",
    icon: BiDetail,
    subItems: [
      {
        name: "All",
        href: "/projects"
      },
      {
        name: "New",
        href: "/projects/new"
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
        href: "/career"
      },
      {
        name: "New",
        href: "/newcareer"
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
    icon: FiLogIn
  },
]

const Sidebar = ({ isMenuOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathName = usePathname();

  const handleDropdown = (index) => {
    setOpenDropdown(index === openDropdown ? null : index);
  };

  return (
    <aside className={`fixed h-screen bg-black ${isMenuOpen ? 'w-80' : 'w-16'} mt-14 p-2 overflow-y-auto`}>
      <ul className="text-gray-200">
        {sidebarItems.map(({ name, href, icon: Icon, subItems }, index) => (
          <li key={name}>
            <Link href={href}
              className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${pathName === href ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
              onClick={() => subItems && handleDropdown(index)}
            >
              <span>
                <Icon size={24} />
              </span>
              <span className={`ml-3 ${!isMenuOpen ? 'hidden' : 'block'}`}>{name}</span>
            </Link>
            {subItems && openDropdown === index && (
              <ul>
                {subItems.map(({ name: subName, href: subHref }) => (
                  <li key={subName} >
                    <Link href={subHref}  className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ${ subHref === pathName ? 'bg-gray-700' : 'hover:bg-gray-700'
                    }`}>
                      <span className='text-center'>{subName}</span>
                    </Link>
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
