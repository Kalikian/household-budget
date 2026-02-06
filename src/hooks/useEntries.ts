import { useEffect, useState } from "react";
import { loadEntries } from "../services/storage";

export function useEntries(): void {
    const [entries, addEntry] = useState(loadEntries())

    useEffect(() => {
    })
}