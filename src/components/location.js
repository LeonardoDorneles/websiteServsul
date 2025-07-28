import { MapPin } from "lucide-react";


export function Location(){
    return(
        <section id="localizacao" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4"> 
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">
                        Localização
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Nosso escritório está localizado na Rua Benjamin Constant, nº 1177, em Uruguaiana – RS.
                    </p>
                </div>
                
                {/* Contêiner principal para o mapa e o fallback */}
                <div className="relative w-full md:w-3/4 overflow-hidden rounded-2xl shadow-xl border border-gray-200 mx-auto">
                    {/* Este div mantém a proporção do mapa */}
                    <div style={{ paddingTop: '56.25%' }} className="relative w-full h-0"> {/* Adicionado h-0 e relative para o padding funcionar melhor */}
                        {/* Iframe do Google Maps - ele terá um z-index padrão maior */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1224.6912596601665!2d-57.076268239861044!3d-29.75016083318582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94535b7c2020e551%3A0xe138f5e7f4bddf0c!2sServsul%20Servi%C3%A7os!5e0!3m2!1spt-PT!2sbr!4v1753196670868!5m2!1spt-PT!2sbr" 
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute top-0 left-0 w-full h-full z-10" // z-10 para ficar por cima do fallback
                        ></iframe>
                        {/* Div de fallback que fica por baixo do iframe */}
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6 bg-white text-center z-0"> {/* z-0 para ficar por baixo */}
                            <MapPin className="size-12 text-gray-700"></MapPin>
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">Mapa Interativo</h4>
                            <p className="text-gray-700">
                                Rua Benjamin Constant, nº 1177<br />
                                Santo Antônio - Uruguaiana, RS<br />
                                CEP: 97502-126
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}