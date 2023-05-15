import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  if (!isAuthenticated()) {
    redirect('/sign-in')
  }

  redirect('/tweets')
}
