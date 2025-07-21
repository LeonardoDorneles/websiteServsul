import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(55) 99631-0112</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>servsul.ps@gmail.com</span>
            </div>
          </div>
          <div className="text-xs">
            Atendimento 24h • Monitoramento 24/7
          </div>
        </div>

        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/img/logoPNG.png"
              alt="Logo Servsul"
              width={96}
              height={96}
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-primary">Servsul</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre nós
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Localização
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </div>

          <Button variant="default" size="lg">
            Solicitar Orçamento
          </Button>
        </nav>
      </div>
    </header>
  );
}