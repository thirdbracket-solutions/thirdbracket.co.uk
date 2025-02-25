"use client";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";

const Solutions = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="space-y-8">
        {/* Header group */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-[1.65rem]/[2rem] md:text-3xl font-black mb-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text">
            Think Your Business Can't Afford a Professional Start?
          </h2>
          <p className="text-base md:text-xl text-gray-800/70 dark:text-gray-200/40">
            Backed by a team of top-rated freelancers, now you can get the
            professional start your business deserves.
          </p>
        </div>

        {/* Featured Card - Full Width */}
        <Card
          href="#"
          className="max-w-5xl mx-auto"
          cover={
            <div className="w-full h-64 flex items-center justify-center">
              <Image
                src="card1.svg"
                width={500}
                height={500}
                alt=""
                className="aspect-video object-contain dark:grayscale-[1] grayscale-[0.8]"
              />
            </div>
          }
          header={
            <h4 className="text-center">
              Website Is Your Business's First Impression
            </h4>
          }
        >
          <p className="text-center">
            Make your first impression count with a custom website—something
            your business couldn't afford until now.
          </p>
        </Card>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card header="Finding the Right UI is Frustrating">
            We've Simplified It. Piecing together UI elements is time-consuming.
            We provide a React component library and Elementor templates for
            WordPress—modern, flexible, and ready to use.
          </Card>

          <Card header="Missing Modern Features?">
            Your Website Deserves Better. Most websites lack speed and SEO
            optimization. We use Next.js features like server-side rendering and
            image optimization to give you an edge.
          </Card>

          <Card header="Struggling to Find the Right Marketer?">
            Get a Whole Team. Hiring a good freelancer is hit-or-miss, and
            agencies are expensive. Our developers, designers, and marketers
            work as one to drive real results.
          </Card>
        </div>

        {/* Bottom Feature Card */}
        <Card
          href="#"
          isExternal
          header="SEO Takes Too Long?"
          className="max-w-5xl mx-auto"
        >
          We Speed It Up. SEO can be slow and unpredictable. Our AI-driven
          strategies and marketplace expertise accelerate rankings and improve
          visibility faster.
        </Card>

        {/* Explore Link */}
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

export default Solutions;
