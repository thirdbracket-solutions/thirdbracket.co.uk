import { Bracket } from "@thirdbracket/bracketui";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";

function CaseStudyCard({
  title,
  client,
  description,
  result,
  image,
}: {
  title: string;
  client: string;
  description: string;
  result: string;
  image: string;
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        width={800}
        height={500}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {client}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <p className="font-medium">Result: {result}</p>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Digital Transformation",
      client: "Tech Corp",
      description: "Implementing digital solutions...",
      result: "50% increase in efficiency",
      image: "/ui.svg",
    },
    // Add more case studies
  ];

  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <PageHeader
          title="Case Studies"
          description="Real results for real businesses"
        />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </Bracket>
    </main>
  );
}
