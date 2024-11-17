
import { Applicant } from "@/types/applicant";
import { ResponseTable, Table, TableSchema } from "@/types/table";

const defaultApplicant: Applicant<any> = {
  id: "0",
  position: 245,
  name: "Третьяков Артём Александрович",
  snils: "54669",
  totalExamScore: 268,
  totalAchievments: 10,
  totalScore: 278,
  hasDocuments: true,
};

const secondApplicant: Applicant<any> = {
  id: "1",
  position: 100,
  name: "BBBB AAAA BBBB",
  snils: "5234234234",
  totalExamScore: 10000,
  totalAchievments: 222,
  totalScore: 333,
  hasDocuments: true,
};

const table: Table = {
  name: "Таблица платников",
  rows: Array.from({ length: 5 }, (_, id) => [
    {
      applicant: { ...defaultApplicant, id: String(id * 2 + 1) },
      comments: [
        {
          employee: {
            email: "a.zykova4@g.nsu.ru",
          },
          date: "2024-05-06",
          message: "Всем привет я крутая!",
        },
        {
          employee: {
            email: "surkova_nastya@gmail.com",
          },
          date: "2024-05-06",
          message: "Оригинал отозвал, можно удалять",
        },
      ],
    },
    { applicant: { ...secondApplicant, id: String(id * 2 + 2) } },
  ]).flat(),
};

const schema: TableSchema = [
  {
    header: "ID",
    accessorKey: "id",
    columnType : "string",
  },
  {
    header: "ФИО",
    accessorKey: "name",
    columnType : "string",
  },
  {
    header: "Номер в списке",
    accessorKey: "position",
    columnType : "number"
  },
  {
    header: "СНИЛС",
    accessorKey: "snils",
    columnType : "string"
  },
  {
    header: "Баллы за ЕГЭ",
    accessorKey: "totalExamScore",
    columnType : "number"
  },
  {
    header: "Баллы за ИД",
    accessorKey: "totalAchievments",
    columnType : "number"
  },
  {
    header: "",
    accessorKey: "hiddenColumns",
    columnType : "string"
  },
];

const responseTable: ResponseTable = {
  schema: schema,
  table: table,
};

export { responseTable };
