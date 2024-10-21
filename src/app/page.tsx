import Image from "next/image";
import NavBar from "@/src/components/nav-bar/NavBar";
import Hero from "@/src/components/hero/Hero";
import Courses from "@/src/components/courses/Courses";
import SellingPoint from "@/src/components/selling-point/SellingPoint";
import Testimonials from "@/src/components/testimonials/Testimonials";
import JoinPlatForm from "@/src/components/join-platform/JoinPlatform";
import Footer from "@/src/components/footer/Footer";
import {NAV_BAR_ITEMS} from "@/src/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] pb-10">
        <NavBar />
        <Hero />
        <Courses />
        <SellingPoint />
        <Testimonials />
        <JoinPlatForm />
        <Footer links={NAV_BAR_ITEMS} />
    </div>
  );
}
