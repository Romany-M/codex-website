"use client"

import Particles from "react-tsparticles"

export default function ParticlesBackground(){

return(

<Particles
className="absolute inset-0 -z-10"
options={{

particles:{
number:{value:40},
size:{value:3},
move:{enable:true,speed:1},
opacity:{value:0.3}
}

}}

 />

)

}