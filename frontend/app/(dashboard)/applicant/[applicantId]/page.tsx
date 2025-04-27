"use client";

import { ApplicantDetails, getApplicantDetails } from "@/api/request/applicant";
import { useQuery } from "@tanstack/react-query";
import { InformationBlock, TaskList } from "./components";
import { tasks } from "./page.data";
import { Container } from "./page.styles";

const ApplicantPage = ({ params: { applicantId } }: { params: { applicantId: string } }) => {
  const { data: applicant } = useQuery<ApplicantDetails>({
    queryKey: ["get", "applicant", applicantId],
    queryFn: () => getApplicantDetails(applicantId),
  });

  return applicant ? (
    <Container>
      <InformationBlock applicant={applicant} />
      <TaskList tasks={tasks} />
    </Container>
  ) : null;
};

export default ApplicantPage;
