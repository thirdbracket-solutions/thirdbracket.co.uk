// // components/Hero.tsx - Modified version
// import { Button } from "@thirdbracket/bracketui";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="space-y-8 py-16 sm:py-20 md:py-24">
//       {/* <h1 className="max-w-lg sm:max-w-xl     lg:max-w-4xl xl:max-w-6xl mx-auto font-extrabold text-gray-950 dark:text-white text-4xl sm:text-[44px] md:text-[50px]  leading-[1.1] lg:text-[60px] text-center  "> */}
//       <h1 className="text-5xl md:text-6xl  font-black mx-auto text-center lg:text-7xl md:max-w-5xl px-1 md:px-0">
//       Enterprise Solutions, Minus the Overhead Cost
//       </h1>

//       <p className="text-base/7 lg:text-lg/8 text-center  text-gray-500   mx-auto px-3 md:px-0 md:max-w-5xl    ">
//         We're a team of top-rated freelancers from leading marketplaces,
//         offering <strong>custom web development</strong>, enterprise-grade
//         infrastructure, and efficient business solutions.
//       </p>

//       <div className="flex flex-wrap gap-4 items-center justify-center">
//         {/* Desktop buttons */}
//         <div className="hidden md:block">
//           <Button size="xl" outline as={Link} href="#">
//             Let's Grow
//           </Button>
//         </div>
//         <div className="hidden md:block">
//           <Button size="xl" as={Link} href="#">
//             Our Solutions
//           </Button>
//         </div>

//         {/* Mobile buttons */}
//         <div className="md:hidden">
//           <Button size="lg" outline as={Link} href="#">
//             Let's Grow
//           </Button>
//         </div>
//         <div className="md:hidden">
//           <Button size="lg" as={Link} href="#">
//             Our Solutions
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// components/Hero.tsx
import { Button } from "@thirdbracket/bracketui";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="w-full h-full  bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#28282860_1px,transparent_1px),linear-gradient(to_bottom,#28282860_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="flex flex-col items-center space-y-6 sm:space-y-7 lg:space-y-8">
          <h1 className="text-[2.75rem]/[3rem] sm:text-[3.5rem]/[3.75rem] lg:text-[4.5rem]/[4.5rem] font-black text-center max-w-3xl sm:max-w-4xl lg:max-w-6xl px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text">
            Enterprise Solutions, Minus the Overhead Cost
          </h1>

          <p className="text-[0.9375rem]/[1.75rem] sm:text-[1.0625rem]/[1.875rem] lg:text-[1.1875rem]/[2rem] text-center text-gray-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl lg:max-w-4xl px-4">
            Everything you'd expect from an agency—resources, expertise, and
            strategy—at a price you'd normally pay a freelancer. Get custom web
            development and digital marketing designed for startups and growing
            businesses.
          </p>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-4 pt-4">
            <Button size="lg" outline as={Link} href="#">
              Let's Grow
            </Button>
            <Button size="lg" as={Link} href="#">
              Get Consultation
            </Button>
          </div>

          {/* Mobile and tablet buttons */}
          <div className="flex lg:hidden items-center gap-3 pt-2">
            <Button size="md" outline as={Link} href="#">
              Let's Grow
            </Button>
            <Button size="md" as={Link} href="#">
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
