"use client"

import { sidebarLinks } from "@/constants"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"


const BottomBar = () => {

    const pathname = usePathname();
  return (
    <section className="bottombar">
        <div className="bottombar_container">
        {sidebarLinks.map((link)=> (
                //FIX TEXT COLOR OF INACTIVE LINK
                <Link href={link.route} key={link.label} className={cn("bottombar_link  transition", pathname === link.route ? 'bg-primary-500 text-light-1' : 'text-gray-600 hover:bg-primary-500/20')}>
                   <link.icon className="h-6 w-6 text-light-1"/>
                <p className="text-subtle-medium text-light-1 max-sm:hidden" >{link.label.split(/\s+/)[0]}</p>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default BottomBar