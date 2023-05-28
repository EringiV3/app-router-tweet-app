import { UserRepository } from '@/models/user/repository'
import { TweetRepository } from './repository'
import { getAuthenticatedUser } from '@/libs/auth'

export class TweetUsecase {
  private tweetRepository: TweetRepository
  private userRepository: UserRepository

  constructor() {
    this.tweetRepository = new TweetRepository()
    this.userRepository = new UserRepository()
  }

  public async createTweet(seed: { text: string }) {
    const { clerkUserId } = await getAuthenticatedUser()
    const user = await this.userRepository.getUserByClerkUserId(clerkUserId)
    if (!user) {
      throw new Error('ユーザーが取得できません')
    }

    const tweet = await this.tweetRepository.createTweet({
      text: seed.text,
      userId: user.id,
    })

    return tweet
  }
}
