"use client"

import { LogOut } from "../node_modules/lucide-react";

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link"
import router from "next/router";



const LeftSidebar = () => {

    const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
        <div className="flex w-full flex-1 flex-col gap-2 px-6">
            {sidebarLinks.map((link)=> (
                //FIX TEXT COLOR OF INACTIVE LINK
                <Link href={link.route} key={link.label} className={cn("leftsidebar_link transition", pathname === link.route ? 'bg-primary-500 text-light-1' : 'text-gray-600 hover:bg-primary-500/20')}>
                   <link.icon className="h-6 w-6 text-light-1"/>
                   <p className="text-light-1 max-lg:hidden" >{link.label}</p>
                </Link>
            ))}
            <div className="mt-10">
                <SignedIn>
                    <SignOutButton signOutCallback={()=> router.push('/')}>
                        <div className="leftsidebar_link cursor-pointer">
                            <LogOut className="h-6 w-6 text-light-1"/>
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </div>
    </section>
  )
}

export default LeftSidebar