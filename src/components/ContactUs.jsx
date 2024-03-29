import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import db, { addDoc, collection } from "../utils/firebase";

const ContactUs = ({ className }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("start");
    setIsLoading(true);
    console.log(formData);
    await addDoc(collection(db, "queries"), {
      ...formData,
      createdAt: new Date().toISOString(),
    });
    setIsLoading(false);

    alert("your request has been submited.");
    console.log("end");
  };

  const setData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col  items-center gap-4" onSubmit={onSubmit}>
          <Input
            placeholder="Full Name"
            name="name"
            className="w-1/2 md:w-full"
            required
            value={formData.name}
            onChange={setData}
          />
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            className="w-1/2 md:w-full"
            required
            value={formData.email}
            onChange={setData}
          />
          <Input
            placeholder="Please write your query here"
            type="text"
            name="queryText"
            className="w-1/2 md:w-full"
            required
            value={formData.queryText}
            onChange={setData}
          />

          <Button type="submit" className="w-1/2">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactUs;
