import Loading from '@/components/Loading/Loading'
import { Profile } from '@/components/Profile'
import { Suspense } from 'react'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params

  return (
    <div>
      {/* Suspenseで囲うとStreaming SSRになる */}
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <Profile userId={id} />
      </Suspense>
    </div>
  )
}
