import { useEffect, useState } from "react";
import { loadEntries } from "../services/storage";
import type { Entry } from "../types/budget";

export function useEntries() : void{
    const [entries, addEntry] = useState(loadEntries())

    useEffect(() => {
    })
}