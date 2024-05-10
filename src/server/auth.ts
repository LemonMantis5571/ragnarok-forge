import { PrismaAdapter } from "@next-auth/prisma-adapter";
import axios from "axios";
import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// import type { DiscordProfile } from "next-auth/providers/discord";

import { env } from "~/env";
import type { DiscordTokenResponse } from "~/lib/Itemstypes";
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
      // profile: (profile: DiscordProfile) => {
      //   console.log(profile);
      //   return {
      //     ...profile,
      //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      //     role: profile.role ?? "user",
      //   }
      // },
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role;
      }


      return session;
    },
    async jwt({ token, user, profile, account }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
        token.email = user.email;
        token.picture = user.image;
      }

      if (account?.expires_at && account?.refresh_token) {
        token.accessToken = account.accessToken;
        token.refresh_token = account.refresh_token;
        token.expires_at = account?.expires_at;
      }

      if (Date.now() > token.expires_at * 1000) {
        try {
          const response = await axios.post<DiscordTokenResponse>(
            'https://discord.com/api/oauth2/token',
            new URLSearchParams({
              grant_type: 'refresh_token',
              refresh_token: token.refresh_token ?? "",
              client_id: env.DISCORD_CLIENT_ID,
              client_secret: env.DISCORD_CLIENT_SECRET,
            }).toString(),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );


          return {
            ...token,
            accessToken: response.data.access_token,
            expires_at: Date.now() + response.data.expires_in * 1000,
            refreshToken: response.data.refresh_token ?? token.refresh_token,
          }

        } catch (error) {
          console.error("Failed to refresh token", error);
          return { ...token, error: "RefreshAccessTokenError" as const };
        }
      }

      // Update Avatar everytime it changes, I really don't know why nextauth doesn't handle it automatically

      const checkUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (checkUser && profile) {
        const imageUrl = (profile as unknown as { image_url: string }).image_url;

        await db.user.update({
          where: {
            id: checkUser.id,
          },
          data: {
            image: imageUrl
          }
        })
      }

      return token;

    },
  },
  session: {
    strategy: "jwt",
    // 10 days
    maxAge: 10 * 24 * 60 * 60,
  }
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
