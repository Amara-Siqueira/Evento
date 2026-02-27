import Link from 'next/link'
import React from 'react'
import { alegreya } from '../components/fonts/Font'
import { CiCalendar } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
const Cta = () => {
    return (
        <div className='w-full   
                    bg-gradient-to-br
                    from-[#5445A5]
                    to-[#1F8F79]
                    p-20
                    '
                    id='cta'
                    >
            <div className={`flex flex-col text-white `}>
                <h1 className={`text-5xl font-bold mx-auto ${alegreya.className} mb-2  `}>Vamos criar algo <br /> <span className='text-[#FDCB6E]'>inesquecível</span> juntos?</h1>
                <p className=' mx-auto '>Solicite um orçamento personalizado em até 24 horas. <br />
                    Nossa equipe está pronta para atender você.</p>
                <div className="flex gap-5 mx-auto mt-10 ">
                    <a
                        href="mailto:siqueiraamara6@gmail.com"
                        className="bg-[#FDCB6E] text-black p-2 flex rounded-full
                            hover:bg-[#E6B422]
                            items-center gap-2"
                    >
                        <CiCalendar size={20} />
                        Solicitar Orçamento
                    </a>
                    <a 
                    href=" https://wa.me/5561993316709?text=Olá! Gostaria de saber mais sobre landing pages."
                    className='bg-[#12c9aa] text-black p-2 flex rounded-full 
                     hover:bg-[#008B74]
                     items-center gap-2
                     '
                    >
                         <FaRegComment size={20} />
                        Falar no WhatsApp
                    </a>
               </div>
            </div>
        </div>

    )
}

export default Cta