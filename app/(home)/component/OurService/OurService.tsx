import { SERVICES } from "@/app/static/services";
import React from "react";
import ServiceCard from "./ServiceCard";

const OurService = () => {
  return (
    <div className="my-24 w-11/12 lg:w-4/5 mx-auto">
      <h1 className="text-3xl font-medium text-center"> What We will Do </h1>
      <p className="text-center py-4">
        Our services follow the criteria matched with below
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-9">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default OurService;
