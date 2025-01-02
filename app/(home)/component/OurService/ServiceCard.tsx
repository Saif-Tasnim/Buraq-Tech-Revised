"use client";
import { MagicCard } from "@/components/ui/magic-card";
import React, { FC } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface IServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: FC<IServiceCardProps> = ({ title, description, icon }) => {
  const { theme } = useTheme();

  return (
    <div className={"h-[500px] w-full lg:h-[300px]"}>
      <MagicCard
        className="cursor-pointer"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <Image
            src={icon}
            alt={`${title}_icons`}
            width={100}
            height={100}
            className="w-16 h-16 object-contain mb-5"
          />
          <h1 className="text-4xl text-center font-medium my-4">{title}</h1>
          <p className="text-sm mx-6 text-justify">{description}</p>
        </div>
      </MagicCard>
    </div>
  );
};

export default ServiceCard;
