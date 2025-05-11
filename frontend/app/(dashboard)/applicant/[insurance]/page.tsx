"use client";

import { ApplicantDetails, getApplicantDetails } from "@/api/request/applicant";
import { getCommentByInsurance } from "@/api/request/comment";
import { Comment } from "@/api/request/comment/types";
import { ApplicantPageContextProvider } from "@/contexts";
import { ApplicantEntity } from "@/types/applicant";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { InformationBlock, TaskList } from "./components";
import { tasks } from "./page.data";
import { Container } from "./page.styles";
import { createApplicant } from "./page.utils";

const ApplicantPage = ({ params: { insurance } }: { params: { insurance: string } }) => {
  const { data: responseApplicant } = useQuery<ApplicantDetails>({
    queryKey: ["get", "applicant", insurance],
    queryFn: () => getApplicantDetails(insurance),
  });

  const { data: comments } = useQuery<Comment[]>({
    queryFn: () => getCommentByInsurance(insurance),
    queryKey: ["get", "comments", insurance],
  });

  const applicant = useMemo<ApplicantEntity>(() => {
    if (responseApplicant && typeof comments !== "undefined") {
      return createApplicant(responseApplicant, comments);
    }
  }, [responseApplicant, comments]);

  return applicant ? (
    <ApplicantPageContextProvider insurance={insurance}>
      <Container>
        <InformationBlock applicant={applicant} />
        <TaskList tasks={tasks} />
      </Container>
    </ApplicantPageContextProvider>
  ) : null;
};

export default ApplicantPage;
