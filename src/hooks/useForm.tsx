"use client";
import * as z from "zod"
import { useState } from "react";
import { auth } from "@/auth";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

export default function useForm(schema: z.ZodObject<any>, init: any, action?: (a: any, b: Session) => Promise<{ error?: string, success?: string }>) {
    const [data, setData] = useState<z.infer<typeof schema>>(init)
    const [error, setError] = useState<string[]>([]);
    const [success, setSuccess] = useState<string>("");

    function changeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, type, value } = e.target;
        setData((prev: any) => ({ ...prev, [name]: type === "number" ? parseInt(value) : value }))
    }

    async function submitFn(e: React.FormEvent<SubmitEvent> | React.FormEvent<HTMLButtonElement>) {
        const session = await getSession()
        let value = schema.safeParse(data)
        if (!value.success) return setError(value.error.errors.map(elem => elem.message));
        setError([]);

        // safe to pass value to any other server action
        if (!session) return setError(["you are not logged in, please log in and try again."])
        if (!action) return setError(["something went wrong"]);

        const res = await action(data, session)
        if (typeof res.error !== "undefined") return setError([res.error])
        if (!res.success) return setError(["something went wrong"]);

        return setSuccess(res.success)
    }
    return { data, changeHandler, error, success, submitFn }
}