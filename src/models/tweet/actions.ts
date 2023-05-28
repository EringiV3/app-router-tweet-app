'use server'

import { TweetUsecase } from './usecase'

export const createTweet = async (text: string) => {
  const usecase = new TweetUsecase()
  const tweet = await usecase.createTweet({ text })

  return tweet
}
