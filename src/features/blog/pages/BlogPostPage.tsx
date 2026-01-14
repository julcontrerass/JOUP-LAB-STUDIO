import { useParams, useNavigate } from 'react-router-dom';
import { Header, Footer } from '@/shared/components/layout';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/blog-post.css';
import tazaDeRecuerdoImg from '../assets/escritura/tazaderecuerdo.jpg';
import maferImg from '../assets/escritura/maria.jpg';
import gonzaloImg from '../assets/entrevistas/gonzalo.jpg';
import gonza2Img from '../assets/entrevistas/gonza2.png';
import ileanaImg from '../assets/entrevistas/ileana.jpg';
import ileana2Img from '../assets/entrevistas/ileana2.png';
import ileana3Img from '../assets/entrevistas/ileana3.png';
import danielaImg from '../assets/entrevistas/daniela.jpg';
import daniela1Img from '../assets/entrevistas/daniela1.png';
import daniela2Img from '../assets/entrevistas/daniela2.png';
import daniela4Img from '../assets/entrevistas/daniela4.png';

interface BlogPost {
  title: string;
  date: string;
  image: string;
  authorName: string;
  authorImage: string;
  authorLink: string;
  additionalImages?: string[];
  content: string;
}

type BlogPostsType = {
  [key: string]: BlogPost;
}

const BLOG_POSTS: BlogPostsType = {
  'daniela-rojas': {
    title: 'Ciclo de Baristas: Daniela Rojas "La Kali"',
    date: 'Oct 17, 2025',
    image: danielaImg,
    authorName: '',
    authorImage: '',
    authorLink: '',
    additionalImages: [daniela1Img, daniela2Img, daniela4Img],
    content: `En esta nueva entrega del Ciclo de Baristas, conocemos a Daniela Rojas [@dani.caliii](https://www.instagram.com/dani.caliii/) —una barista que lleva su trabajo con una mirada sensible y consciente—, convencida de que el barismo es una forma de poner amor en lo cotidiano.

"La Kali" nos habla de su recorrido, de los maestros que la marcaron, de cómo del caos nació su pasión, y de esa búsqueda constante por conectar con lo que hace desde el corazón.

Porque detrás de cada taza, hay historias que merecen ser contadas.

Y esta, sin dudas, es una de ellas.

**¿CUÁL FUE TU PRIMER RECUERDO SIGNIFICATIVO CON EL CAFÉ Y CÓMO MARCÓ TU INTERÉS EN ESTE MUNDO?**

Yo venía de trabajar muchos años en gastronomía, trabajo en gastronomía desde que tengo 15 y cuando entré a trabajar como camarera en una cafetería de especialidad me di cuenta de que había algo distinto. El café olía diferente, se sentía diferente, se llamaba diferente y entonces yo empecé sinceramente a romperle las pelotas al barista que estaba ahí en ese momento, se llama Mariano, pero yo le decía "Tormenta de Facha", lo amo. A Mariano le dije que me enseñara, que yo quería aprender, ¿qué era eso? ¿Por qué se veía distinto y por qué sabía distinto? ¿Qué era lo que pasaba? Y él hizo un ejercicio conmigo que yo hoy en día lo hago en clase, que es separar el espresso y en esa separación del espresso me di cuenta de que había algo ácido, algo amargo, había algo más espeso, otras cosas menos espesas, como probarlo. De esa forma fue como "¡wow! ¿Qué es todo esto y por qué no sé todo esto?".

**¿QUÉ SIGNIFICA PARA VOS SER BARISTA, MÁS ALLÁ DE PREPARAR UN CAFÉ?**

Yo siempre he pensado que en esta vida todo se tiene que hacer con amor, que siempre hay espacio para el amor, que es lo que nos mueve y siento que el barismo para mí es eso, es poner mi amor en algo y que alguien lo pueda disfrutar.

**¿QUÉ REPRESENTA PARA VOS LA CALIBRACIÓN Y LA PRECISIÓN EN LA BARRA?**

No si todo, pero sí es gran parte del trabajo como un barista, porque entre más preciso seas, entre mejor conozcas tu café, entre más en detalle entres, vas a tener un mejor desempeño y vas a ser más rápido, más ágil y dar un mejor servicio y un mejor café.

**¿TENÉS UNA FILOSOFÍA PERSONAL DE CÓMO DEBERÍA VIVIRSE Y COMPARTIRSE EL CAFÉ DE ESPECIALIDAD?**

No, solamente mi filosofía es una filosofía de vida en general. Como lo dije, me parece que siempre tiene que haber espacio para el amor, y creo que todo lo que uno haga lo tiene que hacer con amor. El café de especialidad tiene eso lindo.`
  },
  'ileana-vilches': {
    title: 'Ciclo de Baristas: Ileana Vilches',
    date: 'Oct 6, 2025',
    image: ileanaImg,
    authorName: '',
    authorImage: '',
    authorLink: '',
    additionalImages: [ileana2Img, ileana3Img],
    content: `Hoy compartimos la historia de Ileana Vilches [@vilxhes](https://www.instagram.com/vilxhes/), una profesional que encarna la sensibilidad, la empatía y la precisión que tanto admiramos en el oficio del barismo.

Desde su lugar, Ileana demuestra que el café es mucho más que una técnica: es una forma de comunicación, una manera de vincularse con el otro y una búsqueda constante por transmitir calidez a través de la taza.

Su mirada humana, su modo de trabajar y su forma de expresarse reflejan algo que en JOUP COFFEE valoramos profundamente:

la hospitalidad como lenguaje, el servicio como arte y el conocimiento como puente entre las personas.

Este ciclo existe para visibilizar eso —a quienes hacen posible que el café de especialidad siga creciendo—, mostrando no solo la bebida que llega a la mesa, sino también la pasión, la dedicación y la filosofía que hay detrás de cada barista.

La pueden encontrar detrás de la barra de [@standalone.lab](https://www.instagram.com/standalone.lab/)

**Si tuvieras que describir en una frase cómo comenzó tu historia con el café, ¿cuál sería?**

–Busqueda y encuentro, estoy segura que seria esa.

**¿Cómo fue tu primera experiencia real trabajando en una barra y qué te enseñó de vos misma?**

–Desastrosa al principio, con muchísimo miedo, pero me enseñó que la resiliencia y amar lo que haces te puede llevar a muchísimos lados y enseñarte mucho más.

**¿Cómo describirías tu relación con los métodos de preparación (espresso, filtrados, otros)?**

–Es como una convivencia, algunos se aman, otros se aprenden a amar.

**¿Si pudieras elegir un solo método para transmitir lo que el café significa para vos, cuál sería y por qué?**

–Cualquier método de percolación de goteo siento que refleja mucho la sensibilidad del barista...

**Si el café pudiera contar tu historia, ¿qué diría de vos?**

–Hablaría de mucha información, mucha complejidad, mucho esfuerzo, mucho logro y mucha dedicación.`
  },
  'gonzalo-andrada': {
    title: 'Ciclo de Baristas: Gonzalo Andrada',
    date: 'Oct 2, 2025',
    image: gonzaloImg,
    authorName: '',
    authorImage: '',
    authorLink: '',
    additionalImages: [gonza2Img],
    content: `Hoy compartimos la historia de Gonzalo [@ggonza.adr](https://www.instagram.com/ggonza.adr/), quien desde su lugar en [@nano.feca](https://www.instagram.com/nano.feca/) demuestra que el café es mucho más que una bebida: es dedicación, aprendizaje y compromiso con cada detalle detrás de barra.

Su manera de trabajar refleja lo que buscamos destacar en este ciclo: la pasión por un oficio que no siempre se ve, pero que define la calidad de la experiencia que llega a la mesa.

**¿Cuál fue tu primera experiencia trabajando en una barra?**

Caotica, no entendía bien como sacar café, ni como emulsionar la Leche pero iba todos los días con ganas de aprender y meterme un poco más en este mundo.

**¿Qué hitos o momentos marcaron tu carrera como barista?**

Las primeras catas de cafe me llevaron a entender las complejidades que se encuentran en el café y eso fue mi punto de partida para volverme más profesional.

**¿Qué sueños o proyectos tenés dentro del mundo del café?**

Al principio como muchos era tener una cafetería propia, actualmente mis metas relacionadas al café son aprender a tostar y relacionarme más con el control de calidad.
Y mi sueño es poder ir a una finca a seguir capacitando desde el origen.

**¿Cuál es tu método de preparación favorito y por qué?**

Actualmente los filtrados están siendo mi método preferidos, es ritualistico prepararlos y me ayuda arrancar bien el turno.`
  },
  'tazas-de-recuerdos': {
    title: 'Tazas de recuerdos',
    date: 'Oct 29, 2025',
    image: tazaDeRecuerdoImg,
    authorName: 'Mafer Reyes',
    authorImage: maferImg,
    authorLink: 'https://www.instagram.com/mafespresso/',
    additionalImages: [tazaDeRecuerdoImg],
    content: `Catar café es una forma de recordar. Lo que percibimos en cada taza de café no es solo su origen y proceso, sino el despertar de memorias personales y colectivas.

Una cata de café –o cupping– es el método estandarizado en la industria para evaluar la calidad del café a través del gusto y olfato en comparación a otros lotes. Suele realizarse entre tostadores, caficultores, baristas y hasta en espacios de talleres o asesorías. La cata consta de un seguimiento de pasos a cumplir. El café es molido en una molienda específica, se vierte agua caliente, se rompe la costra, y se prueba a sorbos con cucharadas. En cada etapa, el aroma es clave: se huele antes, durante y después.

Al catar, podemos experimentar distintas sensaciones como la acidez, dulzor, aspereza, suavidad, y entre otros. Cada una nos guía a encontrar e identificar las características que posee el café y reconocer sus notas. Aún así, la experiencia no es la misma para todos. Para comprender mejor las conexiones halladas, el aroma que se distingue debe resultar familiar, conocido. Hay cafés con perfiles frutales, florales o terrosos, y al principio el café solo huele a café — así de simple —. Al adentrarse en el mundo de la especialidad, todo eso cambia. Las papilas gustativas se amplían y reconocen más sabores, como el olfato también logra ser más intuitivo y preciso, pues al obtener una gran familia de varietales y distintos procesos, la diferencia de cada grano es reconocible y entendido. Durante la cata, la persona huele, prueba y busca una nota a definir. Busca un recuerdo para identificar. En ese ejercicio de memoria sensorial, se intenta conectar el sabor del presente con la historia de quien lo perciba.

¿Y qué ocurre cuando el café no nos recuerda a nada?

"¿Es que acaso no siento? ¿No conozco?"

Es una situación mucho más común de lo que parece, sobre todo al comenzar a catar. Nuestros sentidos necesitan tiempo y práctica para desarrollarse y lograr unir esas memorias sensoriales. Inicialmente, los aromas pueden parecer difíciles de asociar a algo en concreto y los sabores no pasan más de un sutil dulzor o un fuerte amargor, pero con la repetición y la atención dedicadas, el cerebro puede construir su propio archivo de referencias e identificar ciertos patrones en cada café.

La paciencia es una capacidad importante a desarrollar consigo mismo. El cerebro está tratando de aprender y explicar a la vez lo que está sucediendo en los granos que se evalúan cada vez que tomas un café distinto. Por ello, es fundamental compartir opiniones con quienes participan en la cata, para ayudar a interpretar y unir recuerdos que pueden mantenerse escondidos o desconocidos. Ciertas personas han probado un sabor que otros no han tenido oportunidad; por lo tanto, es complicado definir algo que aún no se conoce. Se aprende a distinguir, comparar y reconocer.

No recordar nada no significa no sentir. Es estar en el proceso de aprender a interpretar.`
  }
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? BLOG_POSTS[slug as keyof typeof BLOG_POSTS] : null;

  if (!post) {
    return (
      <div className="blog-post-page">
        <Header />
        <main className="blog-post-main">
          <div className="blog-post-not-found">
            <h1>Artículo no encontrado</h1>
            <button onClick={() => navigate('/blog')}>Volver al blog</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Header />
      <main className="blog-post-main">
        <div className="blog-post-container">
          <button className="blog-post-back" onClick={() => navigate('/blog')}>
            <FaArrowLeft /> Volver al blog
          </button>

          <article className="blog-post-article">
            <header className="blog-post-header">
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span className="blog-post-date">{post.date}</span>
                {post.authorName && (
                  <div className="blog-post-author">
                    <img src={post.authorImage} alt={post.authorName} className="blog-post-author-image" />
                    {post.authorLink ? (
                      <a
                        href={post.authorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-post-author-name blog-post-author-link"
                      >
                        {post.authorName}
                      </a>
                    ) : (
                      <span className="blog-post-author-name">{post.authorName}</span>
                    )}
                  </div>
                )}
              </div>
            </header>

            <div className="blog-post-content">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Detectar si es una pregunta destacada
                if (paragraph.startsWith('¿Y qué ocurre cuando el café no nos recuerda a nada?')) {
                  return <div key={index} className="blog-post-highlight-question">{paragraph}</div>;
                }
                if (paragraph.startsWith('"¿Es que acaso no siento?')) {
                  return <div key={index} className="blog-post-quote">{paragraph}</div>;
                }
                // Detectar si es una pregunta de entrevista (empieza con **)
                if (paragraph.startsWith('**')) {
                  const cleanText = paragraph.replace(/\*\*/g, '');
                  return <h3 key={index} className="blog-post-interview-question">{cleanText}</h3>;
                }
                // Detectar enlaces en el texto
                if (paragraph.includes('[@')) {
                  const parts = paragraph.split(/(\[@[^\]]+\]\([^)]+\))/g);
                  return (
                    <p key={index}>
                      {parts.map((part, i) => {
                        const linkMatch = part.match(/\[@([^\]]+)\]\(([^)]+)\)/);
                        if (linkMatch) {
                          return (
                            <a
                              key={i}
                              href={linkMatch[2]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="blog-post-inline-link"
                            >
                              @{linkMatch[1]}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>

            {post.additionalImages && post.additionalImages.length > 0 && (
              <div className="blog-post-additional-images">
                {post.additionalImages.map((img, index) => (
                  <div key={index} className="blog-post-additional-image">
                    <img src={img} alt={`${post.title} - ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
