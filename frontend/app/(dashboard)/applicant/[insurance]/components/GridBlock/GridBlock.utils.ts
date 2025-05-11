import { ApplicantEntity, HeaderDescription } from "@/types/applicant";

const ITEMS_PER_ROW = 4;

export const createGridRows = <T>(applicant: ApplicantEntity<T>): HeaderDescription[][] => {
  const excludeKeys = ["name", "comments", "scores", "id", "header"];
  const keys = Object.keys(applicant).filter((key) => !excludeKeys.includes(key));

  const cards = keys.reduce((acc, current) => {
    const card = { header: current, description: applicant[current] };

    return [...acc, card];
  }, []);

  return cards.reduce((acc, _, index) => {
    if (index % ITEMS_PER_ROW === 0) {
      return [...acc, cards.slice(index, (index + 1) * ITEMS_PER_ROW)];
    }

    return acc;
  }, []);
};
