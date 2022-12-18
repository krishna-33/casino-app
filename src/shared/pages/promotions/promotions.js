import React from "react";
import Navbar from "./components/navbar";
import TabView from "./components/tabview"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import HeroContent from './components/hero-content'
import {getAllPromotions} from '../../api/api'
import { useQuery, gql } from '@apollo/client';


const Promotions = () => {

 const { loading, data } = useQuery(getAllPromotions);
 if (loading) return <p>Loading ...</p>;
  return (
    <>
    <div className="bg-primary text-white">
    <Navbar />
  </div>
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div className="bg-hero1 bg-no-repeat bg-cover bg-center h-96 w-full relative overlay">
        <HeroContent />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-hero2 bg-no-repeat bg-cover bg-center h-96 w-full relative overlay">
        <HeroContent />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="bg-hero3 bg-no-repeat bg-cover bg-center h-96 w-full relative overlay">
        <HeroContent />
      </div>
    </SwiperSlide>
  </Swiper> 
   {
    data && data.getAllPromotions.length > 0 ? <TabView data={data.getAllPromotions} /> : null
  } 
  
  </>
  )
}

export default Promotions