import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <div className="my-20 w-11/12 lg:w-4/5 mx-auto grid grid-cols-12 place-content-center gap-8">
      <div className="lg:col-span-8 col-span-12 leading-relaxed flex flex-col justify-start gap-4 mx-5 lg:mx-0">
        {" "}
        <p>
          Our story began in 2021, with a vision to redefine how businesses
          establish their online presence. Starting as a small team of web
          design experts, we’ve grown into a full-service digital agency
          offering cutting-edge services, from responsive web design to
          e-commerce solutions and full-stack development. Over the years, we’ve
          partnered with startups, small businesses, and global enterprises to
          build impactful websites that drive growth.
        </p>
        <p>
          At Buraq Tech, we are a full-service digital agency dedicated to
          crafting exceptional digital solutions. Our expertise spans
          <Link href="/services/web-develop" className="px-2 underline">
            Web Development,
          </Link>
          <Link href="/services/ui-design" className="pr-2 underline">
            UI/UX design,
          </Link>
          <Link href="/services/graphic-design" className="pr-2 underline">
            Cybersecurity,
          </Link>
          <Link href="/services/cyber-security" className="pr-2 underline">
            Graphic Design,
          </Link>
          and
          <Link href="/services/digital-marketing" className="px-2 underline">
            Digital Marketing.
          </Link>
          Whether you’re looking for a custom-built website, a stunning user
          interface, or strategies to enhance your online presence, we deliver
          innovative, results-driven solutions.
        </p>
        <p>
          With a focus on SEO optimization and cutting-edge technologies, we
          empower businesses to achieve growth and stay secure in an
          ever-evolving digital landscape. Let us turn your vision into a
          high-performing, scalable digital experience.
        </p>
      </div>

      <div className="lg:col-span-4 col-span-12 max-h-[580px]">
        <Image
          src="/img/other.jpg"
          alt="about_img"
          width={400}
          height={600}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Content;
