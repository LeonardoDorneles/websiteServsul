import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="py-12 bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Seção de Contato */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-500 mt-1" />
                <div>
                  <p>(55) 99631-0112</p>
                  <p>(55) 98414-4818</p>
                  <p>(55) 3411-7935</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-500 mt-1" />
                <p>servsul.ps@gmail.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-500 mt-1" />
                <p>
                  Rua Benjamin Constant, 1177<br />
                  Santo Antônio - Uruguaiana, RS<br />
                  CEP: 97502-126
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 flex-shrink-0 text-blue-500 mt-0.5" />
                <p>
                  Segunda a Sexta: 8h às 18h
                </p>
              </div>
            </div>
          </div>

          {/* Seção de Mapa do Site (exemplo) */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Mapa do Site
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Sobre nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Seção de Links para Serviços (exemplo) */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">CFTV e monitoramento</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Alarmes e sensores</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Cercas elétricas</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Portaria e controladores de acesso</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Rondas motorizadas</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Limpeza e higienização</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos Reservados */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Servsul Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;