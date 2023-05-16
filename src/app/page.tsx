import { isAuthenticated } from '@/libs/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  if (!isAuthenticated()) {
    redirect('/sign-in')
  }

  redirect('/tweets')
}
