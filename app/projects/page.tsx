import { projects } from "@/lib/projects"
import Link from "next/link"

export default function ProjectsPage(){

return(

<div className="max-w-7xl mx-auto py-24 px-6">

<h1 className="text-4xl font-bold text-center mb-16">
All Projects
</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{projects.map((project)=>(

<div
key={project.slug}
className="bg-white rounded-xl shadow overflow-hidden"
>

<img
src={project.image}
className="h-56 w-full object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
{project.title.en}
</h3>

<p className="text-gray-600 mb-4">
{project.country}
</p>

<Link
href={`/projects/view?slug=${project.slug}`}
className="text-blue-600 font-semibold"
>

View Case Study

</Link>

</div>

</div>

))}

</div>

</div>

)

}