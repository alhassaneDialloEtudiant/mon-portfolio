import { useState } from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/photos/moi.jpg';
import '../styles/Home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  const handleDownload = () => {
    setIsModalOpen(true);
  };

  const confirmDownload = () => {
    const link = document.createElement('a');
    link.href = `${base}cv/monCvAlternanceDialloAlhassane.pdf`;
    link.download = 'monCvAlternanceDialloAlhassane.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
  };

  const cancelDownload = () => {
    setIsModalOpen(false);
  };

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
          <button onClick={handleDownload} className="home__button">
            <i className="fas fa-file-download"></i> Télécharger mon CV
          </button>
        </motion.div>
      </motion.div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <p>Êtes-vous sûr de vouloir télécharger mon CV ?</p>
            <div className="modal__actions">
              <button onClick={confirmDownload} className="modal__button modal__button--confirm">
                Oui
              </button>
              <button onClick={cancelDownload} className="modal__button modal__button--cancel">
                Non
              </button>
            </div>
          </div>
        </div>
      )}

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
