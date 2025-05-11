// import { ApplicantDetails } from "@/types/applicant";
import { Task } from "@/types/task";

export const tasks: Task[] = [
  {
    status: "in_progress",
    header: "Enter share thus government.",
    id: "item-1",
    assignees: [{ email: "jacquelinemiller@hotmail.com", photo: "https://dummyimage.com/307x310" }],
    startDate: "2024-04-12",
    endDate: "2024-05-10",
    tags: [
      { label: "really", color: "#FF5733" },
      { label: "nor", color: "#A133FF" },
    ],
  },
  {
    status: "in_progress",
    header: "Each which candidate democratic history.",
    id: "item-2",
    assignees: [
      { email: "pfischer@yahoo.com", photo: "https://www.lorempixel.com/667/167" },
      { email: "amberbolton@becker.com", photo: "https://placeimg.com/638/863/any" },
      { email: "joneskathryn@hotmail.com", photo: "https://dummyimage.com/985x980" },
    ],
    startDate: "2024-04-18",
    endDate: "2024-04-23",
    tags: [
      { label: "institution", color: "#33FF57" },
      { label: "top", color: "#A133FF" },
      { label: "general", color: "#FF5733" },
    ],
  },
  {
    status: "in_progress",
    header: "Air learn choice need each ok.",
    id: "item-3",
    assignees: [
      { email: "emma84@yates-hall.com", photo: "https://www.lorempixel.com/423/76" },
      { email: "amandagonzalez@gmail.com", photo: "https://placeimg.com/220/496/any" },
      { email: "dbass@gmail.com", photo: "https://placekitten.com/523/612" },
    ],
    startDate: "2024-04-20",
    endDate: "2024-03-01",
    tags: [
      { label: "available", color: "#33FF57" },
      { label: "must", color: "#FF33A1" },
      { label: "own", color: "#A133FF" },
    ],
  },
  {
    status: "in_progress",
    header: "Billion can building wonder skill think just.",
    id: "item-4",
    assignees: [
      { email: "shirleybrowning@simpson.com", photo: "https://placeimg.com/944/298/any" },
      { email: "whatfield@hotmail.com", photo: "https://www.lorempixel.com/445/632" },
    ],
    startDate: "2024-07-01",
    endDate: "2024-07-07",
    tags: [{ label: "speak", color: "#FF9633" }],
  },
];

export const applicant = {
  id: "1",
  position: 245,
  name: "Константинов Никита Игоревич",
  snils: "54669 0201",
  totalExamScore: 286,
  totalAchievments: 5,
  totalScore: 291,
  hasDocuments: false,
  scores: [
    {
      header: "Математика",
      description: 95,
    },
    {
      header: "Русский язык",
      description: 90,
    },
    {
      header: "Физика",
      description: 88,
    },
    {
      header: "Информатика",
      description: 100,
    },
  ],
  comments: [
    {
      employee: {
        email: "a.zykova1@g.nsu.ru",
      },
      message: "Это тестовое сообщение!",
      date: "08.07.2024",
    },
    {
      employee: {
        email: "k.bagryantsev@g.nsu.ru",
      },
      message: "Я Клим Багрянцев! Ура!",
      date: "18.10.2024",
    },
  ],
};
