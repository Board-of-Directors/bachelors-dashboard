import { ApplicantDetails } from "@/api/request/applicant";
import { Comment } from "@/api/request/comment/types";
import { ApplicantEntity } from "@/types/applicant";

export const createHeader = (applicant: ApplicantDetails) => {
  const { value: firstName } = applicant.properties.find(({ name }) => name === "Имя") || {};
  const { value: secondName } = applicant.properties.find(({ name }) => name === "Фамилия") || {};
  const { value: lastName } = applicant.properties.find(({ name }) => name === "Отчество") || {};

  return `${secondName} ${firstName} ${lastName}`;
};

export const createApplicant = (
  applicant: ApplicantDetails,
  comments: Comment[],
): ApplicantEntity => {
  const appicantRecord = applicant.properties.reduce((acc, { name, value }) => {
    acc[name] = value;

    return acc;
  }, {} as ApplicantEntity);

  appicantRecord.comments = comments;
  appicantRecord.header = createHeader(applicant);

  return appicantRecord as ApplicantEntity<typeof appicantRecord>;
};
