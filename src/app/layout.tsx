import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
  title: "Aura Eventos | Transformando momentos em memórias inesquecíveis",
  description:
    "A Aura Eventos é especializada na organização de casamentos, aniversários, eventos municipais e ações para ONGs. Planejamento estratégico, execução impecável e atendimento personalizado para criar experiências únicas.",
  keywords: [
    "organização de eventos",
    "casamentos",
    "aniversários",
    "eventos municipais",
    "eventos para ONGs",
    "planejamento de eventos",
    "empresa de eventos"
  ],
  authors: [{ name: "Amara Siqueira" }],
  openGraph: {
    title: "Aura Eventos | Transformando momentos em memórias inesquecíveis",
    description:
      "Planejamento estratégico e execução impecável para casamentos, aniversários e eventos corporativos. Solicite seu orçamento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
};

const inter = Inter({
  subsets:['latin'],
  weight:'300'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      className={`${inter.className}`}
      >
        <Navbar/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
