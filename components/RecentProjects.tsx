/* eslint-disable @next/next/no-img-element */
"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    des: "Fully custom portfolio websites tailored to each client's field, major, and professional background — built to make a strong first impression.",
    img: "./p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://six-dev.com/",
  },
  {
    id: 2,
    title: "Onco Egypt",
    des: "An intelligent WhatsApp-based platform supporting breast cancer patients with instant, accessible guidance — no apps or technical knowledge needed.",
    img: "https://993jw432iw.ufs.sh/f/51exUUinK6w325WX0K6rHvc1hedTSqGCJE5usVN8tFWAnQL0",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    link: "https://oncoegypt.com/",
  },
  {
    id: 3,
    title: "Pixel Gate",
    des: "A social media management platform for teams — schedule posts, track analytics, collaborate with roles and approvals, all in one place.",
    img: "https://993jw432iw.ufs.sh/f/51exUUinK6w3URce2ivXhwLAeiMgIboVzZcYS712HWalQm4G",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://pixel-gate.com/",
  },
  {
    id: 4,
    title: "Easy Fast",
    des: "A full-stack food ordering system with a RESTful backend, penetration testing coverage, and a smooth mobile experience similar to Talabat or Uber Eats.",
    img: "https://993jw432iw.ufs.sh/f/51exUUinK6w3qvOdfAM4AY5ur8SnoZjhm1QwXBdbxLlkKaDs",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://play.google.com/store/apps/details?id=com.efood.easyfast",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-8 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="icon5" className="p-1" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;