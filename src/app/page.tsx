import Image from "next/image";
import {NAV_BAR_ITEMS} from "@/src/constants";
import Navbar from "../components/molecules/Navbar";
import Hero from "../components/organisms/Hero";
import "@/src/styles/globals.css";
import {SELLING_POINTS} from "../constants/courseData"
import CourseList from "../components/organisms/CourseList"
import CourseView from "../components/organisms/CourseView";
import Syllabus from "../components/organisms/Syllabus";
import Cards from "../components/molecules/Cards";
import Experts from "../components/organisms/Experts";
import SubForm from "../components/organisms/SubForm";
import Footer from "../components/organisms/Footer";



export default function Home() {
  const limitedCourses = SELLING_POINTS.slice(0, 3);
  return (
    <>
    <section className="bg-green-200  bg-opacity-25  w-screen overflow-hidden">
    <div className="container">
    <Navbar/>
    <Hero />
     
    </div>
    </section>
    <CourseList/>
    <CourseView/>
    <Syllabus/>
    <Experts/>
   <SubForm/>
   <Footer/>
    </>
  );
}
