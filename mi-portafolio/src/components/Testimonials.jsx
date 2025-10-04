const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      company: "Tienda Online Fashion",
      text: "SebaskiTek-X transformó completamente mi negocio. El sitio e-commerce que desarrollaron es rápido, seguro y fácil de usar. ¡Mis ventas aumentaron un 150%!",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      company: "Consultoría Empresarial",
      text: "Profesionalismo y calidad excepcional. Mi sitio web corporativo refleja perfectamente la imagen de mi empresa. Altamente recomendado.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "Arquitectura & Diseño",
      text: "El portafolio que me crearon es simplemente espectacular. Ahora puedo mostrar mis proyectos de manera profesional y he conseguido nuevos clientes.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios de clientes satisfechos con nuestro trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-primary-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
