//EntryType union for income and expense
export type EntryType = "expense" | "income";

export type Entry = {
    id: string,
    type: EntryType,
    amount: number,
    category: string,
    date: string,
    note?: string
}

export type Category = {
    id: string,
    type: EntryType,
    name: string
}