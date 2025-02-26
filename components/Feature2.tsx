import { Card } from "@thirdbracket/bracketui";
import Image from "next/image";

const Feature2 = () => {
  const features = [
    {
      title: "Expertise & Flexibility",
      description:
        "Experience agency expertise with freelancer flexibility. Access a unified team of top-rated professionals, not just scattered freelancers.",
      icon: "🚀",
    },
    {
      title: "Scalable Solutions",
      description: "Enterprise-grade architecture that grows with your needs",
      icon: "📈",
    },
    {
      title: "Rapid Development",
      description: "Quick turnaround with quality code and best practices",
      icon: "⚡",
    },
    {
      title: "Cloud Native",
      description: "Leveraging AWS and modern cloud infrastructure",
      icon: "☁️",
    },
    {
      title: "Security First",
      description: "Built-in security features and compliance standards",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto space-y-8 md:space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl  font-bold  text-gray-950 dark:text-gray-200 mb-4">
            Why Choose Third Bracket?
          </h2>
          <p className="text-base md:text-xl text-gray-800/70 dark:text-gray-200/40 ">
            We deliver cutting-edge solutions with a focus on performance,
            scalability, and user experience
          </p>
        </div>

        {/* Image Section */}
        <div className=" relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/main.svg" // Replace with your image path
            alt="Third Bracket Features"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature2;
