
'use client'
import Dashboard from "@/component/Dashboard/Dashboard"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <section className="max-w-screen-lg	m-auto">
      <header className="flex justify-between mx-auto py-8">
      hi {session.user.email}
        <button onClick={() => signOut()}>Sign out</button>


      </header>
      <Dashboard />
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
