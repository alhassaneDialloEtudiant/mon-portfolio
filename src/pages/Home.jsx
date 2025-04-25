import photo from '../assets/photos/wc0tnh8i.png';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__left">
          <img src={photo} alt="Moi" className="home__photo" />
        </div>
        <div className="home__right">
          <h1>Bienvenue sur mon <span className="highlight">portfolio</span></h1>
          <p>
            Je suis étudiant en <strong>MIAGE</strong> et passionné par le <strong>développement web</strong>, la <strong>data</strong> et les <strong>technologies modernes</strong>.
          </p>
          <div className="home__buttons">
            <a href="/cv.pdf" download className="home__button">
              📄 Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
