import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseAccordion = ({ benefits, services }) => {
  return (
    <div className="mt-10">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What service we provide?</AccordionTrigger>
          <AccordionContent>
            <ol>
              {!!services &&
                services?.map((val, i) => {
                  return (
                    <li
                      key={val}
                      className="text-gray-700 text-2xl text-wrap bg-black/10 w-[90%]  my-1 font-semibold rounded-md p-2 hover:bg-black/20 hover:text-gray-950 md:w-[100%]"
                    >
                      {i + 1 + ". " + val}
                    </li>
                  );
                })}
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What are the benifits?</AccordionTrigger>
          <AccordionContent>
            <ol>
              {!!benefits &&
                benefits.map((val, i) => {
                  return (
                    <li
                      key={val}
                      className="text-gray-700 text-2xl text-wrap bg-black/10 w-[90%]  my-1 font-semibold rounded-md p-2 hover:bg-black/20 hover:text-gray-950 md:w-[100%]"
                    >
                      {i + 1 + ". " + val}
                    </li>
                  );
                })}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CourseAccordion;
