// // components/Features.tsx
// "use client";

// import { BiChevronRight } from "react-icons/bi";

// import Link from "next/link";
// import { Card, Navlink } from "@thirdbracket/bracketui";

// const Features = () => {
//   return (
//     <section className="space-y-2 py-12 sm:py-16 md:py-20">
//       <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
//         <h2 className="font-bold text-center text-4xl md:text-5xl lg:text-6xl text-gray-950 dark:text-white">
//           Key Features
//         </h2>
//         <p className="text-base/7 lg:text-lg/8 text-center text-gray-500">
//           Modern UI components designed for seamless development
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
//         {/* Left Column - Featured Feature Card */}
//         <Card
//           href="#"
//           className="h-full"
//           isExternal
//           cover={
//             <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#282828fg_1px,transparent_1px),linear-gradient(to_bottom,#282828fg_1px,transparent_1px)] bg-[size:24px_24px]">
//               <svg
//                 version="1.1"
//                 viewBox="0 0 24 24"
//                 xmlSpace="preserve"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="size-52 sm:size-60 text-current  p-4 "
//               >
//                 <path
//                   d="m10.944 2.4375c0.5833-0.58334 1.5291-0.58333 2.1124 0l2.8567 2.8566c0.5833 0.58333 0.5833 1.5291 0 2.1124l-2.8567 2.8566c-0.5833 0.5834-1.5291 0.5834-2.1124 0l-2.8567-2.8566c-0.58334-0.58334-0.58334-1.5291 0-2.1124l2.8567-2.8566zm1.0562 1.7722-2.1407 2.1407 2.1407 2.1407 2.1407-2.1407-2.1407-2.1407zm-6.7059 3.8774c0.58335-0.58334 1.5291-0.58334 2.1125 0l2.8566 2.8567c0.5834 0.5833 0.5834 1.5291 0 2.1124l-2.8566 2.8567c-0.58334 0.5833-1.5291 0.5833-2.1125 0l-2.8566-2.8567c-0.58334-0.5833-0.58333-1.5291 0-2.1124l2.8566-2.8567zm1.0562 1.7722-2.1407 2.1407 2.1407 2.1407 2.1407-2.1407-2.1407-2.1407zm10.243-1.7722c0.5833-0.58334 1.5291-0.58334 2.1125 0l2.8566 2.8567c0.5833 0.5833 0.5833 1.5291 0 2.1124l-2.8566 2.8567c-0.5834 0.5833-1.5292 0.5833-2.1125 0l-2.8566-2.8567c-0.5834-0.5833-0.5834-1.5291 0-2.1124l2.8566-2.8567zm1.0562 1.7722-2.1406 2.1407 2.1406 2.1407 2.1407-2.1407-2.1407-2.1407zm-6.7058 3.8775c0.5833-0.5834 1.5291-0.5834 2.1124 0l2.8567 2.8566c0.5833 0.5833 0.5833 1.5291 0 2.1125l-2.8567 2.8566c-0.5833 0.5833-1.5291 0.5833-2.1124 0l-2.8567-2.8566c-0.58334-0.5834-0.58334-1.5292 0-2.1125l2.8567-2.8566zm1.0562 1.7722-2.1407 2.1406 2.1407 2.1407 2.1407-2.1407-2.1407-2.1406z"
//                   clip-rule="evenodd"
//                   fill="currentColor"
//                   fill-rule="evenodd"
//                 />
//               </svg>
//             </div>
//           }
//           header="Component Library"
//         >
//           Extensive collection of fully customizable React components built with
//           TypeScript and Tailwind CSS. Designed for maximum flexibility and ease
//           of use.
//         </Card>

//         {/* Right Column - Stack of Cards */}
//         <div className="space-y-4">
//           {/* Theming System */}
//           <Card header="Theming System">
//             Powerful theming capabilities with dark mode support and
//             customizable design tokens. Seamlessly integrate with your brand
//             identity.
//           </Card>

//           {/* Accessibility */}
//           <Card header="Accessibility">
//             WCAG 2.1 compliant components with full keyboard navigation and
//             screen reader support. Built with inclusivity in mind.
//           </Card>

//           {/* Customization */}
//           <Card header="Easy Customization">
//             Flexible styling system using Tailwind CSS utilities. Customize
//             components without fighting against default styles.
//           </Card>

//           {/* TypeScript Support */}
//           <Card href="#" isExternal header="TypeScript Ready">
//             Built with TypeScript for better developer experience. Includes
//             comprehensive type definitions and intelligent autocompletion.
//           </Card>
//         </div>
//       </div>

//       <div className="flex justify-center mt-8">
//         <Navlink
//           as={Link}
//           href="#"
//           className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
//         >
//           Explore All Features
//           <span className="inline-flex items-center">
//             <BiChevronRight size={20} />
//           </span>
//         </Navlink>
//       </div>
//     </section>
//   );
// };

// export default Features;

// components/Features.tsx
"use client";
import Image from "next/image";

import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";

const Features = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="space-y-6 sm:space-y-7 lg:space-y-8">
        {/* Header group */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start gap-5 sm:gap-6  lg:gap-7   ">
          <h2 className="max-w-3xl sm:max-w-4xl lg:max-w-6xl text-[1.875rem]/[2.375rem] sm:text-[2.25rem]/[2.75rem] lg:text-[2.75rem]/[3.25rem] font-black text-center lg:text-right text-gray-950 dark:text-white ">
            Think Your Business Can’t Afford a Professional Start?
          </h2>
          <p className="text-[0.9375rem]/[1.75rem] sm:text-[1.0625rem]/[1.875rem] lg:text-[1.1875rem]/[2rem] text-center lg:text-left text-gray-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl lg:max-w-4xl ">
            We bring enterprise-level web development and digital marketing
            solutions within your budget, so you never feel left behind.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mx-auto justify-center">
          {/* Left Column - Featured Feature Card */}
          <Card
            href="#"
            className="h-full"
            cover={
              <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#28282860_1px,transparent_1px),linear-gradient(to_bottom,#28282860_1px,transparent_1px)] bg-[size:24px_24px]">
                <Image
                  src="card1.svg"
                  width={500}
                  height={500}
                  alt=""
                  className="aspect-video object-contain dark:grayscale-[1] grayscale-[0.8]"
                ></Image>
              </div>
            }
            header="Your Website Is Your Business’s First Impression"
          >
            Make your first impression count with a custom website—something
            your business couldn’t afford until now.
          </Card>

          {/* Right Column - Stack of Cards */}
          <div className="space-y-4">
            <Card header="Finding the Right UI is Frustrating—We’ve Simplified It">
              Piecing together UI elements is time-consuming. We provide a React
              component library and Elementor templates for WordPress—modern,
              flexible, and ready to use.
            </Card>

            <Card header="Missing Modern Features? Your Website Deserves Better">
              Most websites lack speed and SEO optimization. We use Next.js
              features like server-side rendering and image optimization to give
              you an edge.
            </Card>

            <Card header="Struggling to Find the Right Marketer? Get a Whole Team">
              Hiring a good freelancer is hit-or-miss, and agencies are
              expensive. Our developers, designers, and marketers work as one to
              drive real results.
            </Card>

            <Card
              href="#"
              isExternal
              header="SEO Takes Too Long—We Speed It Up"
            >
              SEO can be slow and unpredictable. Our AI-driven strategies and
              marketplace expertise accelerate rankings and improve visibility
              faster.
            </Card>
          </div>
        </div>

        <div className="flex justify-center">
          <Navlink
            as={Link}
            href="#"
            className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
          >
            Explore All Features
            <BiChevronRight size={20} />
          </Navlink>
        </div>
      </div>
    </section>
  );
};

export default Features;
