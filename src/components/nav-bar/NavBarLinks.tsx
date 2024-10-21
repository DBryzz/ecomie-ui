"use client";

import * as React from "react";

import { cn } from "@/src/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import {NAV_LINK} from "@/types";

interface INavBarLinks {
    links: NAV_LINK[];
    className?: string;
}

const NavBarLinks: React.FC<INavBarLinks> = ({ links, className }) => {
    return (
        <NavigationMenu className={cn('hidden md:flex', className)}>
            <NavigationMenuList className={className}>
                {links.map(({ id, name }) => {
                    return (
                        <NavigationMenuItem key={id}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {name}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavBarLinks;

/*
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
*/
