'use client'
import Link from 'next/link'
// import React, { useState } from 'react'
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
    icon: BiDetail
  },
  {
    name: "Career",
    href: "/career",
    icon: BiSolidBriefcase
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
  return (
    <div>
    <aside className='bg-black text-gray-300 w-80 h-screen mt-16 p-4 transition-all'>

      <ul className='list-none flex flex-col'>
        {sidebarItems.map(({ name, href, icon: Icon }) => (
          <li className='sidebar_item text-white' key={name}>
            <Link href={href} className='flex gap-2 py-3 px-4 mb-4 rounded-xl bg-gray-800'>
                <span>
                  <Icon size={20} />
                </span>
                <span className='sidebar_name font-sans text-sm'>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
    </div>
  )
}

export default Sidebar;
