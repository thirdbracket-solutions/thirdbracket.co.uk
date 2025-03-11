import {
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
  ThemeToggle,
} from "@thirdbracket/bracketui";
import Image from "next/image";

import Link from "next/link";
import { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Logo } from "./icons";

// import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

const Header: FC = () => {
  return (
    <header>
      <Navbar>
        <Navbrand logo={<Logo />} href="/"></Navbrand>

        <NavItem>
          <Megamenu label="Services">
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Explore Our Services
                  </h3>
                </div>
                <div className="flex flex-col space-y-3 ">
                  <Navlink href="#" as={Link} cto>
                    Web Development
                  </Navlink>
                  <Navlink href="#" as={Link} cto>
                    Digital Marketing
                  </Navlink>
                  <Navlink href="#" as={Link} cto>
                    Ui/Ux
                  </Navlink>
                </div>
                <div className="flex-grow"></div>

                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    Explore All
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Web Development
                  </h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Next.js Development
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    WordPress Development
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Headless & Serverles
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Custom Backend
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    API Development
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Other Dev Services
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Digital Marketing
                  </h3>{" "}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    SEO & Web Visibility
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Branding & Design
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Social Media Marketing
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    PPC & Social Ad
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Content & Copywriting
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Other Marketing Services
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Other Services
                  </h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    UI/UX Design
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Performance Optimization
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Prototyping
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6 ">
                  <Navlink
                    isDropdownItem
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                  >
                    More
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="megamenu.svg"
                    alt=""
                    width={500}
                    height={600}
                    className="w-full h-[250pxpx] dark:opacity-90 bg-gray-50  dark:bg-gray-800/50   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>
          <Megamenu label="Solutions">
            <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(0,220px))_250px]">
              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Explore Our Solutions
                  </h3>
                </div>
                <div className="flex flex-col space-y-3 ">
                  <Navlink href="#" as={Link} cto>
                    Automation & Integration
                  </Navlink>
                  <Navlink href="#" as={Link} cto>
                    UI/UX
                  </Navlink>
                </div>
                <div className="flex-grow"></div>

                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    Explore All
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Automation & Integration
                  </h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Form Integration
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Marketing Automation
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Search Integration
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Interntionalization
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    CI/CD
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Release Automation
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">UI/UX</h3>{" "}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Bracket UI
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Elementor Template
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Nextjs Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Wordpress Theme
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Reusable Blocks
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Landing Pages
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className=" mt-6 ">
                  <Navlink
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                    isDropdownItem
                  >
                    More
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>

              <div className="flex flex-col h-full ">
                <div className="mb-6">
                  <h3 className="text-xs leading-none text-gray-500">
                    Other Solutions
                  </h3>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Wordpress 360
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Notion Blog
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Business 360
                  </Navlink>
                </div>
                <div className="flex-grow"></div>
                <div className="mt-6 ">
                  <Navlink
                    isDropdownItem
                    as={Link}
                    href="#"
                    className="block md:inline-flex md:items-center gap-1"
                  >
                    More
                    <span>
                      <BiChevronRight
                        className="inline-flex items-center"
                        size={20}
                      />
                    </span>
                  </Navlink>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="p-2">
                  <Image
                    src="megamenu.svg"
                    alt=""
                    width={500}
                    height={600}
                    className="w-full h-[250pxpx] dark:opacity-90 bg-gray-50  dark:bg-gray-800/50   rounded-3xl"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          <Navlink as={Link} href="#">
            Case Studies
          </Navlink>

          <Navlink as={Link} href="#">
            About
          </Navlink>
          <Navlink as={Link} href="#">
            Blog
          </Navlink>
          <Navlink as={Link} href="#">
            Contact
          </Navlink>
        </NavItem>

        <MobileNav>
          <div className="space-y-2 py-1.5">
            <Megamenu label="Services">
              <div className="space-y-2 py-1.5">
                <Megamenu label="Web Development">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      Next.js Development
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      WordPress Development
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Headless & Serverles
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Custom Backend & API Development
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Other Development Services
                    </Navlink>
                  </div>
                </Megamenu>
                <Megamenu label="Digital Marketing">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      SEO & Web Visibility
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Branding & Design
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Social Media Marketing
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      PPC & Social Ad
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Content strategy & Copywriting
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Other Digital Marketing Services
                    </Navlink>
                  </div>
                </Megamenu>
                <Navlink as={Link} href="#" isDropdownItem>
                  UI/UX Design & Prototyping
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Performance Optimization
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Other Services
                </Navlink>
              </div>
            </Megamenu>

            <Megamenu label="Solutions">
              <div className="space-y-2 py-1.5">
                <Megamenu label="Automation & Integration">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      Form Integration
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Marketing Automation
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Search Integration
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Interntionalization
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      CI/CD
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Release Automation
                    </Navlink>
                  </div>
                </Megamenu>
                <Megamenu label="UI/UX">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      Bracket UI
                    </Navlink>
                    <Megamenu label="Templates">
                      <div className="space-y-2 py-1.5">
                        <Navlink as={Link} href="#" isDropdownItem>
                          Elementor Template
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Tailwind Template
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Html5 Template
                        </Navlink>
                      </div>
                    </Megamenu>
                    <Megamenu label="Themes">
                      <div className="space-y-2 py-1.5">
                        <Navlink as={Link} href="#" isDropdownItem>
                          Nextjs Themes
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Hugo Themes
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Wordpress Theme
                        </Navlink>
                      </div>
                    </Megamenu>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Reusable Blocks
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Landing Pages
                    </Navlink>
                  </div>
                </Megamenu>
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress 360
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Notion Blog
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Business 360
                </Navlink>
              </div>
            </Megamenu>

            <Navlink as={Link} href="#">
              Case Studies
            </Navlink>

            <Navlink as={Link} href="#">
              About
            </Navlink>
            <Navlink as={Link} href="#">
              Blog
            </Navlink>
            <Navlink as={Link} href="#">
              Contact
            </Navlink>
          </div>
        </MobileNav>
      </Navbar>
    </header>
  );
};
export default Header;
