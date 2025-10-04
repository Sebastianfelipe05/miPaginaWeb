import { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  // Datos de demostración (en producción usarías la API de Instagram)
  const demoPost = [
    {
      id: 1,
      image: "/imgs/publi1.png",
      caption: "🌐✨ En SebaskiTek-X llevamos tu negocio al mundo digital con estilo y tecnología 💻🛒 ⚡ Páginas web y e-commerce rápidos, seguros y a tu medida 🚀",
      likes: 245,
    },
    {
      id: 2,
      image: "/imgs/logo.png",
      caption: "🎨 Diseño moderno + 🔒 seguridad + 🌍 crecimiento digital. ¡Dale vida a tu proyecto digital con nosotros! 💡✨ #WebDesign #Ecommerce",
      likes: 203,
    },
    {
      id: 3,
      image: "/imgs/real.png",
      caption: "💻 Desarrollo web, apps móviles y e-commerce. Tu presencia digital comienza aquí 🚀 #DesarrolloWeb #Innovación",
      likes: 187,
    },
    {
      id: 4,
      image: "/imgs/code.png",
      caption: "🎯 Impulsando negocios con tecnología de vanguardia. Ibagué - Tolima 📲 WhatsApp: +573002816946 #TecnologÍa #EmpresasDigitales",
      likes: 216,
    },
  ];

  useEffect(() => {
    // Aquí irá la integración con la API de Instagram
    // Por ahora usamos datos de demostración
    setPosts(demoPost);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary-medium">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Síguenos en Instagram</h2>
          <p className="text-xl text-accent mb-6">
            @sebaskitek_x
          </p>
          <a
            href="https://instagram.com/sebaskitek_x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-accent transition shadow-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir en Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {post.likes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
