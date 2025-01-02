import Image from "next/image";
import React from "react";

const Address = () => {
  return (
    <div className="my-24 w-11/12 lg:w-4/5 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-9">
        <div>
          <Image
            src="/img/cta.png"
            alt="cta_image"
            width={1600}
            height={1000}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-light-primary">Lets Discuss About Your Project</h1>
          <p className="my-6 text-justify">
            Let&apos;s start a conversation! Our company is committed to
            building trust and fostering long-term relationships that benefit us
            both. Reach out to us now for a quick chat, and let&apos;s turn your
            ideas into reality together.
          </p>
          <button className="bg-light-primary text-gray-100 px-6 py-3 rounded-md">Discus a Project</button>
        </div>
      </div>
    </div>
  );
};

export default Address;
