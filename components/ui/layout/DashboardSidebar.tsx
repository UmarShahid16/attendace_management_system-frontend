// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import {
//     Bell,
//     ChevronDown,
//     ChevronRight,
//     CreditCard,
//     Gift,
//     Grid2x2,
//     House,
//     LayoutDashboard,
//     Megaphone,
//     QrCode,
//     Repeat,
//     Settings2,
//     ShoppingBag,
//     UserCircle2,
//     Users,
//     UserPlus,
//     Wallet,
// } from "lucide-react"

// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarGroupContent,
//     SidebarGroupLabel,
//     SidebarHeader,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
//     SidebarRail,
//     SidebarSeparator,
// } from "@/components/ui/sidebar"

// const userManagementItems = [
//     { title: "Add User", href: "/users/add", icon: UserPlus },
//     { title: "Employee Register", href: "/register", icon: Users },
// ]

// const navigationItems = [
//     // { title: "Dummy Section 1", href: "/dashboard", icon: ShoppingBag, hasChildren: true },
//     // { title: "Dummy Section 2", href: "/dashboard", icon: CreditCard, hasChildren: true },
//     // { title: "Dummy Section 3", href: "/dashboard", icon: Gift, hasChildren: true },
//     { title: "Dummy Wallet", href: "/dashboard", icon: Wallet },
//     { title: "Dummy Transactions", href: "/dashboard", icon: Repeat },
//     { title: "Dummy Campaigns", href: "/dashboard", icon: Megaphone },
//     { title: "Dummy Reports", href: "/dashboard", icon: LayoutDashboard, hasChildren: true },
//     { title: "Dummy QR", href: "/dashboard", icon: QrCode, hasChildren: true },
//     { title: "Dummy Alerts", href: "/dashboard", icon: Bell, hasChildren: true },
//     // { title: "Dummy Config", href: "/dashboard", icon: Settings2, hasChildren: true },
// ]

// export function DashboardSidebar() {
//     const pathname = usePathname()
//     const [isUsersOpen, setIsUsersOpen] = useState(pathname.startsWith("/users"))

//     useEffect(() => {
//         if (pathname.startsWith("/users")) {
//             setIsUsersOpen(true)
//         }
//     }, [pathname])

//     return (
//         <Sidebar className="border-r border-sidebar-border bg-white" collapsible="offcanvas">
//             <SidebarHeader className="shrink-0 px-5 pt-6 pb-3">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                         <div className="flex size-7 items-center justify-center rounded-sm bg-linear-to-br from-fuchsia-200 via-white to-sky-200">
//                             <span className="text-[10px] font-bold text-zinc-900">TZ</span>
//                         </div>
//                         <p className="text-[1.65rem] font-medium tracking-tight text-zinc-950">
//                             Talha
//                         </p>
//                     </div>
//                     <div className="flex size-7 items-center justify-center rounded-md text-zinc-600">
//                         <Grid2x2 className="size-4" />
//                     </div>
//                 </div>
//             </SidebarHeader>
//             <SidebarContent className="min-h-0 flex-1 overflow-y-auto px-4 pt-2">
//                 <SidebarGroup className="p-0">
//                     <SidebarGroupContent>
//                         <SidebarMenu>
//                             <SidebarMenuItem>
//                                 <SidebarMenuButton
//                                     asChild
//                                     isActive={pathname === "/dashboard"}
//                                     className="h-11 rounded-lg px-2.5 text-[15px] text-zinc-700 data-active:bg-zinc-100 data-active:text-zinc-950"
//                                 >
//                                     <Link href="/dashboard">
//                                         <House className="size-4.5" />
//                                         <span>Dashboard</span>
//                                     </Link>
//                                 </SidebarMenuButton>
//                             </SidebarMenuItem>

//                             <SidebarMenuItem>
//                                 <SidebarMenuButton
//                                     className="h-11 justify-between rounded-lg px-2.5 text-[15px] text-zinc-700"
//                                     tooltip="User management"
//                                     isActive={pathname.startsWith("/users")}
//                                     onClick={() => setIsUsersOpen((open) => !open)}
//                                 >
//                                     <span className="flex items-center gap-2">
//                                         <Users className="size-4.5" />
//                                         <span>User Management</span>
//                                     </span>
//                                     <ChevronDown
//                                         className={`size-4 text-zinc-500 transition-transform ${isUsersOpen ? "rotate-180" : ""}`}
//                                     />
//                                 </SidebarMenuButton>
//                             </SidebarMenuItem>

//                             {isUsersOpen ? (
//                                 <div className="mt-0.5 ml-7 flex flex-col gap-0.5 border-l border-zinc-200 pl-2">
//                                     {userManagementItems.map((item) => (
//                                         <SidebarMenuItem key={item.title}>
//                                             <SidebarMenuButton
//                                                 asChild
//                                                 isActive={pathname === item.href}
//                                                 className="h-8 rounded-lg px-2.5 text-sm text-zinc-600 data-active:bg-zinc-100 data-active:text-zinc-950"
//                                             >
//                                                 <Link href={item.href}>
//                                                     <item.icon />
//                                                     <span>{item.title}</span>
//                                                 </Link>
//                                             </SidebarMenuButton>
//                                         </SidebarMenuItem>
//                                     ))}
//                                 </div>
//                             ) : null}

//                             {navigationItems.map((item) => (
//                                 <SidebarMenuItem key={item.title}>
//                                     <SidebarMenuButton
//                                         asChild
//                                         isActive={!item.hasChildren && pathname === item.href && item.title !== "Dashboard"}
//                                         className="h-11 justify-between rounded-lg px-2.5 text-[15px] text-zinc-700 data-active:bg-zinc-100 data-active:text-zinc-950"
//                                     >
//                                         <Link href={item.href}>
//                                             <span className="flex items-center gap-2">
//                                                 <item.icon className="size-4.5" />
//                                                 <span>{item.title}</span>
//                                             </span>
//                                             {item.hasChildren ? (
//                                                 <ChevronRight className="size-4 text-zinc-500" />
//                                             ) : null}
//                                         </Link>
//                                     </SidebarMenuButton>
//                                 </SidebarMenuItem>
//                             ))}
//                         </SidebarMenu>
//                     </SidebarGroupContent>
//                 </SidebarGroup>
//             </SidebarContent>

//             <SidebarFooter className="mt-auto shrink-0 px-4 pb-6">
//                 <SidebarSeparator className="mb-4 bg-zinc-200" />
//                 <div className="flex items-center gap-3 px-1">
//                     <span className="flex size-8 items-center justify-center rounded-full border border-zinc-900 text-zinc-900">
//                         <UserCircle2 className="size-5" />
//                     </span>
//                     <span className="text-[15px] font-medium text-zinc-900">Tyrone</span>
//                 </div>
//             </SidebarFooter>
//             <SidebarRail />
//         </Sidebar>
//     )
// }

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    Bell,
    ChevronDown,
    ChevronRight,
    CreditCard,
    Gift,
    Grid2x2,
    House,
    LayoutDashboard,
    Megaphone,
    QrCode,
    Repeat,
    Settings2,
    ShoppingBag,
    UserCircle2,
    Users,
    UserPlus,
    Wallet,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar"

const userManagementItems = [
    { title: "Add User", href: "/users/add", icon: UserPlus },
    { title: "Employee Register", href: "/register", icon: Users },
]

const navigationItems = [
    { title: "Dummy Wallet", href: "/dashboard", icon: Wallet },
    { title: "Dummy Transactions", href: "/dashboard", icon: Repeat },
    { title: "Dummy Campaigns", href: "/dashboard", icon: Megaphone },
    { title: "Dummy Reports", href: "/dashboard", icon: LayoutDashboard, hasChildren: true },
    { title: "Dummy QR", href: "/dashboard", icon: QrCode, hasChildren: true },
    { title: "Dummy Alerts", href: "/dashboard", icon: Bell, hasChildren: true },
]

export function DashboardSidebar() {
    const pathname = usePathname()
    const [isUsersOpen, setIsUsersOpen] = useState(pathname.startsWith("/users"))

    useEffect(() => {
        if (pathname.startsWith("/users")) {
            setIsUsersOpen(true)
        }
    }, [pathname])

    return (
        <Sidebar className="border-r border-sidebar-border" collapsible="offcanvas">
            <SidebarHeader className="shrink-0 px-5 pt-6 pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex size-7 items-center justify-center rounded-sm bg-linear-to-br from-fuchsia-200 via-white to-sky-200">
                            <span className="text-[10px] font-bold text-zinc-900">TZ</span>
                        </div>
                        <p className="text-[1.65rem] font-medium tracking-tight text-white">
                            Talha
                        </p>
                    </div>
                    <div className="flex size-7 items-center justify-center rounded-md text-zinc-400">
                        <Grid2x2 className="size-4" />
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="min-h-0 flex-1 overflow-y-auto px-4 pt-2">
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu>

                            {/* Dashboard */}
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === "/dashboard"}
                                    className="h-11 rounded-lg px-2.5 text-[15px] text-zinc-400 hover:bg-white/10 hover:text-white data-active:bg-white/10 data-active:text-white"
                                >
                                    <Link href="/dashboard">
                                        <House className="size-4.5" />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            {/* User Management */}
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    className="h-11 justify-between rounded-lg px-2.5 text-[15px] text-zinc-400 hover:bg-white/10 hover:text-white data-active:bg-white/10 data-active:text-white"
                                    tooltip="User management"
                                    isActive={pathname.startsWith("/users")}
                                    onClick={() => setIsUsersOpen((open) => !open)}
                                >
                                    <span className="flex items-center gap-2">
                                        <Users className="size-4.5" />
                                        <span>User Management</span>
                                    </span>
                                    <ChevronDown
                                        className={`size-4 text-zinc-500 transition-transform ${isUsersOpen ? "rotate-180" : ""}`}
                                    />
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            {/* User Management Sub-items */}
                            {isUsersOpen ? (
                                <div className="mt-0.5 ml-7 flex flex-col gap-0.5 border-l border-white/10 pl-2">
                                    {userManagementItems.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={pathname === item.href}
                                                className="h-8 rounded-lg px-2.5 text-sm text-zinc-500 hover:bg-white/10 hover:text-white data-active:bg-white/10 data-active:text-white"
                                            >
                                                <Link href={item.href}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </div>
                            ) : null}

                            {/* Navigation Items */}
                            {navigationItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={!item.hasChildren && pathname === item.href && item.title !== "Dashboard"}
                                        className="h-11 justify-between rounded-lg px-2.5 text-[15px] text-zinc-400 hover:bg-white/10 hover:text-white data-active:bg-white/10 data-active:text-white"
                                    >
                                        <Link href={item.href}>
                                            <span className="flex items-center gap-2">
                                                <item.icon className="size-4.5" />
                                                <span>{item.title}</span>
                                            </span>
                                            {item.hasChildren ? (
                                                <ChevronRight className="size-4 text-zinc-500" />
                                            ) : null}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="mt-auto shrink-0 px-4 pb-6">
                <SidebarSeparator className="mb-4 bg-white/10" />
                <div className="flex items-center gap-3 px-1">
                    <span className="flex size-8 items-center justify-center rounded-full border border-zinc-600 text-zinc-400">
                        <UserCircle2 className="size-5" />
                    </span>
                    <span className="text-[15px] font-medium text-zinc-300">Tyrone</span>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}