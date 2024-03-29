import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ image, title, description, price, url }) => {
  const navigate = useNavigate();
  return (
    <Card className="w-[350px] m-7 max-h-[450px] ">
      <CardHeader>
        <img
          src={image}
          alt=""
          className="rounded-md w-[300px] h-[200px] object-cover"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <h3 className=" text-2xl font-bold">{price}</h3>
        <Button variant="outline" onClick={() => navigate(`/course/${url}`)}>
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
