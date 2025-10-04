const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">Sobre Mí</h2>

        <div className="max-w-5xl mx-auto">
          {/* Presentación */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <img
                src="/imgs/S.jpg"
                alt="Sebastian Solano"
                className="w-20 h-20 rounded-full object-cover border-4 border-primary-medium shadow-lg"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-primary-dark">Sebastian Felipe Solano Cabrera</h3>
                <p className="text-primary-medium font-medium">Fundador de SebaskiTek-X</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Soy fundador de <span className="font-semibold text-primary-medium">SebaskiTek-X</span>,
              un emprendimiento dedicado a construir presencias digitales sólidas y efectivas.
              Me especializo en desarrollar plataformas digitales eficientes y centradas en el usuario.
            </p>
          </div>

          {/* Filosofía de Trabajo con imagen */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-primary-dark mb-4">Filosofía de Trabajo</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos guiamos por las necesidades del cliente, escuchando atentamente lo que desea para
                crear soluciones personalizadas. Aplicamos principios de <span className="font-semibold text-primary-medium">UI/UX</span> en
                cada proyecto, asegurando que la experiencia del usuario sea intuitiva, atractiva y funcional.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Creo en la innovación constante, la seguridad como prioridad y el diseño que pone al
                usuario en el centro. Cada proyecto es una oportunidad para crear experiencias digitales
                que realmente marquen la diferencia.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src="/imgs/code.png"
                alt="Código profesional"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Desarrollo Profesional con imagen */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src="/imgs/real.png"
                alt="SebaskiTek-X Servicios"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-primary-dark mb-4">Desarrollo Profesional</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos las mejores prácticas de desarrollo y tecnologías modernas para
                garantizar código limpio, escalable y de alto rendimiento.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-medium mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Código limpio y documentado
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-medium mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Arquitectura escalable
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-medium mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Optimización de rendimiento
                </li>
              </ul>
            </div>
          </div>

          {/* Valores */}
          <div className="max-w-4xl mx-auto">

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary-light to-accent rounded-lg">
                <svg className="w-12 h-12 mx-auto mb-3 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h5 className="font-semibold text-primary-dark">Velocidad</h5>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary-light to-accent rounded-lg">
                <svg className="w-12 h-12 mx-auto mb-3 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h5 className="font-semibold text-primary-dark">Seguridad</h5>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary-light to-accent rounded-lg">
                <svg className="w-12 h-12 mx-auto mb-3 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h5 className="font-semibold text-primary-dark">Innovación</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
