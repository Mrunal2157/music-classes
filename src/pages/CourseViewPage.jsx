import { guitar } from "@/assets";
import ContactUs from "@/components/ContactUs";
import CourseAccordion from "@/components/CourseAccordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { courses } from "@/lib/courses";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseViewPage = () => {
  const { courseName } = useParams();
  const [curCourse, setCurCourse] = useState(courses[courseName]);

  useEffect(() => {
    setCurCourse(courses[courseName]);
  }, [courseName]);

  return (
    <div className="flex  mt-16 flex-col items-center gap-5 mb-[30vh] ">
      <Card className="w-[60%] md:w-[80%] sm:w-[90%]">
        <CardHeader>
          <CardTitle className="">{curCourse.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={curCourse.image}
            alt="guitar"
            className="rounded-md w-full h-full"
          />
        </CardContent>
      </Card>

      <Card className="w-[60%] md:w-[80%] sm:w-[90%]">
        <CardHeader>
          <CardTitle className="font-serif">
            Price : {curCourse.price} /-
          </CardTitle>
          <CardDescription className="max-w-[70%] md:max-w-[90%] text-pretty">
            <p className="text-lg font-mono">
              Instructor : {curCourse.teacher}
            </p>
            <p className="text-lg font-mono">Duration : {curCourse.duration}</p>
            {curCourse.description}
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-[60%] md:w-[80%] sm:w-[90%] ">
        <CardHeader>
          <CardTitle>Curriculum</CardTitle>
        </CardHeader>
        <CardContent>
          <ol>
            {!!curCourse?.curriculum &&
              curCourse?.curriculum?.map((val, i) => {
                return (
                  <li
                    key={val}
                    className="text-gray-700 text-2xl text-wrap border-b-2 w-[90%]  my-1 font-semibold rounded-md p-3 hover:bg-black/20 hover:text-gray-950 md:w-[100%]"
                  >
                    {i + 1 + ". " + val}
                  </li>
                );
              })}
          </ol>
        </CardContent>
      </Card>

      <Card className="w-[60%] md:w-[80%] sm:w-[90%]">
        <CardHeader>
          <CardTitle>Frequently Aasked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <CourseAccordion
            benefits={curCourse.benefits}
            services={curCourse.services}
          />
        </CardContent>
      </Card>

      <ContactUs className={"w-[60%]  md:w-[80%] sm:w-[90%] "} />
    </div>
  );
};

export default CourseViewPage;
