import { Button } from "@thirdbracket/bracketui";
import React from "react";
import { Nextjs, Tailwind, Vercel } from "./icons";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center  pb-8 sm:pb-12 md:pb-16 pt-20  lg:pt-24  space-y-8   mx-auto xl:max-w-6xl lg:max-w-4xl  md:max-w-3xl max-w-md sm:max-w-2xl   bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e2026_1px,transparent_1px)]  [background-size:16px_16px] ">
      <a
        href="#"
        className="flex items-center justify-between rounded-full  
    pr-3 py-0.5 pl-0.5  text-[10px] lg:text-[13px] 
     bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-secondary-100 via-secondary-50 to-white dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] dark:from-primary-900 dark:via-secondary-950 dark:to-primary-950 backdrop-blur-md
    text-primary-700 dark:text-primary-300 
    transition-opacity duration-200 ease-in-out text-nowrap
    motion-reduce:transition-none motion-reduce:hover:transform-none 
    hover:opacity-90 max-w-full tracking-wide"
      >
        <span
          className="mr-2 lg:mr-3 rounded-full 
    
    px-2 py-0.5  text-white dark:text-primary-950 
     bg-primary-800 dark:bg-primary-200"
        >
          New
        </span>
        <span className=" whitespace-nowrap truncate">
          Bracket UI version 4 is out! <u>See What’s New!</u>
        </span>
        <svg
          className="ml-2 lg:ml-3 
      size-3.5 lg:size-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      {/* Heading */}
      <div className="px-4">
        <h1 className="text-4xl/[1.1] font-extrabold md:text-5xl/[1.2] lg:text-6xl/[1.2] bg-gradient-primary dark:bg-gradient-primary-dark text-transparent bg-clip-text  text-center   uppercase">
          Custom Web Development & Digital Marketing in Manchester
        </h1>
      </div>
      {/* 800-#1f2937,900- #111827, 200-#e5e7eb, 100-#f3f4f6  #030712 #f9fafb*/}
      {/* Paragraph */}
      <p className="text-primary-900/60 text-sm/[1.5rem] md:text-base/[1.80rem] lg:text-lg/[2] dark:text-primary-200/60 font-light text-center px-4 max-w-5xl  backdrop-blur-sm">
        Everything you'd expect from an agency; resources, expertise, and
        strategy; at a price you'd normally pay a freelancer. Get{" "}
        <span className="font-bold ">custom web development</span> and digital
        marketing designed for startups and growing businesses.
      </p>

      {/* Button Group */}
      <div className="flex justify-center gap-3 md:gap-4 backdrop-blur-sm">
        <Button
          size="lg"
          className="hidden  lg:flex !bg-gradient-primary dark:!bg-gradient-primary-dark !text-white dark:!text-primary-950  [@media(hover:hover)]:hover:opacity-90 active:opacity-80"
        >
          Let's Grow
          <svg
            className="size-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button
          outline
          size="lg"
          className="hidden  lg:flex !border-secondary-100 dark:!border-secondary-950   !text-primary-900 dark:!text-primary-50  [@media(hover:hover)]:hover:!bg-primary-100 [@media(hover:hover)]:dark:hover:!bg-primary-900 active:!bg-primary-200 dark:active:!bg-secondary-900"
        >
          <svg
            className="size-4 mr-2"
            fill="currentColor"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
          </svg>
          Get Consultation
        </Button>
        <Button
          size="md"
          className="lg:hidden flex  !bg-gradient-primary dark:!bg-gradient-primary-dark !text-white dark:!text-primary-950 [@media(hover:hover)]:hover:opacity-90 active:opacity-85"
        >
          Let's Grow
          <svg
            className="size-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <Button
          outline
          size="md"
          className="lg:hidden flex !border-secondary-100 dark:!border-secondary-950   !text-primary-900 dark:!text-primary-50  [@media(hover:hover)]:hover:!bg-primary-100 [@media(hover:hover)]:dark:hover:!bg-primary-950 active:!bg-secondary-200 dark:active:!bg-secondary-900"
        >
          <svg
            className="size-4 mr-2"
            fill="currentColor"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
          </svg>
          Consult Us
        </Button>
      </div>
      {/* Featured section*/}
      <div className="mx-auto py-4 px-4 text-center   lg:px-36">
        <span className="font-semibold uppercase text-primary-500 backdrop-blur-sm">
          FEATURED IN
        </span>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center text-primary-500 sm:justify-between ">
          <a
            href="#"
            className="mb-5 mr-5 hover:text-primary-700 dark:hover:text-primary-400 lg:mb-0"
          >
            <Tailwind />
          </a>
          <a
            href="#"
            className="mb-5 mr-5 hover:text-primary-700 dark:hover:text-primary-400 lg:mb-0"
          >
            <Nextjs />
          </a>
          <a
            href="#"
            className="mb-5 mr-5  hover:text-primary-700 dark:hover:text-primary-400 lg:mb-0"
          >
            <Vercel />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
