import { Comment } from "./comment";

interface ApplicantDeaults {
  id: string;
  position: number;
  name: string;
  snils: string;
  totalExamScore: number;
  totalAchievments: number;
  totalScore: number;
  hasDocuments: boolean;
}

type Applicant<T> = ApplicantDeaults & { [K in keyof T]: T[K] };

interface HeaderDescription {
  header: string;
  description: number;
}

interface ApplicantDetails extends ApplicantDeaults {
  scores: HeaderDescription[];
  comments: Comment[];
}

export type { Applicant, ApplicantDeaults, ApplicantDetails, HeaderDescription };

