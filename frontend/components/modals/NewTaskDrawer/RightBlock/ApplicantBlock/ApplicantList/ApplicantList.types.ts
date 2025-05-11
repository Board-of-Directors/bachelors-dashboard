
interface ApplicantEntity {
    name: string;
    snils: string;
}

interface ApplicantListProps {
    onDeleteApplicant: (index: number) => void;
    applicants: ApplicantEntity[];
}

export type { ApplicantEntity, ApplicantListProps };
