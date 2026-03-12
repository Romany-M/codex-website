"use client"

import { useSearchParams } from "next/navigation"
import { projects } from "@/lib/projects"
import ProjectCaseStudy from "@/components/ProjectCaseStudy"

export default function ProjectView() {

const searchParams = useSearchParams()

const slug = searchParams.get("slug")

if(!slug){
return <div className="p-20 text-center">Loading...</div>
}

const project = projects.find(p => p.slug === slug)

if(!project){
return <div className="p-20 text-center">Project not found</div>
}

return(

<div className="max-w-5xl mx-auto py-20 px-6">

<ProjectCaseStudy project={project} />

</div>

)

}