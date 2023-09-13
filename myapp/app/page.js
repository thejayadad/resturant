
'use client'
import Aside from "@/component/Aside"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <section className="w-[1000px] m-auto flex flex-col">
          <header className="flex justify-between w-[1000px] m-auto py-8 ">
          <div>
          hi {session.user.email}
          </div>
        <button onClick={() => signOut()}>Sign out</button>
          </header>
          <div>
            <Aside />
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
