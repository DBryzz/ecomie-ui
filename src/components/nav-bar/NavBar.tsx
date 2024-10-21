import React from 'react';
import NavBarLinks from "@/src/components/nav-bar/NavBarLinks";
import {NAV_BAR_ITEMS} from "@/src/constants";
import NavBarRight from "@/src/components/nav-bar/NavBarRight";
import ResponsiveNavSideBar from "@/src/components/nav-bar/ResponsiveNavSideBar";


const NavBar = () => {
    return (
        <div>
            <div className='flex justify-between items-center h-20'>
                <div>Logo</div>
                <NavBarLinks links={NAV_BAR_ITEMS}/>
                <div className='hidden md:flex'>
                    <NavBarRight/>
                </div>
                <div className='flex md:hidden'>
                    <ResponsiveNavSideBar/>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default NavBar;