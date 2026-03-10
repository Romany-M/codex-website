export default function ProjectCaseStudy({title,image,problem,solution,tech,results}){

return(

<div className="max-w-5xl mx-auto py-24 px-6">

<h1 className="text-5xl font-bold mb-10">
{title}
</h1>

<img
src={image}
className="rounded-xl mb-12"
/>

<h2 className="text-2xl font-bold mb-4">
The Problem
</h2>

<p className="text-gray-600 mb-10">
{problem}
</p>

<h2 className="text-2xl font-bold mb-4">
The Solution
</h2>

<p className="text-gray-600 mb-10">
{solution}
</p>

<h2 className="text-2xl font-bold mb-6">
Technologies Used
</h2>

<div className="flex flex-wrap gap-4 mb-12">

{tech.map((t,i)=>(
<span
key={i}
className="bg-gray-100 px-4 py-2 rounded-lg"
>
{t}
</span>
))}

</div>

<h2 className="text-2xl font-bold mb-6">
Results
</h2>

<ul className="space-y-2 text-gray-700">

{results.map((r,i)=>(
<li key={i}>🚀 {r}</li>
))}

</ul>

</div>

)

}