# Guía Completa: Integración de Instagram API

## 📱 Cómo Obtener el Access Token de Instagram

### Opción 1: Instagram Basic Display API (Recomendada para cuentas personales)

#### Paso 1: Crear App en Facebook Developers
1. Ve a [https://developers.facebook.com/](https://developers.facebook.com/)
2. Inicia sesión con tu cuenta de Facebook
3. Haz clic en **"My Apps"** → **"Create App"**
4. Selecciona **"Consumer"** como tipo de app
5. Completa el formulario:
   - **App Name**: Ej. "SebaskiTek-X Portfolio"
   - **Contact Email**: tu email
6. Haz clic en **"Create App"**

#### Paso 2: Configurar Instagram Basic Display
1. En el dashboard de tu app, busca **"Instagram Basic Display"**
2. Haz clic en **"Set Up"**
3. En la sección **"Basic Display"**, haz clic en **"Create New App"**
4. Completa:
   - **Display Name**: SebaskiTek-X
   - **Valid OAuth Redirect URIs**: `https://localhost/`
   - **Deauthorize Callback URL**: `https://localhost/`
   - **Data Deletion Request URL**: `https://localhost/`
5. Guarda los cambios

#### Paso 3: Agregar Usuario de Instagram de Prueba
1. Ve a **"Roles"** → **"Instagram Testers"**
2. Haz clic en **"Add Instagram Testers"**
3. Ingresa tu nombre de usuario de Instagram (@sebaskitek_x)
4. Envía la invitación
5. Ve a tu cuenta de Instagram:
   - Ve a **Configuración** → **Apps y sitios web**
   - Acepta la invitación de Instagram Tester

#### Paso 4: Obtener el Access Token
1. Copia tu **Instagram App ID** y **Instagram App Secret**
2. Construye esta URL (reemplaza `{app-id}` con tu App ID):

```
https://api.instagram.com/oauth/authorize?client_id={app-id}&redirect_uri=https://localhost/&scope=user_profile,user_media&response_type=code
```

3. Pega la URL en tu navegador y autoriza la app
4. Serás redirigido a una URL como: `https://localhost/?code=AQD...`
5. Copia el código que aparece después de `code=`

#### Paso 5: Intercambiar el código por Access Token
Ejecuta este comando en tu terminal (reemplaza los valores):

```bash
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id={app-id} \
  -F client_secret={app-secret} \
  -F grant_type=authorization_code \
  -F redirect_uri=https://localhost/ \
  -F code={code-from-previous-step}
```

Recibirás una respuesta JSON con tu `access_token`.

#### Paso 6: Obtener Long-Lived Token (dura 60 días)
```bash
curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret={app-secret}&access_token={short-lived-token}"
```

---

## 🔧 Implementación en el Código

### 1. Instalar Axios
```bash
npm install axios
```

### 2. Crear archivo `.env`
En la raíz del proyecto:

```env
VITE_INSTAGRAM_ACCESS_TOKEN=tu_long_lived_token_aqui
```

### 3. Actualizar `InstagramFeed.jsx`

```javascript
import { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

        if (!accessToken) {
          throw new Error('Access token no configurado');
        }

        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=4`
        );

        const postsData = response.data.data.map(post => ({
          id: post.id,
          image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
          caption: post.caption || '',
          permalink: post.permalink,
          likes: Math.floor(Math.random() * 300) + 100, // Las likes no están disponibles en Basic Display
        }));

        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setError(error.message);
        setLoading(false);

        // Usar datos de demostración si falla
        setPosts(demoPost);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Datos de demostración (fallback)
  const demoPost = [
    {
      id: 1,
      image: "/imgs/imagen.png",
      caption: "🚀 Nuevo proyecto en desarrollo! #webdev #react",
      likes: 145,
      permalink: "https://instagram.com/sebaskitek_x"
    },
    // ... más posts demo
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary-medium">
        <div className="container mx-auto px-6 text-center text-white">
          <p>Cargando publicaciones...</p>
        </div>
      </section>
    );
  }

  // Resto del componente...
};
```

---

## 🔄 Renovar el Access Token Automáticamente

Los tokens de larga duración expiran en 60 días. Puedes renovarlos antes:

```bash
curl -i -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-token}"
```

### Script de Renovación Automática

Crea un archivo `refresh-token.js`:

```javascript
import axios from 'axios';
import fs from 'fs';

const refreshInstagramToken = async () => {
  try {
    const currentToken = process.env.VITE_INSTAGRAM_ACCESS_TOKEN;

    const response = await axios.get(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    );

    const newToken = response.data.access_token;

    // Actualizar el archivo .env
    const envContent = fs.readFileSync('.env', 'utf8');
    const updatedContent = envContent.replace(
      /VITE_INSTAGRAM_ACCESS_TOKEN=.*/,
      `VITE_INSTAGRAM_ACCESS_TOKEN=${newToken}`
    );

    fs.writeFileSync('.env', updatedContent);

    console.log('✅ Token renovado exitosamente');
    console.log('Expira en:', response.data.expires_in, 'segundos');
  } catch (error) {
    console.error('❌ Error renovando token:', error.message);
  }
};

refreshInstagramToken();
```

Ejecuta cada 50 días:
```bash
node refresh-token.js
```

---

## 📊 Alternativa: Usar Instagram Graph API (Para cuentas Business)

Si conviertes tu cuenta a Business/Creator:

1. Vincula tu Instagram a una página de Facebook
2. Usa **Instagram Graph API** en vez de Basic Display
3. Obtienes más datos (likes, comments, insights)

Endpoint:
```
https://graph.instagram.com/{ig-user-id}/media?fields=id,caption,media_url,media_type,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token={access-token}
```

---

## ⚠️ Notas Importantes

- **Rate Limits**: 200 llamadas/hora por usuario
- **Token Expiration**: Tokens de larga duración duran 60 días
- **HTTPS Required**: En producción, necesitas HTTPS
- **Privacidad**: Solo puedes acceder a tus propios posts
- **Media Types**: Maneja diferentes tipos (IMAGE, VIDEO, CAROUSEL_ALBUM)

---

## 🚀 Despliegue a Producción

1. Actualiza las URLs de callback en Facebook Developers
2. Configura las variables de entorno en tu hosting:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
3. Asegúrate de que el dominio tenga HTTPS

---

## 🔗 Enlaces Útiles

- [Instagram Basic Display API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Graph API Docs](https://developers.facebook.com/docs/instagram-api)
- [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
