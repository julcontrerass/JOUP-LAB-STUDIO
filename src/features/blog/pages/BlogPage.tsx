import { useTranslation } from 'react-i18next';
import { Header, Footer } from '@/shared/components/layout';
import BlogHero from '../components/BlogHero';
import BlogTabs from '../components/BlogTabs';
import '../styles/blog-page.css';

import tazaDeRecuerdoImg from '../assets/escritura/tazaderecuerdo.jpg';
import maferImg from '../assets/escritura/maria.jpg';
import gonzaloImg from '../assets/entrevistas/gonzalo.jpg';
import ileanaImg from '../assets/entrevistas/ileana.jpg';
import danielaImg from '../assets/entrevistas/daniela.jpg';

// Datos temporales de ejemplo - estos se reemplazarán con datos reales más adelante
const SAMPLE_POSTS = {
  escrituras: [
    {
      id: '1',
      title: 'Tazas de recuerdos',
      description: 'Catar café es una forma de recordar. Lo que percibimos en cada taza de café no es solo su origen y proceso, sino el despertar de...',
      date: 'Oct 29, 2025',
      image: tazaDeRecuerdoImg,
      authorName: 'Mafer Reyes',
      authorImage: maferImg,
      slug: 'tazas-de-recuerdos'
    }
  ],
  entrevistas: [
    {
      id: '6',
      title: 'Ciclo de Baristas: Daniela Rojas "La Kali"',
      description: 'En esta nueva entrega del Ciclo de Baristas, conocemos a Daniela Rojas [@dani.caliii](https://www.instagram.com/dani.caliii/) —una barista que lleva su trabajo con una mirada sensible y consciente—, convencida de que el barismo es una forma de poner amor en lo cotidiano. "La Kali" nos habla de su recorrido, de los maestros que la marcaron, de cómo del caos nació su pasión, y de esa búsqueda constante por conectar con lo que hace desde el corazón. Porque detrás de cada taza, hay historias que merecen ser contadas. Y esta, sin dudas, es una de ellas.',
      date: 'Nov 20, 2025',
      image: danielaImg,
      authorName: '',
      authorImage: '',
      slug: 'daniela-rojas'
    },
    {
      id: '5',
      title: 'Ciclo de Baristas: Ileana Vilches',
      description: 'Hoy compartimos la historia de Ileana Vilches [@vilxhes](https://www.instagram.com/vilxhes/), una profesional que encarna la sensibilidad, la empatía y la precisión que tanto admiramos en el oficio del barismo. Desde su lugar, Ileana demuestra que el café es mucho más que una técnica: es una forma de comunicación, una manera de vincularse con el otro y una búsqueda constante por transmitir calidez a través de la taza. La pueden encontrar detrás de la barra de [@standalone.lab](https://www.instagram.com/standalone.lab/)',
      date: 'Nov 15, 2025',
      image: ileanaImg,
      authorName: '',
      authorImage: '',
      slug: 'ileana-vilches'
    },
    {
      id: '4',
      title: 'Ciclo de Baristas: Gonzalo Andrada',
      description: 'Hoy compartimos la historia de Gonzalo [@ggonza.adr](https://www.instagram.com/ggonza.adr/), quien desde su lugar en [@nano.feca](https://www.instagram.com/nano.feca/) demuestra que el café es mucho más que una bebida: es dedicación, aprendizaje y compromiso con cada detalle detrás de barra. Su manera de trabajar refleja lo que buscamos destacar en este ciclo: la pasión por un oficio que no siempre se ve, pero que define la calidad de la experiencia que llega a la mesa.',
      date: 'Nov 10, 2025',
      image: gonzaloImg,
      authorName: '',
      authorImage: '',
      slug: 'gonzalo-andrada'
    }
  ]
};

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Header />
      <main className="blog-main">
        <BlogHero />
        <div className="blog-content">
          <BlogTabs
            escrituras={SAMPLE_POSTS.escrituras}
            entrevistas={SAMPLE_POSTS.entrevistas}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
