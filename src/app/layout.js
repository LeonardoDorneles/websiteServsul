import "./globals.css";
import {Header} from '../components/header'
import {Hero} from '../components/hero'
import Services from '../components/services'
import { Location } from '@/components/location';
import Contacts from '@/components/contacts'
 
export const metadata = {
  title: 'Servsul Serviços: Proteção Total para Sua Empresa', 
  description: 'Soluções completas em segurança e monitoramento 24h em Uruguaiana, RS. Proteção patrimonial, cercas elétricas, alarmes, limpeza e segurança para eventos.', // Descrição para motores de busca
  keywords: ['segurança', 'monitoramento', 'cftv', 'alarmes', 'cerca eletrica', 'limpeza', 'rondas motorizadas', 'segurança eventos', 'uruguaiana', 'serviços de segurança', 'proteção empresarial', 'controle de acesso', 'Servsul'], // Palavras-chave relevantes
  authors: [{ name: 'Leonardo Dorneles' }], 
  creator: 'Leonardo Dorneles',
  publisher: 'Leonardo Dorneles',
  metadataBase: new URL('https://servsulservicos.com.br'), 
  alternates: {
    canonical: 'https://www.servsulservicos.com.br',
  },
  openGraph: {
    title: 'Servsul Serviços: Proteção Total para Sua Empresa',
    description: 'Soluções completas em segurança e monitoramento 24h em Uruguaiana, RS. Proteção patrimonial, cercas elétricas, alarmes, limpeza e segurança para eventos.',
    url: 'https://servsulservicos.com.br',
    siteName: 'Servsul Serviços',
    images: [
      {
        url: '/img/logo.png', // Caminho para sua logo principal para OpenGraph
        width: 800,
        height: 600,
        alt: 'Logo Servsul',
      },
      {
        url: '/img/logobg.png', // Caminho para uma imagem de fundo ou hero para OpenGraph
        width: 1800,
        height: 1600,
        alt: 'Servsul Segurança',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servsul Serviços: Proteção Total para Sua Empresa',
    description: 'Soluções completas em segurança e monitoramento 24h em Uruguaiana, RS. Proteção patrimonial, cercas elétricas, alarmes, limpeza e segurança para eventos.',
    creator: '@ServsulOficial', // Se tiver um Twitter, substitua
    images: ['https://servsulservicos.com.br/img/logo.png'], // Caminho absoluto para a imagem do Twitter Card
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Header />
        <Hero />
        <Services />
        <Location />
        <Contacts />
        

        
      </body>
    </html>
  );
}
