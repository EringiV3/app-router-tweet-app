import { ProfileRepository } from './repository'

export class ProfileUsecase {
  private profileRepository: ProfileRepository

  constructor() {
    this.profileRepository = new ProfileRepository()
  }

  public async getProfileByUserId(userId: string) {
    const profile = await this.profileRepository.getProfileByUserId(userId)
    return profile
  }
}
