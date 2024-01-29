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
    }
}