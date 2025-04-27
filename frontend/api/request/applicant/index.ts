import { api } from "@/api";

export interface ApplicantProperty {
  value: string;
  name: string;
}

/** Данные абитуриента. */
export interface ApplicantDetails {
  properties: ApplicantProperty[];
  insurance: string;
  id: string;
}

/**
 * Возвращает полные данные об абитуриенте по его СНИЛСу.
 *
 * @param insurance - CНИЛС абитуриента
 */
export const getApplicantDetails = (insurance: string): Promise<ApplicantDetails> =>
  api.get("/student/by-insurance", { params: { insurance } });
