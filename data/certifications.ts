export type CertificationType = "Certification" | "Hackathon" | "Workshop";

export interface CertificationItem {
  title: string;
  organization?: string;
  type: CertificationType;
  description?: string;
  skillsGained?: string[];
}

export const certifications: CertificationItem[] = [
  {
    title: "Completed 3-Month Training in Generative AI",
    organization: "Janakpur Tech Bootcamp",
    type: "Certification",
  },
  {
    title: "Participated in Janakpur Hackathon 2.0",
    type: "Hackathon",
    description:
      "Collaborated with a team to develop innovative solutions and improve:",
    skillsGained: ["Problem-solving", "Teamwork", "Technical skills"],
  },
  {
    title: "Completed Introduction to Amazon EC2",
    organization: "AWS Certification and Training",
    type: "Certification",
  },
  {
    title: "Online Workshop on “Research Article Writing”",
    organization: "Research Center, Rajarshi Janak University",
    type: "Workshop",
  },
];
