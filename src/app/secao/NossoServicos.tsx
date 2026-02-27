'use client'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiGift, CiHeart } from "react-icons/ci";
import { alegreya } from '../components/fonts/Font';
import { LiaCitySolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

const NossosServicos = () => {
    const [openNiver, setOpenNiver] = useState(false)
    const [openCasamento, setOpenCasamento] = useState(false)
    const [openEvento, setOpenEvento] = useState(false)
    const [openOng, setOpenOng] = useState(false)
    return (
        <div id='NossosServicos' className="w-full min-h-screen mt-20 flex flex-col">
            <div className=" items-center  mx-auto justify-center flex flex-col ">
                <p className={`${alegreya.className}  text-2xl text-green-400 mb-5`}>O que fazemos</p>
                <h1 className={`${alegreya.className} text-5xl mb-15 `}>Nossos Serviços</h1>
            </div>
            <div className="card sm:grid grid-cols-2 p-4">
                <div
                    className="Aniversario hover:cursor-pointer" onClick={() => openNiver ? setOpenNiver(false) : setOpenNiver(true)}>
                    <div className="niver 
                    p-2 border border-3px  
                    border-gray-400 rounded-lg 
                    shadow-md  w-[80%] mx-auto mt-4 
                    flex
                   flex-col
                    ">
                        <div className="flex flex-row p-4 border-1px border-b shadow-lg border-gray-400/20 ">
                            <div><CiGift size={40} className="bg-[#6C5CE7] text-white p-1 rounded-lg mr-3" /> </div>
                            <h1 className={`${alegreya.className} text-2xl  `} >Aniversários</h1>
                            <button>
                                {
                                    openNiver ? <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </button>
                        </div>
                        <div className=" ">
                            {
                                openNiver &&
                                <div className="">
                                    <h1 className={`${alegreya.className} mb-3 mt-4 `} >Infantil</h1>
                                    <div className="infantil  ">
                                        <ul className="list-disc pl-6  marker:text-green-500 
                                sm:grid 
                                sm:grid-cols-2  
                                sm:mb-4">
                                            <li>Pula-pula</li>
                                            <li>Algodão doce</li>
                                            <li> Carrinho <br /> de pipoca</li>
                                            <li> Palhaços e recreadores</li>
                                            <li> Pintura facial</li>
                                            <li>Bolo personalizado</li>
                                            <li>Mesa temática</li>
                                            <li>Lembrancinhas</li>
                                        </ul>
                                    </div>
                                    <div className="">
                                        <h1 className={`${alegreya.className} mb-3 mt-4`} >Adulto</h1>
                                        <ul className="list-disc pl-5 marker:text-green-500 grid grid-cols-2  mb-4">
                                            <li>DJ ou banda</li>
                                            <li>Bar de drinks</li>
                                            <li>Iluminação decorativa</li>
                                            <li>Buffet completo</li>
                                            <li>Cabine de fotos</li>
                                            <li>Decoração temática</li>
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>







                {/*casamento */}
                <div className=" hover:cursor-pointer p-2 border border-3px  border-gray-400 rounded-lg shadow-md  w-[80%] mx-auto mt-4 "
                    onClick={() => openCasamento ? setOpenCasamento(false) : setOpenCasamento(true)} >
                    <div className="flex items-center border-1px border-b shadow-lg border-gray-400/20  mb-3">
                        <div className=""><CiHeart size={40} className="bg-[#00B894] text-white p-1 rounded-lg mr-3" /></div>

                        <h1 className={`${alegreya.className} mb-3 mt-4 text-2xl`} >Casamentos</h1>
                        <button>
                            {
                                openCasamento ? <IoIosArrowDown /> : <IoIosArrowUp />
                            }
                        </button>
                    </div>
                    {
                        openCasamento &&
                        <div className="">
                            <div className="infantil  ">
                                <ul className="list-disc pl-6  marker:text-green-500 grid grid-cols-2  mb-4">
                                    <li> Cerimonial completo</li>
                                    <li> Decoração personalizada</li>
                                    <li>  Música ao vivo ou DJ</li>
                                    <li> Buffet sofisticado</li>
                                    <li> Fotografia e filmagem</li>
                                    <li> Iluminação cênica</li>
                                    <li>  Coordenação do dia da noiva</li>
                                </ul>

                            </div>
                        </div>
                    }
                </div>
                {/* evento */}
                <div className="niver  hover:cursor-pointer p-2 border border-3px  border-gray-400 rounded-lg shadow-md  w-[80%] mx-auto mt-4 "
                    onClick={() => openEvento ? setOpenEvento(false) : setOpenEvento(true)} >
                    <div className="flex  border-1px border-b shadow-lg border-gray-400/20  ">
                        <div className="flex items-center ">
                            <LiaCitySolid size={40} className="bg-[#4A3B9E] text-white p-1 rounded-lg mr-3" />
                        </div>
                        <h1 className={`${alegreya.className} mb-3 mt-4 text-2xl`}  >Evento Municipais</h1>
                        <button>
                            {
                                openEvento ? <IoIosArrowDown /> : <IoIosArrowUp />
                            }
                        </button>
                    </div>
                    {
                        openEvento &&
                        <div className="">
                            <div className="infantil   ">
                                <ul className="list-disc pl-6  marker:text-green-500 grid grid-cols-2  mb-4">
                                    <li>Estrutura de palco</li>
                                    <li> Sonorização profissional</li>
                                    <li>Iluminação</li>
                                    <li>Montagem de tendas</li>
                                    <li>Atrações culturais</li>
                                    <li>Logística e organização</li>
                                </ul>

                            </div>
                        </div>
                    }
                </div>


                <div className="ong">
                    {/* ong */}
                    <div className="niver  hover:cursor-pointer p-2 border border-3px  border-gray-400 rounded-lg shadow-md  w-[80%] mx-auto mt-4 "
                        onClick={() => openOng ? setOpenOng(false) : setOpenOng(true)} >

                        <div className="flex   border-1px border-b shadow-lg border-gray-400/20 ">
                            <div className="flex items-center">
                                <LuUsers size={40} className="bg-[#4A3B9E] text-white p-1 rounded-lg mr-3" />
                            </div>
                            <h1 className={`${alegreya.className} mb-3 mt-4 text-2xl`} > Evento para ONGs</h1>
                            <button>
                                {
                                    openOng ? <IoIosArrowDown /> : <IoIosArrowUp />
                                }
                            </button>

                        </div>
                        {
                            openOng &&
                            <div className="">
                                <div className="infantil  ">
                                    <ul className="list-disc pl-6  marker:text-green-500 grid grid-cols-2  mb-4">
                                        <li> Campanhas solidárias</li>
                                        <li>Eventos beneficentes</li>
                                        <li>Ações sociais</li>
                                        <li>Captação de recursos</li>
                                        <li> Divulgação estratégica </li>
                                    </ul>

                                </div>
                            </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NossosServicos