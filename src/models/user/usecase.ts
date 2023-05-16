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
    const user = await this.userRepository.getUserByClerkId(seed.clerkUserId)
    if (!user) {
      await this.userRepository.createUser(seed)
      await this.profileRepository.createProfile({
        userId: seed.clerkUserId,
        bio: '',
      })
    }
  }
}
