// src/app/services/page.tsx
import { Bracket } from "@thirdbracket/bracketui";
import PageHeader from "../../../components/PageHeader";
import { IconType } from "react-icons";
import {
  FaCode,
  FaWordpress,
  FaServer,
  FaSearch,
  FaPalette,
  FaBullhorn,
  FaPencilAlt,
  FaRocket,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdSpeed, MdDesignServices, MdBrandingWatermark } from "react-icons/md";

interface ServiceCategory {
  title: string;
  description: string;
  services: Service[];
}

interface Service {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

function ServiceCard({ title, description, icon: Icon, features }: Service) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-lg">
        <Icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
          >
            <span className="w-1.5 h-1.5 bg-slate-600 dark:bg-slate-400 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategorySection({ title, description, services }: ServiceCategory) {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className="bg-slate-600 dark:bg-slate-700 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">
        Ready to Transform Your Digital Presence?
      </h3>
      <p className="text-slate-100 mb-6">
        Let's discuss how we can help you achieve your goals
      </p>
      <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
        Contact Us
      </button>
    </div>
  );
}

export default function Services() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Web Development",
      description: "Modern web solutions built with cutting-edge technologies",
      services: [
        {
          title: "Next.js Development",
          description:
            "High-performance React applications with server-side rendering",
          icon: SiNextdotjs,
          features: [
            "Server-side rendering",
            "Static site generation",
            "API routes and serverless functions",
            "Performance optimization",
            "SEO-friendly architecture",
          ],
        },
        {
          title: "WordPress Development",
          description: "Custom WordPress solutions for content-driven websites",
          icon: FaWordpress,
          features: [
            "Custom theme development",
            "Plugin development",
            "WooCommerce integration",
            "Performance optimization",
            "Security hardening",
          ],
        },
        {
          title: "Headless & Serverless",
          description: "Modern architectures for scalable applications",
          icon: FaServer,
          features: [
            "Headless CMS integration",
            "JAMstack architecture",
            "Serverless functions",
            "API development",
            "Cloud deployment",
          ],
        },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to grow your business",
      services: [
        {
          title: "SEO & Web Visibility",
          description:
            "Improve your search engine rankings and online presence",
          icon: FaSearch,
          features: [
            "Technical SEO optimization",
            "Content strategy",
            "Keyword research",
            "Link building",
            "Performance tracking",
          ],
        },
        {
          title: "Branding & Design",
          description: "Create a strong brand identity that resonates",
          icon: MdBrandingWatermark,
          features: [
            "Brand strategy",
            "Visual identity design",
            "Brand guidelines",
            "Marketing materials",
            "Brand messaging",
          ],
        },
        {
          title: "Content & Copywriting",
          description: "Engaging content that converts visitors into customers",
          icon: FaPencilAlt,
          features: [
            "Website copywriting",
            "Blog content",
            "Email campaigns",
            "Social media content",
            "SEO copywriting",
          ],
        },
      ],
    },
    {
      title: "Other Services",
      description: "Specialized solutions to enhance your digital products",
      services: [
        {
          title: "UI/UX Design",
          description: "User-centered design solutions for digital products",
          icon: MdDesignServices,
          features: [
            "User interface design",
            "User experience design",
            "Wireframing",
            "Prototyping",
            "Usability testing",
          ],
        },
        {
          title: "Performance Optimization",
          description: "Optimize your applications for speed and efficiency",
          icon: MdSpeed,
          features: [
            "Load time optimization",
            "Code optimization",
            "Database optimization",
            "Caching strategies",
            "Performance monitoring",
          ],
        },
        {
          title: "Prototyping",
          description: "Rapid prototyping for concept validation",
          icon: FaRocket,
          features: [
            "Interactive prototypes",
            "MVP development",
            "Concept validation",
            "User testing",
            "Iterative development",
          ],
        },
      ],
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <PageHeader
          title="Our Services"
          description="Comprehensive digital solutions tailored to your needs"
        />

        <div className="max-w-7xl mx-auto px-6 py-20">
          {serviceCategories.map((category, index) => (
            <CategorySection key={index} {...category} />
          ))}

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description: "Understanding your needs",
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Creating the roadmap",
                },
                {
                  step: "3",
                  title: "Execution",
                  description: "Building your solution",
                },
                {
                  step: "4",
                  title: "Support",
                  description: "Ongoing maintenance",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-600 dark:bg-slate-500 text-white flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <ContactCTA />
        </div>
      </Bracket>
    </main>
  );
}
