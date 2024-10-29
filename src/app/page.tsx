"use client"

import { Button } from "@/components/ui/button"
import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrect } from "@/features/auth/api/user-current";
import { useRouter } from "next/navigation"
import { useEffect } from "react";


const Home = () => {
  const router = useRouter()
  const {data,isLoading} = useCurrect();
  const {mutate} = useLogout()

  useEffect(()=>{
    if(!data && !isLoading){
      router.push("/sign-in")
    }
  },[data])

  return (
    <div>
      <Button>Primary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritary">teritary</Button>
  
      <p className="text-red-500">
        Jatin
      </p>

      <Button onClick={()=>mutate()}>
        Logout
      </Button>
    </div>
  )
}

export default Home