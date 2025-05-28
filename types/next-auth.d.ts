import { User as PrismaUser } from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: PrismaUser["id"]
      email: PrismaUser["email"]
    } & DefaultSession["user"]
  }

  interface User extends PrismaUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: PrismaUser["id"]
    email: PrismaUser["email"]
  }
}
