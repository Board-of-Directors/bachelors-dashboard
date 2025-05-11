import { Comment as ResponseComment } from "@/api/request/comment/types";
import { Comment } from "./comment";

export interface ApplicantDeaults {
  id: string;
  position: number;
  name: string;
  snils: string;
  totalExamScore: number;
  totalAchievments: number;
  totalScore: number;
  hasDocuments: boolean;
}

export type Applicant<T> = ApplicantDeaults & { [K in keyof T]: T[K] };

export interface HeaderDescription {
  header: string;
  description: number;
}

export interface ApplicantDetails extends ApplicantDeaults {
  scores: HeaderDescription[];
  comments: Comment[];
}

export type ApplicantEntity<T = unknown> = T & {
  comments: ResponseComment[];
  header: string;
};
