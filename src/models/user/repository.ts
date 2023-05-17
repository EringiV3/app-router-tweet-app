import { db } from '@/libs/db'

export class UserRepository {
  public async getUserByClerkUserId(clerkUserId: string) {
    const user = await db.user.findUnique({
      where: {
        clerkUserId,
      },
    })

    return user
  }

  public async createUser(seed: { clerkUserId: string }) {
    const user = await db.user.create({
      data: {
        clerkUserId: seed.clerkUserId,
      },
    })
    return user
  }
}
