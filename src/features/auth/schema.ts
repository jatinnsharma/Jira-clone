import { z } from "zod";

export const loginSchema =z.object({
    email:z.string().email(),
    password:z.string().min(1,"Required"),
})

export const registerSchema =z.object({
    name:z.string().trim().min(2,"Required"),
    email:z.string().email(),
    password:z.string().min(8,"Minimun of 8 characters required"),
})