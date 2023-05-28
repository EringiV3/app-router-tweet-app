import { db } from '@/libs/db'

export class TweetRepository {
  public async createTweet(seed: { text: string; userId: string }) {
    const tweet = await db.tweet.create({
      data: {
        content: seed.text,
        userId: seed.userId,
      },
    })

    return tweet
  }
}
