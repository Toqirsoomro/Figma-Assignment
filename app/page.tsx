import Header from "@/component/Header";
import Hero from "@/component/Hero";
import TopBar from "@/component/TopBar";
import TrustedBy from "@/component/TrustedBy";
import ExploreCourses from "@/component/ExploreCourses";
import Achievements from "@/component/Achievement";
import Courses from "@/component/Courses";
import Team from "@/component/Team";
import Testimonials from "@/component/Testinominial";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <TrustedBy />
      <ExploreCourses />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
