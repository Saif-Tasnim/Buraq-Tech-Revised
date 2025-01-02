interface IServices {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: IServices[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building high-performance, responsive, and user-friendly websites tailored to drive your business goals.",
    icon: "/icons/web.png",
  },
  {
    id: 2,
    title: "UIX Design",
    description:
      "Crafting visually stunning and intuitive designs that deliver seamless user experiences.",
    icon: "/icons/ui.png",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Creating eye-catching visuals that communicate your brand's identity and captivate your audience.",
    icon: "/icons/graphics.png",
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Protecting your digital assets with robust security solutions to safeguard against online threats.",
    icon: "/icons/hack.png",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Driving growth with data-driven strategies that amplify your online presence and reach.",
    icon: "/icons/market.png",
  },
];
