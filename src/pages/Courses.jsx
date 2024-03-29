import {
  drummingClass,
  guitarClass,
  harmonium,
  musicTheoryClass,
  pianoClass,
  singingClass,
  violinClass,
} from "@/assets";
import CourseCard from "@/components/CourseCard";
import { useMemo } from "react";

const courses = [
  {
    id: 1,
    title: "Harmonium Basics",
    description:
      "Learn the fundamentals of playing the Harmonium with this introductory course. No prior experience required!",
    image: harmonium,
    price: "Rs. 2000",
    url: "harmonium-basics",
  },
  {
    id: 2,
    title: "Guitar Masterclass",
    description:
      "Take your guitar skills to the next level with this comprehensive masterclass. Suitable for intermediate players.",
    image: guitarClass,
    price: "Rs. 2500",
    url: "guitar-master-class",
  },
  {
    id: 3,
    title: "Singing for Beginners",
    description:
      "Discover the joy of singing with our beginner-friendly course. Develop your vocal skills and gain confidence!",
    image: singingClass,
    price: "Rs. 1800",
    url: "singin-for-beginners",
  },
  {
    id: 4,
    title: "Music Theory Essentials",
    description:
      "Unlock the secrets of music theory and deepen your understanding of musical concepts with this essential course.",
    image: musicTheoryClass,
    price: "Rs. 1500",
    url: "music-theory",
  },
  {
    id: 5,
    title: "Drumming Foundations",
    description:
      "Learn the basic rhythms and techniques to become a proficient drummer. Suitable for beginners and enthusiasts alike.",
    image: drummingClass,
    price: "Rs. 1600",
    url: "drumming-foundations",
  },
  {
    id: 6,
    title: "Violin for Beginners",
    description:
      "Embark on a musical journey with the enchanting sounds of the violin. Perfect for absolute beginners!",
    image: violinClass,
    price: "Rs. 2700",
    url: "violin-for-begnners",
  },
  // {
  //   id: 7,
  //   title: "Songwriting Workshop",
  //   description:
  //     "Unleash your creativity and learn the art of songwriting. Express yourself through music in this hands-on workshop.",
  //   image: "https://example.com/songwriting-workshop.jpg",
  //   price: song,
  // },
];

const Courses = () => {
  const renderCourse = useMemo(
    () => courses.map((val) => <CourseCard {...val} key={val.id} />),
    []
  );
  return (
    <div
      className="gap-2 justify-items-center bg-gradient-to-t from-slate-500 to-slate-800 pt-[10vh] pb-[20vh] min-h-screen px-10 md:px-2"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      }}
    >
      {renderCourse}
    </div>
  );
};

export default Courses;
