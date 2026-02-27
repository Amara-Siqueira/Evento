import Cta from "./secao/Cta";
import Depoimento from "./secao/Depoimento";
import Hero from "./secao/Hero";
import NossosServicos from "./secao/NossoServicos";
import Sobre from "./secao/Sobre";

export default function Home() {
  return (
    <div className="w-full ">
   
      <main className=" w-full justify-between  ">
  
       <Hero/>
       <Sobre/>
      <NossosServicos/>
    <Depoimento/>
    <Cta/>
      </main>

    </div>
  );
}
