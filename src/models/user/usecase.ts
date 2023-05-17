import { ProfileRepository } from '../profile/repository'
import { UserRepository } from './repository'

export class UserUsecase {
  private userRepository: UserRepository
  private profileRepository: ProfileRepository

  constructor() {
    this.userRepository = new UserRepository()
    this.profileRepository = new ProfileRepository()
  }

  public async registerUser(seed: { clerkUserId: string }) {
    const user = await this.userRepository.getUserByClerkUserId(
      seed.clerkUserId
    )
    if (!user) {
      const createdUser = await this.userRepository.createUser(seed)
      await this.profileRepository.createProfile({
        userId: createdUser.id,
        bio: 'よろしくおねがいします！',
      })
    }
  }

  public async getUserByClerkUserId(clerkUserId: string) {
    const user = await this.userRepository.getUserByClerkUserId(clerkUserId)
    return user
  }
}
