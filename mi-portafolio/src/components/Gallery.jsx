const Gallery = () => {
  const projects = [
    {
      title: "Distribuidora Dubai",
      description: "E-commerce completo con carrito interactivo, panel de administración, integración de pagos con PayPal, y gestión de productos, marcas y ofertas.",
      category: "E-commerce",
      image: "/imgs/logo.png",
      technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Node.js", "Express", "MySQL", "PayPal API"],
      link: "https://distribuidora-dubai.online"
    },
    {
      title: "Aplicación Móvil Empresarial",
      description: "App móvil multiplataforma desarrollada con Flutter para gestión de pedidos y seguimiento en tiempo real.",
      category: "Aplicación Móvil",
      image: "/imgs/img2.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
    },
    {
      title: "Sistema de Gestión",
      description: "Plataforma web para administración de inventarios y ventas con reportes analíticos.",
      category: "Aplicación Web",
      image: "/imgs/img3.jpg",
      technologies: ["React", "Express", "PostgreSQL"],
    },
    {
      title: "Desarrollo Web Personalizado",
      description: "Sitios web a medida con diseño único y funcionalidades específicas para tu negocio.",
      category: "Desarrollo Web",
      image: "/imgs/img5.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros trabajos que demuestran nuestra calidad y compromiso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary-medium to-primary-light">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-primary-dark font-semibold text-sm z-10">
                  {project.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-medium/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-accent text-sm">Ver detalles</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent text-primary-dark px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-medium hover:text-primary-dark font-semibold transition"
                  >
                    Ver proyecto
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
