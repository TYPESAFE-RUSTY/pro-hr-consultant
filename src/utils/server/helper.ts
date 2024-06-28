import { db } from "./prismaClient";

export async function getUserByEmail(email: string) {
    try {
        let user = await db.user.findUnique({
            where: {
                email
            }
        })

        return user

    } catch (error) {
        return undefined
    }
}


export async function getUserById(id: string) {
    try {
        let user = await db.user.findUnique({
            where: {
                id
            }
        })

        return user

    } catch (error) {
        return undefined
    }
}