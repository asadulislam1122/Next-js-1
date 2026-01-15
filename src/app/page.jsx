import BlogPreview from "@/components/BlogPreview/BlogPreview";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Navbar/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <Features></Features>
      <Products></Products>
      <Testimonials></Testimonials>
      <BlogPreview></BlogPreview>
      <PricingPlans></PricingPlans>
      <Newsletter></Newsletter>
      {/* <Footer></Footer> */}
    </>
  );
}
