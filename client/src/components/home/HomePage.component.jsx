import React from "react";
import BrandsPreview from "../../app/common/brandsPreview/BrandsPreviewList.component";
import CategoryList from "../../app/common/categoryList/CategoryList.component";
import HeroBanner from "./heroBanner/HeroBanner.component";
import "./HomePage.css";
import desktopBgImg from "../../assets/images/banner-desktop.png";
import mobileBgImg from "../../assets/images/banner.png";
import About from "./about/About.component";
import MobileHeroBanner from "./mobileHeroBanner/MobileHeroBanner.component";

const HomePage = () => {
  return (
    <>
      <HeroBanner
        bgImg={desktopBgImg}
        title="Welcome to Healthright"
        subtitle="Discover the best New Zealand's health supplements"
        description="Welcome to Healthright, your one-stop shop for premium New Zealand health supplements. Based in New Zealand, we are dedicated to providing our customers with the best products to support their wellness journey. Shop with us and experience the benefits of locally sourced and high-quality supplements. Get started on the path to better health today!"
      />
      <MobileHeroBanner bgImg={mobileBgImg} />
      <About />
      <CategoryList />
      <BrandsPreview />
    </>
  );
};

export default HomePage;