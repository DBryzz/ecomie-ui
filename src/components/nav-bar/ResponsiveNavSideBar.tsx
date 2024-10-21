import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/src/components/ui/sheet"
import {Menu} from "lucide-react";
import NavBarLinks from "@/src/components/nav-bar/NavBarLinks";
import {NAV_BAR_ITEMS} from "@/src/constants";
import NavBarRight from "@/src/components/nav-bar/NavBarRight";

export function ResponsiveNavSideBar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent
                side='left'
                className='max-w-[400px] min-h-screen flex flex-col justify-between bg-deep-forest-green-200'
            >
                <div>logo</div>
                <NavBarLinks
                    links={NAV_BAR_ITEMS}
                    className='flex flex-col  gap-4 text-white'
                />
                <NavBarRight />
            </SheetContent>
        </Sheet>
    );
};

export default ResponsiveNavSideBar;