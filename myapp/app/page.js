
'use client'
import Dashboard from "@/component/Dashboard/Dashboard"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
     <section className="max-w-screen-lg m-auto h-screen flex flex-col justify-center items-center">
      <div className="flex ">
      <h2 className="mr-12">hi {session.user.email}</h2>
        <button onClick={() => signOut()}>Sign out</button>

        </div>
        <Link className="text-center" href={'/dashboard'}>Dashboard</Link>

        </section>

      </>
    )
  }
  return (
    <>
     <section className="max-w-screen-lg m-auto h-screen flex flex-col justify-center align-center">
      <h2 className="text-center mb-12">Sign In</h2>
      <button onClick={() => signIn()}>Sign in</button>

     </section>
    </>
  )
}
