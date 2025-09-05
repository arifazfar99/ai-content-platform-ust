import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text'},
                password: { label: 'Password', type: 'password'}
            },

            async authorize(credentials) {
                if (
                    credentials?.email === "test@example.com" &&
                    credentials?.password === "test123"
                ) {
                    return { id: '1', name: 'Test User', email: 'test@example.com'}
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/'
    },
    session: {
        strategy: 'jwt'
    }
})

export { handler as GET, handler as POST }