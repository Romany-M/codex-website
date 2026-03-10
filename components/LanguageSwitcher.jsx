"use client"

import { useRouter } from "next/navigation"

export default function LanguageSwitcher(){

const router = useRouter()

return(

<div className="flex gap-2">

<button
onClick={()=>router.push("/")}
className="border px-3 py-1 rounded-lg"
>
EN
</button>

<button
onClick={()=>router.push("/ar")}
className="border px-3 py-1 rounded-lg"
>
AR
</button>

</div>

)

}