import { ApplicantDetails, HeaderDescription } from "@/types/applicant";
import { KeyOf } from "@/types/utils";

const ITEMS_PER_ROW = 4;

type CardKeys = Omit<ApplicantDetails, 'name' | 'comments' | 'scores' | 'id'>;

const fieldHeaderMap: Record<KeyOf<CardKeys>, string> = {
    totalAchievments: 'Сумма баллов ИД',
    totalExamScore: 'Сумма баллов ЕГЭ',
    totalScore: "Общая сумма баллов",
    hasDocuments: 'Оригинал из ЕГПУ',
    position: 'Номер в списке',
    snils: "СНИЛС",
}

export const createGridRows = (applicant: ApplicantDetails): HeaderDescription[][] => {
    const excludeKeys: KeyOf<ApplicantDetails>[] = ['name', 'comments', 'scores', 'id'];
    const keys = Object.keys(applicant).filter(key => !excludeKeys.includes(key as KeyOf<ApplicantDetails>));

    const cards = keys.reduce((acc, current) => {
        const card = { header: fieldHeaderMap[current], description: applicant[current] }

        return [...acc, card];
    }, []);

    return cards.reduce((acc, _, index) => {
        if (index % ITEMS_PER_ROW === 0) {
            return [...acc, cards.slice(index, (index + 1) * ITEMS_PER_ROW)]
        }

        return acc;
    }, [])
}