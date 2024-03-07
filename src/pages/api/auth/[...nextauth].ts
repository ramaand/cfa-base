import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || '1k2mk12msafn3j',
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
          remember: boolean;
        };

        const user = { id: '1', name: 'John', email, password };
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, user, profile }) {
      if (account?.provider === 'credentials') {
        token.email = user.email;
      }

      console.log('JWT', { token, account, user, profile });
      return token;
    },
    async session({ session, token }: any) {
      if ('email' in token) {
        session.user.email = token.email;
      }

      console.log('Session', { session, token });
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect', { url, baseUrl });
      return baseUrl;
    },
  },
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
