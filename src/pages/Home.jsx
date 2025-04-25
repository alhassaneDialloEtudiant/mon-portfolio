import { motion } from 'framer-motion';
import photo from '../assets/photos/wc0tnh8i.png';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home" aria-label="Accueil du portfolio">
      <motion.div 
        className="home__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="home__left" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
          <img src={photo} alt="Photo de Diallo Alhassane" className="home__photo" />
        </motion.div>

        <motion.div className="home__right" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
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
        </motion.div>
      </motion.div>

      {/* Objectif pro */}
      <motion.section 
        className="vision"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Mon objectif</h2>
        <p>
          Rejoindre une équipe dynamique en alternance pour mettre mes compétences au service de projets innovants,
          tout en continuant à progresser en développement web et en ingénierie des données.
        </p>
      </motion.section>

      {/* Qualités perso */}
      <motion.section 
        className="values"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Ce qui me définit</h2>
        <ul className="values__list">
          <li>💡 Curieux et passionné</li>
          <li>🤝 Travail en équipe</li>
          <li>🚀 Orienté résultats</li>
          <li>🎯 Sens de l’analyse</li>
        </ul>
      </motion.section>

      {/* Mini stats */}
      <motion.section 
        className="stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
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
      </motion.section>

      {/* Citation */}
      <motion.section 
        className="quote"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <blockquote>
          “Le meilleur moyen de prédire l’avenir, c’est de le créer.” <br />
          <span>– Peter Drucker</span>
        </blockquote>
      </motion.section>
    </section>
  );
}

export default Home;
