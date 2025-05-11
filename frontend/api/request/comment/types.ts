export interface CreateCommentRequest {
  studentInsurance: string;
  content: string;
  email: string;
}

export interface Comment {
  authorEmail: string;
  content: string;
  id: number;
}
