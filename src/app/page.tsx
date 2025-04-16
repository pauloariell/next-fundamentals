import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'
import { Suspense } from 'react'
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>
      <h1>Home!</h1>
      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
