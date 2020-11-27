export type MenuItemData = {
    title?: string;
    icon: string;
    link: string;
}

export const menuData: MenuItemData[] = [
    { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
    { title: "Tutorial", icon: "/images/icons/tutorials.svg", link: "/tutorials" },
    { title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
    { icon: "/images/icons/search.svg", link: "/search" },
    { icon: "/images/icons/account.svg", link: "/account" },
];

export const tooltipData: MenuItemData[] = [
    { title: "Profile", icon: "/images/icons/profile.svg", link: "/profile" },
    { title: "Settings", icon: "/images/icons/settings.svg", link: "/settings" },
    { title: "Sign Out", icon: "/images/icons/signout.svg", link: "/logout" },
]