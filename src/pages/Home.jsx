import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import photo from '../assets/photos/moi.jpg';
import '../styles/Home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  // Gestion du téléchargement du CV
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

  // Navigation vers d'autres pages
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <section className="home" aria-label="Accueil du portfolio">
      {/* Section principale */}
      <motion.div
        className="home__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Photo de profil */}
        <motion.div
          className="home__left"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={photo} alt="Photo de Diallo Alhassane" className="home__photo" />
        </motion.div>

        {/* Texte d'introduction */}
        <motion.div
          className="home__right"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Bienvenue sur mon <span className="highlight">portfolio</span>
          </h1>
          <p>Étudiant en L3 Informatique, parcours MIAGE à l'Université d'Évry Paris-Saclay, et admis en M1 MIAGE en alternance, je me spécialise en tant que <strong>développeur Full-stack </strong>, avec des compétences en développement web (front-end et back-end), <strong>big data</strong>, <strong>data engineering</strong>, bases de données, gestion des systèmes d'information et <strong>technologies modernes </strong>.</p>
          <button onClick={handleDownload} className="home__button">
            <i className="fas fa-file-download"></i> Télécharger mon CV
          </button>
        </motion.div>
      </motion.div>

      {/* Modal de confirmation pour le téléchargement */}
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

      {/* Section Vision */}
      <motion.section
        className="vision"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Construire, apprendre, innover</h2>
        <p>
          Chaque projet est pour moi une opportunité de progresser, de collaborer et de transformer des idées en solutions concrètes.
        </p>
      </motion.section>

      {/* Section Valeurs */}
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

      {/* Section Navigation */}
      <motion.section
        className="navigation-shortcuts"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              when: 'beforeChildren',
              duration: 0.8,
            },
          },
        }}
      >
        <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          Explorez mon univers
        </motion.h2>

        <div className="navigation-buttons">
          <motion.button
            className="nav-button"
            onClick={() => goToPage('/apropos')}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Qui suis-je ?
          </motion.button>

          <motion.button
            className="nav-button"
            onClick={() => goToPage('/projects')}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Mes Réalisations
          </motion.button>

          <motion.button
            className="nav-button"
            onClick={() => goToPage('/agence')}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Mon Agence
          </motion.button>
        </div>
      </motion.section>

      {/* Section Citation */}
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