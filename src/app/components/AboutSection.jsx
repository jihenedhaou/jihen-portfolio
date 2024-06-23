"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Gestion des bugs :
          <ul className="list-none pl-4">
            <li>JIRA</li>
          </ul>
        </li>
        <li>Méthodologie :
          <ul className="list-none pl-4">
            <li>Agile</li>
          </ul>
        </li>
        <li>Automatisation des tests :
          <ul className="list-none pl-4">
            <li>Postman, Selenium</li>
          </ul></li>
        <li>Documentation: Confluence
          <ul className="list-none pl-4">
            <li>Confluence</li>
          </ul>
        </li>
        <li>Gestionnaire de cas de test :
          <ul className="list-none pl-4">
            <li>XRAY,
              TestLink</li>
          </ul></li>
        <li>Outil d’intégration continue:
          <ul className="list-none pl-4">
            <li>Jenkins, Github</li>
          </ul></li>
        <li>Langages de programmation :
          <ul className="list-none pl-4">
            <li>JAVA, Javascript</li>
          </ul></li>
        <li>Base de données :
          <ul className="list-none pl-4">
            <li>MySQL, Mongo
              DB</li>
          </ul></li>
        <li>Suite bureautique:
          <ul className="list-none pl-4">
            <li>Microsoft Office
              (Word, Power Point, Excel...)</li>
          </ul></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Baccalauréat
        <ul className="list-none pl-4">
          <li>Lycée El Attarine Ariana, Tunis</li>
        </ul>
        </li>
        <li>
          Licence en informatique de gestion
        <ul className="list-none pl-4">
          <li>Institut Supérieur de Gestion Tunis</li>
        </ul>
        </li>
      </ul>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>A4Q Certified Selenium Tester FL
          <ul className="list-none pl-4">
            <li>Septembre 2022 GASQ Tunis</li>
          </ul>
        </li>
        <li>ISTQB - Certified Tester Foundation Level Syllabus 2018 Version
          <ul className="list-none pl-4">
            <li>Janvier 2022 GASQ Tunis</li>
          </ul>
        </li>

        <li>Espagnole - Etudes Langues & Formation (EL&F)
          <ul className="list-none pl-4">
            <li>Janvier 2014 EL&F Tunis</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a motivated, productive, and proactive individual who always strives to improve and engage in dynamic and diverse activities, even when faced with challenges. As a solution-oriented person, I aim to solve problems, which has significantly contributed to my success in previous roles. Currently, I am seeking to increase my productivity and expand my knowledge in software testing as a Junior Software Tester in a fast-growing environment.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
