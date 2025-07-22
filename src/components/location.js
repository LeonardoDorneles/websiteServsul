

export function Location(){
    return(
        <section id="localizacao" className="py-20 bg-gray-100">
            <div className="container bg-white mx-auto px-4 rounded-4xl p-1 pl-24 pr-24"> 
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 pt-3">
                    Localização
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto pb-1">
                    Nosso escritório está localizado na Rua Benjamin Constant, nº 1177, em Uruguaiana – RS.
                    </p>
                    <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}> 
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1224.6912596601665!2d-57.076268239861044!3d-29.75016083318582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94535b7c2020e551%3A0xe138f5e7f4bddf0c!2sServsul%20Servi%C3%A7os!5e0!3m2!1spt-PT!2sbr!4v1753196670868!5m2!1spt-PT!2sbr" 
                            width="100%"
                            height="100%"
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

