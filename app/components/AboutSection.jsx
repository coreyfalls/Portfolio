// Importing necessary dependencies
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Data for each tab
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Cloud Security</li>
        <li>Active Directory</li>
        <li>Azure</li>
        <li>SIEM</li>
        <li>Incident Response</li>
        <li>Risk Management</li>
        <li>Compliance</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Western Governors University 2023-Present</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Azure AI-900</li>
        <li>Google IT Support</li>
      </ul>
    ),
  },
];

// AboutSection component
const AboutSection = () => {
  // State for selected tab and transition
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // Function to handle tab changes
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // JSX for the AboutSection component
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image component */}
        <Image src="/image/peace-cloud.png" width={500} height={500} />

        {/* About Me content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As an individual with a knack for creativity, leadership, organization, problem-solving, and teamwork, I bring a unique blend of skills to the table. I am excited about the ongoing journey from developer to cybersecurity enthusiast, with a clear goal of becoming a Cloud Security Engineer. Let's connect and explore how my skills and experiences can contribute to the success of your team!
          </p>

          {/* Tab buttons for Skills, Education, and Certifications */}
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          {/* Content based on selected tab */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the AboutSection component
export default AboutSection;
