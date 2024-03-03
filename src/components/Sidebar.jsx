'use client'
import Link from 'next/link'
import { useState } from 'react';
import { BiSolidDashboard, BiDetail, BiSolidBriefcase, BiTask, BiUser, BiUserPlus, BiLogIn } from "react-icons/bi";

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
    href: "/",
    icon: BiUserPlus
  },
  {
    name: "Login",
    href: "/",
    icon: BiLogIn
  },
]

const Sidebar = () => {
  const [isProjectOpen, setProjectOpen] = useState(false);
  
  return (
    <div>
    <aside className='bg-black text-gray-300 w-80 h-screen mt-16 p-4 transition-all'>

      <ul className='list-none flex flex-col'>
        {sidebarItems.map(({ name, href, icon: Icon, subItems}) => (
          <li className='sidebar_item text-white' key={name}>
            <Link href={href} className={`flex gap-2 py-3 px-4 mb-4 rounded-xl bg-gray-800 ${
                  subItems ? 'cursor-pointer' : ''
                }`} 
                onClick={() => subItems && setProjectOpen(!isProjectOpen)}>
                <span>
                  <Icon size={20} />
                </span>
                <span className='sidebar_name font-sans text-sm'>{name}</span>
            </Link>
            {isProjectOpen && subItems && (
                <ul className='list-none'>
                  {subItems.map(({ name: subName, href: subHref }) => (
                    <li className='ml-8' key={subName}>
                      <Link href={subHref} className='flex gap-2 py-3 px-4 mb-4 rounded-xl bg-gray-800'>
                        <span className='sidebar_name font-sans text-sm'>{subName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </aside>
    </div>
  )
}

export default Sidebar;
