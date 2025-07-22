import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa equipe está pronta para atendê-lo 24 horas por dia.
            Entre em contato e proteja seu negócio hoje mesmo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
                Informações de Contato
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-72 gap-y-6"> {/* md:grid-cols-2 para duas colunas em telas médias+ */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(55) 99631-0112</p>
                    <p className="text-gray-600">(55) 98414-4818</p>
                    <p className="text-gray-600">(55) 3411-7935</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">servsul.ps@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua da Segurança, 123<br />
                      Centro - São Paulo, SP<br />
                      CEP: 01000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;