import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id as string;
      return session;
    },
  },
});

// ✅ 오직 이 두 개만 export
export { handler as GET, handler as POST };