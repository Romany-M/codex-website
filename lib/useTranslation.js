"use client"

import { usePathname } from "next/navigation"
import { translations } from "@/lib/translations"

export default function useTranslation(){

const pathname = usePathname()

const lang = pathname.startsWith("/ar") ? "ar" : "en"

const t = translations[lang]

return { t, lang }

}