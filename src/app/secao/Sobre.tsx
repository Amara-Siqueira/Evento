import React from 'react'
import { notoSerif, alegreya } from '../components/fonts/Font'
import { FiTarget, FiCheckCircle, FiHeart, FiShield } from "react-icons/fi";
const Sobre = () => {
    return (
        <div id='sobre'
            className='w-full
        min-h-screen  
        dark:text-white 
        mt-39
        p-2    
        items-center
        flex
        flex-col
       
        '>
            <div className="texto w-full flex flex-col  gap-5  justify-center">
                <p className={`
                    ${notoSerif.className}
                    text-[#6C5CE7] text-xl font-bold 
                    mb-5
                    sm:text-2xl
                    `} >Sobre a Aura Eventos</p>
                <h1 className={`
                    ${alegreya.className}
                     text-3xl    
                     text-black
                     dark:text-white
                     sm:text-4xl
                    `}>Mais do que eventos. <br />
                    <span className='text-[#6C5CE7]'>Criamos experiências</span>.</h1>
                <h2 className='mb-10'>Na Aura Eventos, acreditamos que cada celebração é única. Combinamos criatividade, sofisticação e uma execução impecável para
                    transformar suas ideias em realidade. Nossa missão é tirar o peso da organização dos seus ombros,
                    permitindo que você seja um convidado na sua própria festa.</h2>
            </div>
            <div className="
       flex
       flex-col       
       sm:grid 
       sm:grid-cols-2
       ">
                <div className="textAndIcons 
            sm:grid 
            sm:grid-cols-2
            ">
                    <div className="Planejamento  ">
                        <h1 className={` ${alegreya.className}  text-2xl text-center `}  >Planejamento Estratégico </h1>
                        <div className="icon flex gap-3 items-center">
                            <div ><FiTarget size={40} className='bg-gray-400 flex items-center rounded-lg p-1 text-purple-500 ' /></div>
                            <p> Cada detalhe é pensado com antecedência
                                para garantir o fluxo perfeito do seu evento. </p>
                        </div>
                    </div>
                    <div className="execucao mb-4  ">
                        <h1 className={` ${alegreya.className} text-2xl text-center `}  >Execução sem Imprevistos</h1>
                        <div className="icon flex gap-3 items-center">
                            <div className=""><FiCheckCircle size={40} className='bg-gray-400 flex items-center rounded-lg p-1 text-green-600 ' /></div>
                            <p> Equipe preparada para resolver qualquer situação com agilidade
                                e discrição.</p>
                        </div>
                    </div>
                    <div className="Atendimento mt-5  ">
                        <h1 className={` ${alegreya.className} text-2xl text-center`}  >Atendimento Personalizado </h1>
                        <div className="flex gap-3 items-center">
                            <div className=""> <FiHeart size={40} className='bg-gray-400 flex items-center rounded-lg p-1 text-purple-300' /></div>
                            <p>Entendemos seu sonho e trabalhamos para torná-lo
                                realidade do seu jeito. </p>
                        </div>
                    </div>
                    <div className=" Transparência mt-5 ">
                        <h1 className={` ${alegreya.className} text-2xl text-center`}  >Transparência no Orçamento </h1>
                        <div className="flex gap-3 items-center">
                            <div className=""> <FiShield size={40} className='bg-gray-400 flex items-center rounded-lg p-1 text-green-600' /></div>
                            <p> Sem surpresas ou taxas ocultas. Você sabe exatamente onde
                                seu investimento é aplicado.</p>
                        </div>
                    </div>
                </div>
                <div className="imagem mt-4
            grid 
            grid-cols-2
            gap-x-1
            gap-3
            sm:grid
            sm:grid-cols-2
            sm:gap-1
            sm:gap-x-1
            sm:gap-y-2
            ">
                    <div className="flex">
                        <div className="bg-purple-500/30 p-3 rounded-lg absolute w-55 h-40 "></div>
                        <img src={'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} alt="Taças de bebidas"
                            className='w-55 h-40 rounded-lg  ' />
                    </div>
                    <div className="flex ">
                        <div className="bg-[#FDC644]/70 p-3 rounded-lg absolute w-40 h-45 "></div>
                        <img src={'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                            alt="dj"
                            className='w-40 h-45 rounded-lg  ' />
                    </div>
                    <div className="flex ">
                        <div className="bg-[#121587]/70 p-3 rounded-lg absolute w-40 h-45 "></div>
                        <img src={'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                            alt="Festa"
                            className='w-40 h-45 rounded-lg  ' />
                    </div>
                    <div className="flex ">
                        <div className="bg-[#121587]/70 p-3 rounded-lg absolute w-55 h-40 "></div>
                        <img src={'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                            alt="Festa"
                            className='w-55 h-40 rounded-lg  ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre