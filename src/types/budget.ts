//EntryType union for income and expense
export type EntryType = "expense" | "income";

export type Entry = {
    id: string;
    type: EntryType;
    amount: number;
    category: string;
    date: string;
    note?: string;
};

export type Category = {
    id: string;
    type: EntryType;
    name: string;
};

//einmal die Kategorien als Daten definieren und dann den Typ ableiten
//single source of truth (Sicher und mehr Wartbar) die Kategorien nur hier ändern
export const ENTRY_CATEGORIES = [
    "Housing",
    "Utility",
    "Food",
    "Transportation",
    "Healthcare",
    "Insurance",
    "Debt Payments",
    "Personal Care",
    "Entertainment",
    "Clothing",
    "Other",
] as const;

export type EntryCategoryType = (typeof ENTRY_CATEGORIES)[number];
