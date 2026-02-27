import Link from 'next/link'
import React from 'react'
import { IoLogoInstagram } from "react-icons/io5"
import { SlSocialLinkedin } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { notoSerif } from '../fonts/Font';
const Footer = () => {
    const links = [
        { name: 'Início', href: '/' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#NossosServicos' },
        { name: 'Contato', href: '#cta' }
    ]
    return (
        <div className='bg-[#212529] text-[#767C83] flex grid grid-cols-1 gap-6 p-4 pt-20
        
        '>


            <div className="sm:grid sm:grid-cols-4 sm:flex sm:flex-row ">
                <div className=" ">
                    <h1 className={`text-white  text-2xl mb-5 ${notoSerif.className} font-semibold`}>Aura Eventos</h1>
                    <h2>Transformando sonhos em realidade com sofisticação,
                        criatividade e excelência em cada detalhe. </h2>
                    <div className="icons text-white flex flex-row gap-4 mt-4 ">
                        <a
                            href="https://www.instagram.com/amara_siqueira20/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoInstagram size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/amara-siqueira-160405223/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SlSocialLinkedin size={20} />
                        </a>
                    </div>
                </div>
                <div className="Link">
                    <h1 className={`mt-5 mb-4  text-[#AE8F54] font-bold  ${notoSerif.className} `}>Links Rápidos</h1>
                    {
                        links.map((items) => (
                            <div className="" key={items.name}>
                                <Link href={items.href}>{items.name}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className="servicos ">
                    <h1 className={` mt-5 mb-4 text-[#AE8F54] font-bold  ${notoSerif.className} `}>Serviços</h1>
                    <h2>Aniversários</h2>
                    <h2> Casamentos </h2>
                    <h2>Eventos Corporativos</h2>
                    <h2>Eventos Municipais</h2>
                    <h2>Ações para ONGs</h2>
                </div>
                <div className="contato   ">
                    <h1 className={`mt-5 mb-4  text-[#AE8F54] font-bold  ${notoSerif.className} `}>Contato</h1>
                    <div>
                        <div className=" flex gap-2 endereco">
                            <FaMapMarkerAlt className='text-[#6C5CE7]' />
                            <p>Av.endereço </p>
                        </div>
                        <div className="tel mt-3 mb-3 flex gap-2">
                            <FiPhone className='text-[#6C5CE7]' />
                            <p>(11) 9999-999</p>
                        </div>
                        <div className="email flex gap-2">
                            <AiOutlineMail className='text-[#6C5CE7] ' />
                            <p>contato@auraenvento.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-10 '>© 2026 Aura Eventos. Todos os direitos reservados.</p>
        </div>
    )
}

export default Footer