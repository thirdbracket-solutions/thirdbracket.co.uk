// components/Features.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";

import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";

const Features = () => {
  return (
    <section className="space-y-2 py-12 sm:py-16 md:py-20">
      <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
        <h2 className="font-bold text-center text-4xl md:text-5xl lg:text-6xl text-gray-950 dark:text-white">
          Key Features
        </h2>
        <p className="text-base/7 lg:text-lg/8 text-center text-gray-500">
          Modern UI components designed for seamless development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
        {/* Left Column - Featured Feature Card */}
        <Card
          href="#"
          className="h-full"
          isExternal
          cover={
            <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#282828fg_1px,transparent_1px),linear-gradient(to_bottom,#282828fg_1px,transparent_1px)] bg-[size:24px_24px]">
              <svg
                version="1.1"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className="size-52 sm:size-60 text-current  p-4 "
              >
                <path
                  d="m10.944 2.4375c0.5833-0.58334 1.5291-0.58333 2.1124 0l2.8567 2.8566c0.5833 0.58333 0.5833 1.5291 0 2.1124l-2.8567 2.8566c-0.5833 0.5834-1.5291 0.5834-2.1124 0l-2.8567-2.8566c-0.58334-0.58334-0.58334-1.5291 0-2.1124l2.8567-2.8566zm1.0562 1.7722-2.1407 2.1407 2.1407 2.1407 2.1407-2.1407-2.1407-2.1407zm-6.7059 3.8774c0.58335-0.58334 1.5291-0.58334 2.1125 0l2.8566 2.8567c0.5834 0.5833 0.5834 1.5291 0 2.1124l-2.8566 2.8567c-0.58334 0.5833-1.5291 0.5833-2.1125 0l-2.8566-2.8567c-0.58334-0.5833-0.58333-1.5291 0-2.1124l2.8566-2.8567zm1.0562 1.7722-2.1407 2.1407 2.1407 2.1407 2.1407-2.1407-2.1407-2.1407zm10.243-1.7722c0.5833-0.58334 1.5291-0.58334 2.1125 0l2.8566 2.8567c0.5833 0.5833 0.5833 1.5291 0 2.1124l-2.8566 2.8567c-0.5834 0.5833-1.5292 0.5833-2.1125 0l-2.8566-2.8567c-0.5834-0.5833-0.5834-1.5291 0-2.1124l2.8566-2.8567zm1.0562 1.7722-2.1406 2.1407 2.1406 2.1407 2.1407-2.1407-2.1407-2.1407zm-6.7058 3.8775c0.5833-0.5834 1.5291-0.5834 2.1124 0l2.8567 2.8566c0.5833 0.5833 0.5833 1.5291 0 2.1125l-2.8567 2.8566c-0.5833 0.5833-1.5291 0.5833-2.1124 0l-2.8567-2.8566c-0.58334-0.5834-0.58334-1.5292 0-2.1125l2.8567-2.8566zm1.0562 1.7722-2.1407 2.1406 2.1407 2.1407 2.1407-2.1407-2.1407-2.1406z"
                  clip-rule="evenodd"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          }
          header="Component Library"
        >
          Extensive collection of fully customizable React components built with
          TypeScript and Tailwind CSS. Designed for maximum flexibility and ease
          of use.
        </Card>

        {/* Right Column - Stack of Cards */}
        <div className="space-y-4">
          {/* Theming System */}
          <Card header="Theming System">
            Powerful theming capabilities with dark mode support and
            customizable design tokens. Seamlessly integrate with your brand
            identity.
          </Card>

          {/* Accessibility */}
          <Card header="Accessibility">
            WCAG 2.1 compliant components with full keyboard navigation and
            screen reader support. Built with inclusivity in mind.
          </Card>

          {/* Customization */}
          <Card header="Easy Customization">
            Flexible styling system using Tailwind CSS utilities. Customize
            components without fighting against default styles.
          </Card>

          {/* TypeScript Support */}
          <Card href="#" isExternal header="TypeScript Ready">
            Built with TypeScript for better developer experience. Includes
            comprehensive type definitions and intelligent autocompletion.
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Navlink
          as={Link}
          href="#"
          className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
        >
          Explore All Features
          <span className="inline-flex items-center">
            <BiChevronRight size={20} />
          </span>
        </Navlink>
      </div>
    </section>
  );
};

export default Features;
