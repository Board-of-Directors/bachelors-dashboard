interface ApplicantDeaults {
  id: string;
  position : number;
  name: string;
  snils: string;
  totalExamScore: number;
  totalAchievments: number;
  totalScore: number;
  hasDocuments: boolean;
}

type Applicant<T> = ApplicantDeaults & { [K in keyof T]: T[K] };

export type { ApplicantDeaults, Applicant };
