"use client";

import { Icon } from "@/app/component/core";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const TestimonialCard = () => {
  const { theme } = useTheme();

  return (
    <div className="h-[500px] w-full lg:h-[400px]">
      <MagicCard
        className="cursor-pointer"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/img/testimonial-2.jpg"
              alt={`client_img`}
              width={400}
              height={400}
              className="w-14 h-14 object-contain rounded-full"
            />
            <div className="flex flex-col text-sm">
              <h1 className="font-medium">Harley David</h1>
              <h3>CEO, XYZ Inc.</h3>
            </div>
          </div>

          <Icon.FaQuoteLeft className="w-7 h-7 text-light-primary dark:text-dark-secondary ml-24" />

          <p className="text-sm my-5">
            Buraq Tech has been developing a SaaS product for us, and they
            certainly exceeded our expectations in many ways. Not only do they
            have the technical knowledge and expertise, but they have a great
            design team that has done a phenomenal job of creating exceptional
            looking software. They are extremely professional and could not be
            easier to work with. We highly suggest this team to anyone that is
            need of custom dev work!!
          </p>
        </div>
      </MagicCard>
    </div>
  );
};

export default TestimonialCard;
