import {HomeIcon, Search, Heart, BadgePlus, User, Users} from "../node_modules/lucide-react"

export const sidebarLinks = [
    {
      icon: HomeIcon,
      route: "/dashboard",
      label: "Home",
    },
    {
      icon: Search,
      route: "/search",
      label: "Search",
    },
    {
      icon: Heart,
      route: "/activity",
      label: "Activity",
    },
    {
      icon: BadgePlus,
      route: "/create-post",
      label: "Create Post",
    },
    {
      icon: Users,
      route: "/communities",
      label: "Communities",
    },
    {
      icon: User,
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "replies", label: "Replies", icon: "/assets/members.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];