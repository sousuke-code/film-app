import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth,{ DefaultSession} from "next-auth";
import { db } from "../db/db";
import Google from "next-auth/providers/google";
import { accounts, users, sessions } from "./schema/user";



export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
    }),
    callbacks: {
        session({ session, user}) {
            session.user.id = user.id;
            return session;
        },
    },
    providers : [Google],
})
