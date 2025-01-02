"use client";
import { FAQ } from "@/app/static/faq";
import React, { useState } from "react";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <ul className="flex flex-col">
      {FAQ.map((faq, index) => (
        <li key={index} className="bg-gray-200 my-2 shadow-lg rounded-md">
          <h2
            onClick={() => toggleTab(index)}
            className="flex justify-between items-center font-semibold p-4 cursor-pointer"
          >
            <span>{faq.question}</span>
            <svg
              className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                activeTab === index ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
            </svg>
          </h2>
          <div
            className={`border-l-2 border-purple-600 overflow-hidden transition-all duration-500 ${
              activeTab === index ? "max-h-[500px]" : "max-h-0"
            }`}
            style={{
              maxHeight:
                activeTab === index
                  ? `${
                      (
                        document.querySelector(
                          `.faq-answer-${index}`
                        ) as HTMLElement
                      )?.scrollHeight
                    }px`
                  : "0px",
            }}
          >
            <p className={`p-3 text-gray faq-answer-${index}`}>{faq.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
