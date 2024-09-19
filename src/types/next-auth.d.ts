import NextAuth, { DefaultSession } from 'next-auth/next'

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       accessToken: string;
//       name: string;
//       uuid: string;
//       email: string;
//     } & DefaultSession['user'];
//   }
// }
declare module 'next-auth' {
  interface User {
    accessToken: string
    refreshToken: string
  }

  interface Session {
    user: {
      accessToken: string
      refreshToken: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    refreshToken: string
  }
}
