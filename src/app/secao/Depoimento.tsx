
import { FaStar } from "react-icons/fa6";
import { alegreya,notoSerif } from "../components/fonts/Font";
const Depoimento = () => {
  return (
    <div className="p-6 flex flex-col
    sm:flex-col">
        <h2 className={`text-green-600 mx-auto items-center ${alegreya.className}`}>Depoimentos</h2>
        <h1 className={`text-3xl mx-auto mb-10 font-bold ${notoSerif.className}`}>O que dizem nossos clientes</h1>
       <div className="comentarios flex
       flex-col
       sm:flex-row
       gap-2
       ">    
         <div className="comentario1 p-2  bg-white rounded-lg flex flex-col gap-2">
           <div className="flex ">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
           </div>
            <p className="italic text-sm "> &ldquo;A Aura Eventos superou todas as nossas expectativas. 
                A decoração estava impecável e a equipe foi extremamente atenciosa do início ao fim. 
                Foi o dia mais feliz das nossas vidas!&rdquo;</p>
            <h2
            className={`font-bold  ${alegreya.className} text-2xl`}
            > Mariana Silva</h2>    
            <p className=" text-[#6C5CE7] font-bold" >Casamento ao Ar Livre </p>
        </div>

         <div className="comentario2  p-4 bg-white rounded-lg  flex flex-col gap-2">
                <div className="flex ">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
           </div>
            <p className="italic text-sm "> "Contratamos para o aniversário da minha filha e foi um sucesso absoluto.
                 A organização, o buffet, a música... tudo perfeito. Recomendo de olhos fechados!" </p>
            <h2
 className={`font-bold  ${alegreya.className} text-2xl`}
            >Carlos Eduardo </h2>    
            <p className=" text-[#6C5CE7] font-bold"> Festa de 15 Anos</p>
        </div>

         <div className="comentario3  p-2 bg-white rounded-lg flex flex-col gap-2 ">
                <div className="flex ">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
           </div>
            <p className="italic text-sm "> "Profissionalismo define. 
                Nosso evento de final de ano da empresa foi elogiado por todos os colaboradores.
                 A transparência no orçamento foi um diferencial importante." </p>
            <h2
             className={`font-bold  ${alegreya.className} text-2xl`}
            >Fernanda Oliveira </h2>    
            <p className=" text-[#6C5CE7] font-bold">Evento Corporativo</p>
        </div>
       </div>
    </div>
  )
}

export default Depoimento