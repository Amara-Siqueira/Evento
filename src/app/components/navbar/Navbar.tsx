'use client'
import Link from 'next/link';
import { notoSerif } from '../fonts/Font';
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
const [isScrolling, setIsScrolling] = useState(false)
const [isOpen, setIsOpen] = useState(false)


useEffect(()=>{
    const scroll = ()=>{
      setIsScrolling(window.scrollY > 50)
    }
    window.addEventListener('scroll', scroll)
    return ()=> window.removeEventListener('scroll', scroll)
},[])


const links = [
    {
        name:"Início",
        end:'/'
    } ,
    {
        name:"Sobre",
        end:'#sobre'
    }
     ,{
        name:"Servicos",
        end:'#NossosServicos'
    }

 ,{
        name:"Galeria",
        end:'/Galeria'
    }
 ,{
        name:"Depoimentos",
        end:'/Depoimentos'
    }

]


    return (
    <div className=''>
            <div className={`fixed top-0 w-full    z-50 transition-all flex justify-between 
             items-center p-6 font-bold transition-colors duration-500 ease-in-out 
        ${isScrolling ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-lg text-[#5B4B83]  ' : 'bg-white/0  text-white '}
        sm:h-[80px]
        sm:
        `}>
             <div className="name ">  
            <h1 className={`${notoSerif.className} text-xl`} >Aura Eventos</h1>
  
         
        </div>
           <div className=" hidden  sm:flex gap-2">
                {
                    links.map((items)=>(
                       <div className="hover:pointer hover:text-[#AE8F54]" key={items.name} > <Link href={items.end}>{items.name}</Link></div>
                    ))
                }
            </div>
                 <div className="menuCell sm:hidden">           
                <button className='text-black'>
                    {isOpen? <IoMdClose onClick={()=>setIsOpen(false)}/>:<FiMenu onClick={()=>setIsOpen(true)}/>}
                </button>
             {
                isOpen&& (
                     links.map((items)=>(
                       <div className=""  key={items.name} >
                         <Link key={items.name} href={items.end}>{items.name}</Link>
                       </div>
                    ))
                )
            }
                 </div>
    </div>
        </div>
       
  )
}

export default Navbar