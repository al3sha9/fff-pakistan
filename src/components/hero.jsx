"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import LOGO from '../../public/logo.png'
import "swiper/css/pagination";
import PIC1 from "../../public/demon/1.png"
import PIC2 from "../../public/demon/2.png"
import PIC3 from "../../public/demon/3.jpg"

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
// comment 123
export default function Hero() {
  return (
    <>
    {/* work in progress */}
      <section className="p-4 sm:p-6 bg-[#fff]">
        <div className="container flex flex-col sm:flex-row items-center justify-center  mx-auto text-center">
          <div className=" animate__fadeInLeft animate__animated py-16 flex flex-col justify-center items-center rounded-md w-full sm:mx-2 sm:w-1/3 md:px-16 dark:bg-green-900">
            <img width={200} className="py-5" src={LOGO} alt="ajsdhkjasd" />
            <h1 className="text-3xl font-pop sm:text-5xl font-extrabold dark:text-green-50">
              Fridays For Future Pakistan
            </h1>
            <p className="my-4 sm:text-center">
              <span className="font-medium font-pop dark:text-green-50">
                IT&apos;S A MOVEMENT
              </span>
            </p>
          </div>
          <div className="w-full sm:w-2/3 sm:mx-2 animate__fadeInRight animate__animated  mt-4 sm:mt-0 rounded-md">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={PIC3}
                  alt="123"
                    className="object-cover w-full rounded-md xl:col-span-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={PIC1}
                  alt="123"
                  className="object-cover w-full rounded-md xl:col-span-3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={PIC2}
                  alt="123"
                  className="object-cover w-full rounded-md xl:col-span-3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

     
    </>
  );
}
