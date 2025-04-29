import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MonProjet.css';

function MonProjet() {
  const [filter, setFilter] = useState('all');

  const projets = [
    {
      titre: "💼 mon-portfolio",
      description: "Développement de mon portfolio personnel pour présenter mes projets, compétences et parcours.Créé avec React.js, ce site met en valeur mes expériences, mes projets web et mes travaux en data, avec une interface responsive et dynamique.",
      technologies: "React.js, CSS, React Router, Framer Motion",
      categorie: "web",
      github: "https://alhassanedialloetudiant.github.io/mon-portfolio/",
      demo: ""
    },
        {
      titre: "Site ONG - Mêmes Droits pour les Enfants",
      description: [
        "Création d’un site vitrine pour une ONG locale basée en Guinée.",
        "✨ Développement fullstack d’une plateforme web destinée à améliorer la visibilité d’une ONG engagée dans la défense des droits des enfants.",
        "• Le site comprend une structure frontend dynamique, un backend avec gestion des données, et une base MySQL hébergée en local."
      ].join(" "),
      technologies: "React, Express, MySQL, XAMPP",
      categorie: "web",
      github: "https://github.com/diallo/ong-droits-enfants",
      demo: ""
    },
    {
      titre: "Plateforme Mon Master (projet académique)",
      description: "Simulation de gestion de candidatures en ligne.",
      technologies: "React, Node.js, Express, MySQL",
      categorie: "web",
      github: "https://github.com/alhassaneDialloEtudiant/projetMonMasterAMR.git",
      demo: ""
    },
    {
      titre: "Simulateur de calcul de crédit",
      description: "Création d'interfaces responsives React à partir de maquettes Figma.",
      technologies: "html, CSS, JavaScript",
      categorie: "web",
      github: "https://github.com/alhassaneDialloEtudiant/SimulateurDeCalcul.git",
      demo: ""
    }
  ];

  const handleFilterChange = (categorie) => {
    setFilter(categorie);
  };

  const filteredProjets = filter === 'all'
    ? projets
    : projets.filter(projet => projet.categorie === filter);

  return (
    <div className="projet-container">
      <motion.h3 
        className="projet-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Projets
      </motion.h3>

      <motion.p 
        className="projet-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Voici quelques projets personnels et académiques réalisés pour mettre en pratique mes compétences.
      </motion.p>

      {/* Boutons de filtre */}
      <div className="filter-buttons">
        {["all", "web", "data", "bi"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => handleFilterChange(cat)}
          >
            {cat === "all" ? "Tous" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projets filtrés avec animation */}
      <div className="projets-grid">
        <AnimatePresence>
          {filteredProjets.map((projet, index) => (
            <motion.div 
              key={index}
              className="projet-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <h4>{projet.titre}</h4>
              <p>{projet.description}</p>
              <div className="tech-stack">{projet.technologies}</div>
              <div className="projet-links">
                {projet.github && <a href={projet.github} target="_blank" rel="noreferrer">GitHub</a>}
                {projet.demo ? (
                  <a href={projet.demo} target="_blank" rel="noreferrer">Démo</a>
                ) : (
                  <span className="disabled">Pas de Démo</span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MonProjet;
