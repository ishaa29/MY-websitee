"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image component

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const testimonials = [
    {
      quote:
        "I create visually stunning and highly interactive web experiences. With expertise in React, Next.js, and modern UI frameworks, I craft engaging and dynamic user interfaces that leave a lasting impact.",
      name: "Isha Dutt",
      title: "Frontend Developer | UI/UX Enthusiast",
      image: "/cognizant.jpg", // ✅ Your Correct Profile Image
    },
    {
      quote:
        "As a software developer, I excel in Java, AI-powered applications, and database-driven solutions. I specialize in optimizing performance and integrating machine learning into software for smarter automation.",
      name: "Isha Dutt",
      title: "Software Developer | AI Innovator",
      image: "/cognizant.jpg", // ✅ Your Correct Profile Image
    },
    {
      quote:
        "With expertise in social media marketing, content strategy, and SEO, I drive brand engagement and visibility. I blend creativity with data-driven decisions to maximize digital marketing results.",
      name: "Isha Dutt",
      title: "Digital Marketing Specialist | Growth Hacker",
      image: "/cognizant.jpg", // ✅ Your Correct Profile Image
    },
    {
      quote:
        "Passionate about project management, I streamline workflows, enhance team collaboration, and ensure project success. My focus is on agile methodologies and efficient execution.",
      name: "Isha Dutt",
      title: "Project Manager | Agile Strategist",
      image: "/cognizant.jpg", // ✅ Your Correct Profile Image
    },
    {
      quote:
        "I specialize in building seamless and responsive mobile applications. With a deep understanding of iOS development and user experience, I create apps that are both functional and visually appealing.",
      name: "Isha Dutt",
      title: "Mobile App Developer | iOS Specialist",
      image: "/cognizant.jpg", // ✅ Your Correct Profile Image
    },
    {
      quote:
        "A creative mind with a strong technical background, I combine AI and web development to build intelligent applications. I focus on automation, chatbots, and AI-enhanced user experiences.",
      name: "Isha Dutt",
      title: "AI Engineer | Web Innovator",
      image: "/cognizant.jpg", // ✅ Your Correct Profile Image
    },
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+_4px)] w-[calc(100%+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <Image
                    src={item.image} // ✅ Fix: Now using Next.js <Image> component
                    alt="Isha Dutt"
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full border border-gray-400"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
