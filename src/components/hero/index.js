import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Award } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-indigo-700 overflow-hidden"> {/* bg-gradient-hero -> bg-indigo-700 (um roxo/azul forte) */}
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/img/logoresized.png"}
          alt="Servsul"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-20"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* bg-gradient-hero -> bg-indigo-800 com opacidade ajustada */}
        <div className="absolute inset-0 bg-gray-950 opacity-80"></div> 
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Proteção Total para
              <span className="text-yellow-300"> Sua Empresa</span> {/* text-primary-glow -> text-yellow-300 (um tom de amarelo brilhante) */}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Soluções completas em segurança com tecnologia de ponta,
              monitoramento 24h e equipe especializada para proteger
              o que mais importa para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="default" size="lg" className="text-lg px-8 py-6">
                Solicitar Orçamento Gratuito
              </Button>
              <Button variant="default" size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-blue-600"> {/* hover:text-primary -> hover:text-blue-600 (azul padrão do Tailwind) */}
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-yellow-300" /> {/* text-primary-glow -> text-yellow-300 */}
                </div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-300" /> {/* text-primary-glow -> text-yellow-300 */}
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Clientes Atendidos</div>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-yellow-300" /> {/* text-primary-glow -> text-yellow-300 */}
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Monitoramento</div>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-300" /> {/* text-primary-glow -> text-yellow-300 */}
                </div>
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm text-white/80">Certificados</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* bg-gradient-primary -> bg-blue-500 com opacidade ajustada */}
              <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-20 blur-3xl"></div> 
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl"> {/* bg-card/10 -> bg-gray-900/40, shadow-glow -> shadow-xl */}
                <h3 className="text-2xl font-semibold text-white mb-6">Por que nos escolher?</h3>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" /> {/* text-primary-glow -> text-yellow-300 */}
                    <span>Tecnologia de segurança mais avançada do mercado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" /> {/* text-primary-glow -> text-yellow-300 */}
                    <span>Equipe treinada e certificada internacionalmente</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" /> {/* text-primary-glow -> text-yellow-300 */}
                    <span>Suporte técnico 24 horas por dia, 7 dias por semana</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" /> {/* text-primary-glow -> text-yellow-300 */}
                    <span>Garantia total em todos os nossos serviços</span>
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