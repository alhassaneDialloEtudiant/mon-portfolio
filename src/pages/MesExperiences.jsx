import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesExperiences.css';

function MesExperiences() {
  const experiences = [
    {
      annee: "Mars 2025 – Aujourd'hui",
      titre: "Développeur Frontend — Projet Djoni Djoni",
      lieu: "Projet personnel",
      description: [
        "Création d'interfaces responsives à partir de maquettes Figma.",
        "Développement de composants dynamiques en React.",
        "Collaboration avec l'équipe backend pour l'intégration des API."
      ],
      competences: ["React.js", "Figma", "API Integration"]
    },
    {
      annee: "Janvier – Avril 2025",
      titre: "Développeur Web — Plateforme Mon Master",
      lieu: "Université d'Évry Paris-Saclay",
      description: [
        "Développement d'un site simulant la plateforme Mon Master.",
        "Création du frontend en React.js et du backend en Node.js avec MySQL."
      ],
      competences: ["React.js", "Node.js", "Express.js", "MySQL", "XAMPP"]
    },
    {
      annee: "En cours (2025)",
      titre: "Développeur FullStack — Site ONG 'Mêmes Droits pour les Enfants'",
      lieu: "Projet personnel",
      description: [
        "Conception d'un site web complet (frontend React, backend Express + MySQL)."
      ],
      competences: ["React.js", "Express.js", "MySQL", "XAMPP"]
    },
    {
      annee: "Janvier 2023 – Aujourd'hui",
      titre: "Secrétaire — ONG 'Mêmes Droits pour les Enfants'",
      lieu: "Guinée",
      description: [
        "Gestion administrative, communication interne, organisation de réunions."
      ],
      competences: ["Gestion administrative", "Communication", "Organisation"]
    },
    {
      annee: "Novembre 2023 – Aujourd'hui",
      titre: "Serveur — Restaurant La Boucherie",
      lieu: "France",
      description: [
        "Prise de commandes, saisie rigoureuse, service en salle.",
        "Gestion du contact client et du service rapide."
      ],
      competences: ["Rigueur", "Service client", "Travail en équipe"]
    },
    {
      annee: "Juillet – Août 2023",
      titre: "Stagiaire Formateur & Développeur Web",
      lieu: "Cabinet OMC, Guinée",
      description: [
        "Création et mise à jour de sites web sous WordPress.",
        "Formation de jeunes à l’utilisation de WordPress."
      ],
      competences: ["WordPress", "Formation", "Gestion de contenus"]
    },
  ];

  return (
    <div className="experiences-container">
      <motion.h3
        className="experiences-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes expériences
      </motion.h3>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <span className="timeline-date">{exp.annee}</span>
              <h4>{exp.titre}</h4>
              <span className="timeline-lieu">{exp.lieu}</span>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="competences-tags">
                {exp.competences.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesExperiences;
