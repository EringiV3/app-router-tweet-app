import { db } from '@/libs/db'

export class UserRepository {
  public async getUserByClerkId(clerkId: string) {
    const user = await db.user.findUnique({
      where: {
        id: clerkId,
      },
    })

    return user
  }

  public async createUser(seed: { clerkUserId: string }) {
    const user = await db.user.create({
      data: {
        id: seed.clerkUserId,
      },
    })
    return user
  }
}
