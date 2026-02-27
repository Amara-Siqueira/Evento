import Link from 'next/link'
import React from 'react'
import { alegreya } from '../components/fonts/Font';
import { CiCalendar } from "react-icons/ci";
import { LuMessageCircle } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
    return (
        <section className=" 
h-full
contain
mt-5

sm:min-h-screen 
sm:w-full 
sm:top-0 
sm:flex 
sm:h-full  ">

            {/* Overlay */}
            <div className=" absolute inset-0 z-0">
                <div className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-[#594A82]
                    to-[#2A4A45]
                    opacity-90
                    mix-blend-multiply
                "/>
                <div className="absolute inset-0 
                    bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] 
                    bg-cover bg-center opacity-40"
                />
                <div className="absolute inset-0 
                    bg-gradient-to-t 
                    from-black/50 
                    to-transparent"
                />
            </div>
            {/* Texto acima */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6 
            top-15
            sm:mt-40

            ">
                <h1 className={`text-4xl md:text-6xl font-bold ${alegreya.className}`}>
                    Transformamos momentos em <span className=" text-[#AE8F54]">
                        memórias inesquecíveis.
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white/90">
                    Organização completa para aniversários, casamentos,
                    eventos municipais e ações para ONGs.
                    Cuidamos de cada detalhe para você aproveitar.
                </p>
                <div className="
                sm:flex 
                sm:flex-col  
                sm:gap-4 
                sm:items-center 
                mt-6 
                sm:flex-row 
                sm:mt-15 " >
                    <div className="solicitarOrcamento  bg-[#6C5CE7] p-5 
                    rounded-full flex  flex-row  items-center gap-2
                    hover:bg-[#665E94]
                    hover:pointer
                    sm:h-[50px]
                    ">
                        <a
                            href=" mailto:siqueiraamara6@gmail.com"
                            className=' text-black p-2 flex rounded-full 
                    
                     items-center gap-2
                     '
                        >
                            <CiCalendar size={20} />
                            Solicitar Orçamento
                        </a>

                    </div>
                    <div className="whatsapp bg-[#00B894] p-5 rounded-full flex  flex-row items-center gap-2
                    hover:bg-[#008B74]
                     hover:pointer
                    sm:h-[50px]
                   mt-5
                   mb-5
                   ">
                        <a
                            href=" https://wa.me/5561993316709?text=Olá! Gostaria de saber mais sobre landing pages."
                            className=' text-black p-2 flex rounded-full 
                    
                     items-center gap-2
                     '
                        >
                            <CiCalendar size={20} />
                            Falar no whatsapp
                        </a>
                    </div>
                    <div className="eventos bg-[#FDCB6E] p-5 rounded-full flex  flex-row items-center gap-2
                    hover:bg-[#E6B422]
                    hover:pointer
                    sm:h-[50px]
  ">
                        <Link href={'#NossosServicos'}>Ver nossos Eventos</Link>
                        <FaArrowRight size={20} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero