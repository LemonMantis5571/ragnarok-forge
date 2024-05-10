import type { DefaultUser, DefaultSession } from 'next-auth'


declare module 'next-auth' {
    interface Session {
        user: User & {
            id: string,
            role: string,
            acessToken: string
        } & DefaultSession['user']
    }

    interface User extends DefaultUser {
        role: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string,
        role: string,
        access_token: string
        expires_at: number
        refresh_token: string
        error?: "RefreshAccessTokenError"
    }
}