export type taskObject = {
    "id": string,
    "snippet": string,
    "message": string,
    "importanceClass":  "important" | "trivial",
}

export type taskParameters = [string, string, string, "important" | "trivial"]