import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imageArray from "../assets/index";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-[100vh] overflow-hidden ">
        <Carousel>
          <CarouselContent>
            {imageArray.map((val, index) => (
              <CarouselItem key={index}>
                <div
                  className="flex justify-center items-end mt-1/2 aspect-square p-6  h-[100vh] w-[100vw]"
                  style={{
                    backgroundImage: `url(${val.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <h1 className="text-7xl font-extrabold font-sans text-white h-max bg-black/70 p-2 rounded-md md:hidden ">
                    {val.text}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-7 top-1/2 bg-transparent  w-24 h-12 hover:bg-transparent hover:backdrop-blur-md" />
          <CarouselPrevious className="absolute left-7 top-1/2 bg-transparent w-24 h-12 hover:bg-transparent hover:backdrop-blur-md" />
        </Carousel>
      </div>
      <div className="min-h-[100vh] h-max flex justify-center items-center bg-[#ADE8F4] py-5">
        <div className="flex flex-col items-center text-center  ">
          <h1 className="font-serif text-6xl font-semibold  mt-10 sm:text-4xl">
            <span>Raga Harmony</span>
          </h1>
          <h2 className="text-xl font-bold bg-black/10 p-1 rounded m-4">
            Online and Inperson Classes
          </h2>
          <p className="w-3/4 text-3xl font-mono h-max sm:text-lg text-justify">
            Your destination for online and in-person music classes. As a
            premier institution for Carnatic Classical Music in Nagpur, we have
            been nurturing musical talent since 1998 with the goal of spreading
            the rich heritage of Carnatic music across the globe. we have
            trained thousands of students, helping them realize their dreams of
            pursuing a professional career in music. At Raga Harmony, we offer
            music classes for children and adults alike, regardless of their age
            group. Join us and let’s make music together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
