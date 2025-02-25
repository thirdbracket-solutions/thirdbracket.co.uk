import { Card } from "@thirdbracket/bracketui";
import Image from "next/image";

const Feature2 = () => {
  const features = [
    {
      title: "Modern Stack",
      description:
        "Built with Next.js, TypeScript, and modern web technologies",
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
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Third Bracket?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deliver cutting-edge solutions with a focus on performance,
            scalability, and user experience
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16 relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/card1.svg" // Replace with your image path
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
