import type { Entry } from "../types/budget";

const STORAGE_KEY = "household-budget.entries";

export function loadEntries(): Entry[] {
    const rawEntries = localStorage.getItem(STORAGE_KEY);
    if (!rawEntries) return [];

    try {
        const parsedEntries: unknown = JSON.parse(rawEntries);

        if (!Array.isArray(parsedEntries)) return [];
        return parsedEntries as Entry[];
    } catch {
        return [];
    }
}

export function saveEntries(entries: Entry[]): void {
    try {
        const rawEntries = JSON.stringify(entries);
        localStorage.setItem(STORAGE_KEY, rawEntries)
    } catch {
        // ignore storage errors
    }
}