"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { loginSchema, registerSchema } from "@/utils/validatorSchema";
import { db } from "@/utils/server/prismaClient";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";


export const register = async (data: z.infer<typeof registerSchema>) => {
    const validatedData = registerSchema.safeParse(data);
    if (!validatedData.success) {
        return { error: "invalid fields" }
    }
    const hashedPassword = await bcrypt.hash(validatedData.data.password, 10);

    let existingUser = await db.user.findUnique({
        where: { email: validatedData.data.email }
    })

    if (existingUser) {
        return { error: "user already exists" }
    }

    await db.user.create({
        data: {
            name: validatedData.data.name,
            email: validatedData.data.email,
            password: hashedPassword
        }
    })


    return { sucess: "user created sucessfully" }
}




export const login = async (values: z.infer<typeof loginSchema>) => {
    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;
    try {
        await signIn("credentials", {
            email, password, redirectTo: "/temp"
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "invalid credentials!" }
                default:
                    return { error: "Something went wrong!" }
            }
        }
        throw error;
    }
}



export const loginWithGoogle = async () => {
    await signIn("google")
}