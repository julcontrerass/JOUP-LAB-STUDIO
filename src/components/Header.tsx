import './Header.css';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={scrollToTop}>JOUP LAB & STUDIO</div>
        <nav className="nav">
          <a href="#acerca">Acerca de</a>
          <a href="#servicios">Cursos</a>
          <a href="#servicios-adicionales">Servicios</a>
          <a href="#ciclo-baristas">Ciclo de Baristas</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
