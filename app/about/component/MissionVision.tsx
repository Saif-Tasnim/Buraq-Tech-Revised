"use client";
import { Icon } from "@/app/component/core";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

const MissionVision = () => {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 w-11/12 lg:w-4/5 mx-auto">
      {/* Mission Magic Card */}
      <div className={"h-[600px] w-full lg:h-[460px]"}>
        <MagicCard
          className="cursor-pointer"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <Icon.FaBullseye className="text-blue-600 text-5xl mb-1" />
            <h1 className="text-4xl text-center font-medium my-3">
              Our Mission
            </h1>
            <p className="text-sm mx-6 text-justify mb-6">
              Empower businesses with innovative web development solutions,
              deliver seamless user experiences, ensure robust digital security,
              and drive brand growth with targeted digital marketing strategies.
            </p>

            <ul className="space-y-4 mx-4">
              <li className="flex items-start gap-2">
                <Icon.FaBullseye className="text-blue-500 w-8 h-8" />
                <span>
                  <b>Empower Businesses:</b> Provide innovative web development
                  solutions tailored to client needs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon.FaUserFriends className="text-green-500 w-8 h-8" />
                <span>
                  <b>Deliver Seamless Experiences:</b> Create user-centric
                  interfaces for optimal usability.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon.FaShieldAlt className="text-red-500 w-8 h-8" />
                <span>
                  <b>Ensure Digital Security:</b> Offer robust cybersecurity
                  solutions to safeguard client data.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon.FaChartLine className="text-yellow-500 w-8 h-8" />
                <span>
                  <b>Drive Brand Growth:</b> Leverage targeted digital marketing
                  strategies for measurable results.
                </span>
              </li>
            </ul>
          </div>
        </MagicCard>
      </div>

      {/* Vision Magic Card */}
      <div className={"h-[600px] w-full lg:h-[460px]"}>
        <MagicCard
          className="cursor-pointer"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <Icon.FaLightbulb className="text-yellow-500 text-5xl mb-1" />
            <h1 className="text-4xl text-center font-medium my-2.5">
              Our Vision
            </h1>
            <p className="text-sm mx-6 text-justify mb-4">
              Become a global leader in web development and digital innovation,
              set industry standards for design and functionality, foster
              long-term partnerships, and transform businesses with AI-powered
              tools and scalable solutions.
            </p>
            <ul className="space-y-4 mx-4">
              <li className="flex items-start gap-2">
                <Icon.FaGlobeAmericas className="text-blue-500 w-8 h-8" />
                <span>
                  <b>Global Leadership:</b> Aspire to be a world leader in web
                  development and digital innovation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon.FaAward className="text-green-500 w-8 h-8" />
                <span>
                  <b> Industry Standards:</b> Set benchmarks for exceptional
                  design and cutting-edge functionality.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon.FaHandshake className="text-red-500 w-8 h-8" />
                <span>
                  <b>Long-Term Partnerships:</b> Build trust with clients to
                  foster lasting collaborations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon.FaRobot className="text-yellow-500 w-8 h-8" />
                <span>
                  <b>Transformative AI Solutions:</b> Integrate AI-powered tools
                  for scalable business transformation.
                </span>
              </li>
            </ul>
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default MissionVision;
