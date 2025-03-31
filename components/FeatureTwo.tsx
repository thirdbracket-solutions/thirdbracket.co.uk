import { Card } from "@thirdbracket/bracketui";
import { GiTeamIdea, GiTeamUpgrade } from "react-icons/gi";

import { GoStack } from "react-icons/go";
import { GrActions } from "react-icons/gr";

import { IoMedalOutline } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";
import {
  RiLock2Line,
  RiLockLine,
  RiLockUnlockLine,
  RiMedal2Line,
  RiMedalLine,
  RiRunLine,
  RiStackLine,
  RiTeamLine,
  RiUserCommunityLine,
} from "react-icons/ri";
import { TbBrandTeams } from "react-icons/tb";
import { TiGroupOutline } from "react-icons/ti";
import { VscUnlock } from "react-icons/vsc";

export function FeatureTwo() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl  ">
        <div className="mx-auto mb-8 md:mb-12 lg:mb-16 xl:max-w-6xl lg:max-w-6xl  md:max-w-3xl max-w-lg sm:max-w-xl">
          <h2 className="mb-4 md:mb-6  text-3xl lg:text-4xl font-extrabold  text-primary-950 dark:text-white  px-4 lg:px-0 text-center ">
            Best of Both Worlds- The Perfect Middle&nbsp;Ground
          </h2>
          <p className="text-primary-950/60 text-base md:text-lg lg:text-xl dark:text-primary-200/60 text-center px-4 lg:px-0 font-light  ">
            Freelancers can be unreliable. Agencies charge a premium. We offer
            the expertise, structure, and execution of an agency—without the
            overhead cost.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
          <Card
            size="lg"
            isIcon
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <RiMedal2Line className="h-12 w-12     text-secondary-950 dark:text-secondary-200 " />
            }
            header="Expertise & Flexibility"
            href="/solutions"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              Experience agency expertise with freelancer flexibility. Access a
              unified team of top-rated professionals, not just scattered
              freelancers.
            </span>
          </Card>
          <Card
            size="lg"
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            isIcon
            href="/solutions"
            cover={
              <RiStackLine className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="Modern Stack"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              Delivering the best of both worlds: Next.js and WordPress, with
              deep customization tailored to your needs.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            href="/services"
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <MdOutlineAutoGraph className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="Built for Growth"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              We don’t just build websites; from the start, we ensure your site
              is optimized for SEO, showcases your branding, and integrates
              digital marketing strategies to save you time in the long run.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            href="/services"
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <RiUserCommunityLine className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="Seamless Collaboration"
          >
            <span className="font-light">
              Unlike freelancers working in silos, our developers, marketers,
              and designers collaborate seamlessly, ensuring consistent,
              results-driven strategies tailored to your vision.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            href="/services"
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            cover={
              <VscUnlock className="h-12 w-12     text-secondary-900 dark:text-secondary-200" />
            }
            header="No Lock-in, No Bloat"
          >
            <span className="text-primary-950/60 dark:text-primary-200/60 font-light">
              Agencies sell retainers, and freelancers leave gaps. We provide
              transparent, scalable solutions without unnecessary overhead.
            </span>
          </Card>
          <Card
            className="rounded-lg border border-primary-500  border-opacity-30 overflow-hidden flex flex-col transition-all duration-300 ease-in-out focus-within:border-opacity-100 active:border-opacity-100 md:hover:border-opacity-100 "
            size="lg"
            isExternal
            isIcon
            href="/services"
            cover={
              <RiRunLine className="h-12 w-12     text-secondary-900 dark:text-secondary-200 " />
            }
            header="Get Started Today"
          >
            <span className=" font-light">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
}
