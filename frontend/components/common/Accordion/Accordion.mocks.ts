import { FolderProps } from "./AccordionItem/AccordionItem.types";


export const mockFolders: any[] = [
    {
        name: "Бакалавры",
        files: [
            {
                name: "Файл_бакалавров_1",
                href: "/",
            },
            {
                name: "Крутая таблица",
                tableId: 1,
            },
            {
                name: "Файл_бакалавров_2",
                href: "/",
            },
        ],
    },
    {
        name: "Магистранты",
        files: [
            {
                name: "Файл_магистрантов_1",
                href: "/",
            },
        ],
    },
    {
        name: "Аспирантура",
        files: [
            {
                name: "Аспирантура 2024-2025",
                tableId: 2,
            },
            {
                name: "Аспирантура 2025-2026",
                tableId: 3,
            },
        ],
    },
];
