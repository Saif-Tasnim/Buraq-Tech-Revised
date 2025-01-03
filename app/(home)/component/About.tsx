import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="my-20 w-11/12 lg:w-4/5 mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
        <div>
          <Image
            src="/img/about_buraq.jpg"
            alt="buraq"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-start gap-6 lg:w-1/2">
          <h1 className="italic font-medium text-2xl">
            Empowering Businesses with Cutting-Edge Web Solutions
          </h1>
          <p>
            We are a team of passionate developers, designers, and strategists
            dedicated to crafting stunning websites and innovative IT solutions.
            With a focus on quality, creativity, and customer satisfaction, we
            help businesses thrive in the digital world.
          </p>
          <p>
            At the heart of what we do lies a commitment to excellence, where
            every line of code, every pixel, and every strategy is meticulously
            designed to reflect your brand’s unique identity and goals. We
            believe that a well-crafted digital presence is more than just a
            website—it’s a powerful tool to connect, engage, and grow....
          </p>
          <Link
            href="/about"
            className="transition-all duration-500 px-4 py-2 bg-light-secondary lg:w-1/3 rounded dark:bg-dark-primary hover:bg-dark-secondary hover:text-gray-100"
          >
            Know About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
