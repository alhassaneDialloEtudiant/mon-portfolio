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
          <h1>
            Bienvenue sur mon <span className="highlight">portfolio</span>
          </h1>
          <p>
            Étudiant en <strong>Master MIAGE</strong>, je conçois des solutions web performantes
            et je me spécialise en <strong>data</strong> et <strong>technologies modernes</strong>.
          </p>
          <a href="/cv.pdf" download className="home__button">
            <i className="fas fa-file-download"></i> Télécharger mon CV
          </a>
        </div>
      </div>

      {/* Objectif pro */}
      <section className="vision">
        <h2>Mon objectif</h2>
        <p>
          Rejoindre une équipe dynamique en alternance pour mettre mes compétences au service de projets innovants,
          tout en continuant à progresser en développement web et en ingénierie des données.
        </p>
      </section>

      {/* Qualités perso */}
      <section className="values">
        <h2>Ce qui me définit</h2>
        <ul className="values__list">
          <li>💡 Curieux et passionné</li>
          <li>🤝 Travail en équipe</li>
          <li>🚀 Orienté résultats</li>
          <li>🎯 Sens de l’analyse</li>
        </ul>
      </section>

      {/* Mini stats */}
      <section className="stats">
        <div className="stats__box">
          <h3>5+</h3>
          <p>projets réalisés</p>
        </div>
        <div className="stats__box">
          <h3>2 ans</h3>
          <p>de formation en informatique</p>
        </div>
        <div className="stats__box">
          <h3>100%</h3>
          <p>motivation</p>
        </div>
      </section>

      {/* Citation */}
      <section className="quote">
        <blockquote>
          “Le meilleur moyen de prédire l’avenir, c’est de le créer.” <br />
          <span>– Peter Drucker</span>
        </blockquote>
      </section>
    </section>
  );
}

export default Home;
