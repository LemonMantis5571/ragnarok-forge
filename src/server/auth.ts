import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import type { DiscordProfile } from "next-auth/providers/discord";

import { env } from "~/env";
import { db } from "~/server/db";

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    DiscordProvider({
      profile: (profile: DiscordProfile) => {
        return {
          ...profile,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          role: profile.role ?? "user",
        }
      },
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;

    },
  },
  session: {
    strategy: "jwt",
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
