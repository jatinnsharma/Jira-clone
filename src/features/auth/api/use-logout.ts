import { useRouter } from "next/navigation";
import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType,InferResponseType } from "hono";


type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>
type RequestType = InferRequestType<typeof client.api.auth.logout["$post"]>

export const useLogout=()=>{
    const router = useRouter()
    const queryCLient = useQueryClient()

    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn:async()=>{
            const response = await client.api.auth.logout["$post"]();

            return await response.json();
        },
        onSuccess:()=>{
            router.refresh()
            // window.location.reload();
            queryCLient.invalidateQueries({queryKey:["current"]})
        }
    })

    return mutation;
}