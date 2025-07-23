import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Já importado, ótimo!

export function Header() {
  const whatsappNumber = "5555984144818";
  const whatsappMessage = encodeURIComponent("Olá, gostaria de solicitar um orçamento para a minha empresa.");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="w-full bg-gray-950 text-white border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(55) 3411-7935</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>servsul.ps@gmail.com</span>
            </div>
          </div>
          <div>
            Suporte 24h • Monitoramento 24/7
          </div>
        </div>

        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            {/* <--- ALTERAÇÃO AQUI: Envolver a Image com Link */}
            <Link href="#" passHref> 
              <Image
                src="/img/logoPNG.png"
                alt="Logo Servsul" // Melhorar o alt text para acessibilidade
                width={96}
                height={96}
                className="h-12 w-12 object-contain cursor-pointer" // Adicionar cursor-pointer para indicar que é clicável
              />
            </Link>
            <span className="text-xl font-bold text-primary">Servsul</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobrenos" className="font-medium">
              Sobre nós
            </a>
            <a href="#servicos" className="font-medium">
              Serviços
            </a>
            <a href="#sobre" className="font-medium">
              Localização
            </a>
            <a href="#contato" className="font-medium">
              Contato
            </a>
          </div>

          <Button asChild variant="default" size="lg">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}