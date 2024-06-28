import NextAuth, { type DefaultSession } from "next-auth"
import { user_type } from "@prisma/client"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/utils/server/prismaClient"
import { getUserById } from "./utils/server/helper"
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
    interface JWT {
        type: user_type
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            type: user_type
        } & DefaultSession["user"]
    }
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    events: {
        async linkAccount({ user }) {
            if (!user.id) return;
            await db.user.update({
                where: {
                    id: user.id
                },
                data: {
                    emailVerified: new Date()
                }
            })
        }
    },
    callbacks: {
        async jwt({ token }) {
            if (!token.sub) return token;
            const user = await getUserById(token.sub);
            if (!user) return token;            // token does not belong to any user 
            token.type = user?.type;
            return token
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.type && session.user) {
                session.user.type = token.type;
            }
            return session
        }
    },
    session: { strategy: "jwt" },
    pages: {
        signIn: "/auth/signin",
    },
    ...authConfig,
})
