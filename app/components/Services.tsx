"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

interface EducationItem {
  organization: string;
  details: string[];
}

interface WorkItem {
  period: string;
  company: string;
  title?: string;
}

const cvData: Array<{
  category: string;
  items: Array<EducationItem | WorkItem>;
}> = [
  {
    category: "Education",
    items: [
      {
        organization: "FPT Polytechnic",
        details: [
          "09/2013 - 01/2016: Graphic Design",
          "09/2011 - 09/2013: Website Design",
        ],
      },
      {
        organization: "Brian Tracy International",
        details: ["06/2016: Total Business Mastery Mini MBA"],
      },
      {
        organization: "FPT Arena",
        details: ["10/2013: Design Thinking Workshop"],
      },
    ],
  },
  {
    category: "Work Experience",
    items: [
      {
        period: "08/2022 - 10/2023",
        company: "Công ty TNHH Công Nghệ Hưng Thái",
        title: "Senior Graphic Designer",
      },
      {
        period: "05/2022 - 01/2022",
        company: "Công ty TNHH HS Ad Việt Nam",
        title: "Senior Graphic Designer",
      },
      {
        period: "03/2020 - 05/2021",
        company: "Công ty Cổ phần Tập đoàn Yeah1",
        title: "Senior Graphic Designer",
      },
      {
        period: "07/2019 - 12/2019",
        company: "Khách sạn Dolce by Wyndham Hanoi Golden Lake",
        title: "Graphic Designer",
      },
      {
        period: "11/2017 - 05/2019",
        company: "FPT Online - Báo VnExpress",
        title: "Graphic Designer",
      },
      {
        period: "02/2015 - 11/2017",
        company: "Công ty TNHH DVH-Bransons",
        title: "Graphic Designer",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <SectionLabel
          index="02"
          title="Background"
          subtitle="Education, achievements, and professional experience."
        />

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {cvData.slice(0, 2).map((section, sectionIndex) => (
            <div key={section.category}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: sectionIndex * 0.1,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="font-display font-medium tracking-[-0.03em] text-[clamp(24px,3vw,42px)] leading-[1] mb-4 md:mb-5"
              >
                {section.category}
              </motion.h3>

              <div className={`border-t border-ink/15 grid grid-cols-1 ${section.category === 'Education' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-0`}>
                {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.6,
                        delay: sectionIndex * 0.1 + itemIndex * 0.05,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                      className="group relative border-b border-ink/15 py-3 md:py-4"
                    >
                      <div>
                        {'organization' in item && (
                          <div>
                            <h4 className="font-display font-medium text-[20px] md:text-[24px] leading-[1.3] mb-2">
                              {(item as EducationItem).organization}
                            </h4>
                            <div className="space-y-1">
                              {(item as EducationItem).details?.map((detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-[14px] md:text-[15px] text-ink-2 leading-[1.5]"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                        {'company' in item && (
                          <div>
                            <p className="text-[11px] md:text-[12px] font-mono uppercase tracking-[0.14em] text-muted mb-1">
                              {(item as WorkItem).period}
                            </p>
                            <h4 className="font-display font-medium text-[20px] md:text-[24px] leading-[1.3] mb-2">
                              {(item as WorkItem).company}
                            </h4>
                            {(item as WorkItem).title && (
                              <p className="text-[14px] md:text-[15px] text-ink-2 leading-[1.5]">
                                {(item as WorkItem).title}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 border-t border-ink/20 pt-8 md:pt-10">
          {cvData.slice(2).map((section, sectionIndex) => (
            <div key={section.category}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: sectionIndex * 0.1,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="font-display font-medium tracking-[-0.03em] text-[clamp(24px,3vw,42px)] leading-[1] mb-4 md:mb-5"
              >
                {section.category}
              </motion.h3>

              <div className="border-t border-ink/15">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className="relative border-b border-ink/15 py-3 md:py-4"
                  >
                    <div>
                      {'organization' in item && (
                        <div>
                          <h4 className="font-display font-medium text-[20px] md:text-[24px] leading-[1.3] mb-2">
                            {(item as EducationItem).organization}
                          </h4>
                          <div className="space-y-1">
                            {(item as EducationItem).details?.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-[14px] md:text-[15px] text-ink-2 leading-[1.5]"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      {'company' in item && (
                        <div>
                          <p className="text-[11px] md:text-[12px] font-mono uppercase tracking-[0.14em] text-muted mb-1">
                            {(item as WorkItem).period}
                          </p>
                          <h4 className="font-display font-medium text-[20px] md:text-[24px] leading-[1.3] mb-2">
                            {(item as WorkItem).company}
                          </h4>
                          {(item as WorkItem & { title?: string }).title && (
                            <p className="text-[14px] md:text-[15px] text-ink-2 leading-[1.5]">
                              {(item as WorkItem & { title?: string }).title}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
