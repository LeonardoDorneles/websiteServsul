import { Camera, Shield, Users, Smartphone, Lock, Zap, BrushCleaning, Bike, DoorClosed, Cctv } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Importe o componente Link do Next.js

const Services = () => {
  // Número de telefone para o WhatsApp (ex: CódigoPaísDDDNumero)
  const whatsappNumber = "5555984144818"; 

  const services = [
    {
      icon: Cctv,
      title: "CFTV e monitoramento",
      description: "Sistema completo de circuito fechado de TV com monitoramento 24h e gravação.",
      features: ["Câmeras", "Visão noturna", "Acesso remoto", "Gravação em nuvem"]
    },
    {
      icon: Shield,
      title: "Alarmes e sensores",
      description: "Sistemas de alarme inteligentes com sensores de movimento, abertura e quebra de vidro.",
      features: ["Sensores infravermelhos", "Alarme silencioso", "Notificação mobile", "Backup de energia"]
    },
    {
      icon: DoorClosed,
      title: "Portaria e controladores de acesso",
      description: "Equipe qualificada para portaria, zeladoria e controle de acesso.",
      features: ["Agentes treinados", "Controle de acesso", "Rondas programadas", "Relatórios detalhados"]
    },
    {
      icon: Zap,
      title: "Cercas elétricas",
      description: "Instalação e manutenção de sistemas de cerca elétrica para proteção perimetral de seu patrimônio.",
      features: ["Proteção perimetral", "Alarme sonoro integrado", "Energizador de choque", "Manutenção preventiva"]
    },
    {
      icon: BrushCleaning,
      title: "Limpeza e higienização",
      description: "Serviços profissionais de limpeza e higienização para ambientes comerciais e residenciais.",
      features: ["Limpeza profissional", "Limpeza de vidros", "Sanitização de ambientes", "Equipamentos de ponta"]
    },
    {
      icon: Bike,
      title: "Rondas motorizadas",
      description: "Rondas motorizadas em veículos de segurança para inibir ações criminosas e reforçar a proteção de seu patrimônio.",
      features: ["Veículos de segurança", "Cobertura de área estendida", "Rondas programadas e aleatórias", "Resposta rápida"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
            Nossos serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em segurança com tecnologia de ponta
            e atendimento especializado para proteger seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Mensagem personalizada para cada serviço
            const serviceWhatsappMessage = encodeURIComponent(`Olá, gostaria de saber mais sobre ${service.title}.`);
            const serviceWhatsappLink = `https://wa.me/${whatsappNumber}?text=${serviceWhatsappMessage}`;

            return (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-gray-200"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 text-white focus-visible:ring-blue-500 transition-all duration-300 mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Botão "Saiba Mais" com link para WhatsApp */}
                <Button asChild variant="default" className="w-full group-hover:bg-blue-700 group-hover:text-white mt-auto">
                  <Link href={serviceWhatsappLink} target="_blank" rel="noopener noreferrer">
                    Saiba mais
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          {/* Botão "Solicitar Orçamento Personalizado" */}
          <Button asChild variant="default" size="lg" className="text-lg px-8 py-6">
            {/* Você pode definir um link específico para este botão também, se quiser */}
            <Link 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento personalizado para minha empresa.")}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Solicitar orçamento personalizado
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;