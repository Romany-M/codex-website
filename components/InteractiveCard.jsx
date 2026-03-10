"use client"

import { motion } from "framer-motion"

export default function InteractiveCard({children}){

return(

<motion.div
whileHover={{
rotateX:5,
rotateY:-5,
scale:1.03
}}
transition={{type:"spring",stiffness:200}}
>

{children}

</motion.div>

)

}