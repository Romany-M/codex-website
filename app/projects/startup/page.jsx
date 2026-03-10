import ProjectCaseStudy from "@/components/ProjectCaseStudy"

export default function Page(){

return(

<ProjectCaseStudy

title="Startup SaaS Landing Page"

image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"

problem="The startup needed a landing page that converts visitors into customers."

solution="We designed a modern SaaS landing page with strong call-to-actions and performance optimization."

tech={[
"Next.js",
"Tailwind",
"Vercel",
"Framer Motion"
]}

results={[
"2.5x more signups",
"Improved user engagement",
"Faster page load speed"
]}

/>

)

}