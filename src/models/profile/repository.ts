import { db } from '@/libs/db'

export class ProfileRepository {
  public async getProfileByUserId(userId: string) {
    const profile = await db.profile.findUnique({
      where: {
        userId,
      },
    })
    return profile
  }

  public async createProfile(seed: { userId: string; bio?: string }) {
    const profile = await db.profile.create({
      data: {
        bio: seed.bio,
        userId: seed.userId,
      },
    })
    return profile
  }
}
