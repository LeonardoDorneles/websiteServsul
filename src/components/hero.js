import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const whatsappNumber = "5555984144818";
  const whatsappMessage = encodeURIComponent("Ola, gostaria de solicitar um orçamento para a minha empresa.");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    // AJUSTE 1: Espaçamento vertical responsivo
    <section id="sobrenos" className="relative flex items-center bg-gray-950 overflow-hidden lg:min-h-screen py-24 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/img/logobg.png"}
          alt="Servsul"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Adicionado para carregamento otimizado (LCP)
        />
        <div className="absolute inset-0 bg-gray-950 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            {/* AJUSTE 2: Tipografia mais adaptável */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Proteção total para
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent"> sua empresa</span>
            </h1>
            <p className="text-md sm:text-xl text-white/90 mb-8 leading-relaxed">
              Soluções completas em segurança com tecnologia de ponta,
              monitoramento 24h e equipe especializada para proteger
              o que mais importa para você.
            </p>

            {/* AJUSTE 3: Botões mais flexíveis */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild variant="default" size="lg" className="w-full text-lg px-4 py-6">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento gratuito
                </Link>
              </Button>
              <Button asChild variant="default" size="lg" className="w-full text-lg px-4 py-6">
                <Link href="#servicos">
                  Nossos serviços
                </Link>
              </Button>
            </div>

            {/* Stats - Já está responsivo */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Clientes Atendidos</div>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Monitoramento</div>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm text-white/80">Certificados</div>
              </div>
            </div>
          </div>

          {/* AJUSTE 4: Tornar a seção "Por que nos escolher?" visível em mobile */}
          <div className="animate-fade-in lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Por que nos escolher?</h3>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                    <span>Monitoramento de segurança com tecnologia avançada.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                    <span>Equipe treinada e qualificada.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                    <span>Suporte com cliente 24 horas por dia, 7 dias por semana.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                    <span>Garantia total em todos os nossos serviços.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};