import  GoogleProvider  from "next-auth/providers/google";
import NextAuth from "next-auth";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  })
]
}
export default NextAuth(authOptions);