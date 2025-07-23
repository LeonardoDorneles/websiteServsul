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
                
                {/* Contêiner para o mapa com bordas e sombra aprimoradas */}
                <div className="relative w-full md:w-3/4 overflow-hidden rounded-2xl shadow-xl border border-gray-200 mx-auto">
                    <div style={{ paddingTop: '56.25%' }}> {/* Proporção 16:9 */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1224.6912596601665!2d-57.076268239861044!3d-29.75016083318582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94535b7c2020e551%3A0xe138f5e7f4bddf0c!2sServsul%20Servi%C3%A7os!5e0!3m2!1spt-PT!2sbr!4v1753196670868!5m2!1spt-PT!2sbr" 
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}