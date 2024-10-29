"use client"

import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar"
import {Loader} from "lucide-react"
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DottedSeparator } from "@/components/dotted-separator"

import { useLogout } from "../api/use-logout"
import { useCurrect } from "../api/user-current"
import { useRouter } from "next/navigation"

export const UserButton = () =>{
    const router = useRouter()
    const {data,isLoading} = useCurrect();
    const {mutate} = useLogout()

    if(isLoading){
        return(
            <div className="size-10 rounded-full flex items-center justify-center border bg-neutral-300 "> 
            <Loader/>

            </div>
        )
    }

}