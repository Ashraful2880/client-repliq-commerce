import React from "react";
import Bannar from "./Bannar/Bannar";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import FeaturedProducts from "./FeaturedProducts/Featured Products";
import TopTrending from "./TopTrending/TopTrending";
import PromoOffer from "./PromoOffer/PromoOffer";
import BestSellar from "./BestSellar/BestSellar";
import PromoBannar from "./PromoBannar/PromoBannar";
import NewArrival from "./NewArrival/NewArrival";
import PromoLast from "./PromoLast/PromoLast";
import Testimonial from "./Testimonial/Testimonial";
import NewsLater from "./NewsLater/NewsLater";
import Application from "./Application/Application";
import BrandOfWeek from "./BrandOfWeek/BrandOfWeek";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <>
      <Bannar />
      <ShopByCategory />
      <CategoryFeature />
      <FeaturedProducts />
      <BrandOfWeek />
      <TopTrending />
      <PromoOffer />
      <BestSellar />
      <PromoBannar />
      <NewArrival />
      <PromoLast />
      <Testimonial />
      <NewsLater />
      <Application />
      <Blogs />
    </>
  );
};

export default Home;
