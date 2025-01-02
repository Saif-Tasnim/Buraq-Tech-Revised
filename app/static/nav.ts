interface INavBar {
  id: number;
  href: string;
  label: string;
}

export const NAVBAR: INavBar[] = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/services",
    label: "Our Service",
  },
  {
    id: 3,
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    id: 4,
    href: "/blogs",
    label: "Blogs",
  },
  {
    id: 5,
    href: "/contact",
    label: "Contact Us",
  },
];
