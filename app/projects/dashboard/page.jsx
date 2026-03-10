import ProjectCaseStudy from "@/components/ProjectCaseStudy"

export default function Page(){

return(

<ProjectCaseStudy

title="Analytics Dashboard"

image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"

problem="The company needed a dashboard to monitor real-time analytics."

solution="We developed an interactive dashboard with charts, data tables and analytics insights."

tech={[
"Next.js",
"Chart.js",
"Node.js",
"AWS"
]}

results={[
"Real-time data insights",
"Better decision making",
"Improved performance monitoring"
]}

/>

)

}