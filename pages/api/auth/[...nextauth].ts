import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from "next"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        adapter: PrismaAdapter(prisma),
        providers: [
            GithubProvider({
                clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
                clientSecret: process.env.GITHUB_SECRET!
            })
        ],
        // secret: process.env.SECRET,
        session: {
            strategy: 'database'
        },
        theme: {
            colorScheme: 'dark',          
        },
        debug: true
    });

}