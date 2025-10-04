const Blog = () => {
  const posts = [
    {
      title: "React 19: Las Nuevas Características que Debes Conocer",
      excerpt: "React 19 trae mejoras significativas en rendimiento, nuevos hooks y mejor manejo del estado. Descubre lo que viene.",
      date: "Enero 2025",
      category: "Tecnología",
      image: "/imgs/img3.jpg",
      link: "https://react.dev/blog/2024/12/05/react-19"
    },
    {
      title: "Tailwind CSS v4: El Futuro del Diseño Web",
      excerpt: "La nueva versión de Tailwind CSS promete mayor velocidad, mejor rendimiento y una experiencia de desarrollo mejorada.",
      date: "Diciembre 2024",
      category: "CSS",
      image: "/imgs/img2.jpg",
      link: "https://tailwindcss.com/blog/tailwindcss-v4-alpha"
    },
    {
      title: "Node.js: Mejores Prácticas de Seguridad en 2025",
      excerpt: "Protege tus aplicaciones backend con estas prácticas esenciales de seguridad para Node.js y Express.",
      date: "Enero 2025",
      category: "Seguridad",
      image: "/imgs/img5.jpg",
      link: "https://nodejs.org/en/learn/getting-started/security-best-practices"
    },
    {
      title: "Web Performance: Optimización para la Web Moderna",
      excerpt: "Técnicas avanzadas de optimización web que mejoran el rendimiento y la experiencia del usuario en 2025.",
      date: "Diciembre 2024",
      category: "Performance",
      image: "/imgs/code.png",
      link: "https://web.dev/explore/fast"
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Blog & Noticias</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Artículos y reflexiones sobre desarrollo web y tendencias digitales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-medium to-primary-light">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-primary-dark font-semibold text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-3 hover:text-primary-medium transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-medium font-semibold hover:text-primary-dark transition flex items-center"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
