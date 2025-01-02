import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="my-24 w-11/12 lg:w-4/5 mx-auto">
      <h1 className="text-3xl font-medium text-center">
        User Frequently Want to Know{" "}
      </h1>
      <p className="text-center py-4">
        There is some common question and answer that users always want to know
        about us and our agency
      </p>
      <div className="my-8 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/faq.svg"
            alt="faq_image"
            width={1000}
            height={1000}
            className="bg-light-bg dark:bg-dark-bg"
          />
          <h1 className="text-center text-5xl font-medium">FAQs</h1>
        </div>
        <div className="w-full lg:w-1/2">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
