import ProjectCaseStudy from "@/components/ProjectCaseStudy"

export default function Page(){

return(

<ProjectCaseStudy

title="E-Commerce Platform"

image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"

problem="The client needed a scalable online store with payment integration and modern UI."

solution="We built a high-performance e-commerce platform with fast loading pages, secure payments and optimized UX."

tech={[
"Next.js",
"Node.js",
"Stripe",
"MongoDB",
"Tailwind"
]}

results={[
"3x faster website performance",
"120% increase in conversions",
"40% faster checkout experience"
]}

/>

)

}