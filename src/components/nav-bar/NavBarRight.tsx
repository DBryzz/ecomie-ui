import AuthNavButtons from "@/src/components/nav-bar/AuthNavButtons";
import SignInRightNav from "@/src/components/nav-bar/SignInRightNav";

const NavBarRight = () => {
    const authenticated = Math.floor(Math.random() * 2) === 1;
    return <div>{authenticated ? <AuthNavButtons /> : <SignInRightNav />}</div>;
};

export default NavBarRight;