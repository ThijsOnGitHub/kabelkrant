import { z } from "zod"

export const schema = z.object({
    programName: z.string(),
    path: z.string(),
    planning: z.array(z.object({
        days: z.array(z.number()),
        times: z.array(z.string()) 
    })).default([{
        days: [],
        times: ["00:00:00"]
    }]),
})

export type ProgrammaFormSchema = z.infer<typeof schema>