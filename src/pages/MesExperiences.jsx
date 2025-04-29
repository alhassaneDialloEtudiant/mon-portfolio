import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesExperiences.css';

function MesExperiences() {
  const experiences = [
    {
      annee: " 📅 Mars 2025 – Aujourd'hui",
      titre: " 🧑‍💻 Développeur Frontend – Projet Djoni Djoni ",
      lieu: "(Projet personnel, travail en équipe)",
      description: [
        "Application web de covoiturage interurbain conçue pour simplifier les trajets entre villes.",
        "✨ Réalisations principales :",
        "• Intégration des maquettes Figma en interfaces web responsives avec React/Next.js et Tailwind CSS.",
        "• Développement de composants dynamiques (formulaires, listes de trajets, modales...) avec gestion d'état.",
        "• Intégration des API REST fournies par l’équipe backend (authentification, trajets, réservations).",
        "• Tests utilisateurs frontend et ajustements UX/UI selon les feedbacks."
      ],
      competences: ["Vscode", "Git","Github","React.js", "Node.js", "express.js","Html/CSS", "Figma", "REST API", "Gestion de projet"]
    },
    {
      annee: " 📅 Janvier – Avril 2025",
      titre: "🧑‍💻 Développeur Web – Plateforme Mon Master",
      lieu: "Université d’Évry Paris-Saclay – Projet encadré par notre enseignant en Gestion de Projet Informatique-travail en équipe",
            description: [
        "Développement d’une plateforme simulant le système national de candidature en Master.",
        "✨ Missions réalisées :",
        "• Conception et développement du frontend en React.js pour trois espaces distincts :",
        "  ➤ Espace Étudiant (création de compte, soumission de candidature, classement de masters).",
        "  ➤ Espace Administrateur Université (gestion des programmes, critères d’admission).",
        "  ➤ Espace Administrateur Général (gestion des utilisateurs et du système global).",
        "• Mise en place du backend en Node.js/Express avec une base MySQL via XAMPP.",
        "• Développement de fonctionnalités clés : création de compte, consultation de catalogues, classement automatique des candidatures, attribution des places."
      ],
      competences: ["Vscode", "Git","Github","React.js", "Node.js", "Express.js", "MySQL", "XAMPP", "REST API", "Gestion de projet"]
    },
    {
      annee: " 📅 Décembre 2024 - En cours (2025)",
      titre: "Développeur FullStack — Site ONG 'Mêmes Droits pour les Enfants'",
      lieu: "Projet personnel – ONG basée en Guinée",
            description: [
        "Développement d’un site web complet pour une ONG guinéenne œuvrant pour les droits des enfants.",
        "✨ Missions réalisées :",
        "• Conception de l’architecture du site et des interfaces avec React.js.",
        "• Développement du backend Express.js pour la gestion des contenus, des membres et des actualités.",
        "• Mise en place de la base MySQL et hébergement local avec XAMPP.",
        "• Travail en cours : espace d’administration sécurisé, formulaire de contact, et actualités dynamiques."
      ],
      competences: ["Vscode", "Git","Github","React.js", "Node.js", "Express.js", "MySQL", "XAMPP", "REST API"]
    },
    {
      annee: "Janvier 2023 – Aujourd'hui",
      titre: "Secrétaire — ONG 'Mêmes Droits pour les Enfants'",
      lieu: "Guinée",
            description: [
        "Membre actif de l’ONG œuvrant pour la défense des droits des enfants en Guinée.",
        "✨ Missions réalisées :",
        "• Gestion administrative courante : rédaction de documents, classement, suivi des courriers.",
        "• Communication interne : rédaction de comptes rendus, diffusion des informations auprès des membres.",
        "• Organisation et planification de réunions associatives.",
        "• Soutien logistique lors d’événements de sensibilisation ou ateliers."
      ],
      competences: ["Gestion administrative", "Communication", "Organisation", "Engagement associatif"]
    },
    {
      annee: "Novembre 2023 – Aujourd'hui",
      titre: "Serveur — Restaurant La Boucherie",
      lieu: "les ulis , France",
      description: [
        "Prise de commandes, saisie rigoureuse, service en salle.",
        "Gestion du contact client et du service rapide."
      ],
      competences: ["Rigueur", "Service client", "Travail en équipe"]
    },
    {
      annee: "Juillet – Août 2023",
      titre: "👨‍🏫 Stagiaire Formateur & Développeur Web",
      lieu: "Cabinet OMC, Guinée",
       description: [
        "Stage axé sur la création de sites web WordPress et la transmission de compétences numériques.",
        "✨ Missions réalisées :",
        "• Création, personnalisation et mise à jour de sites web avec WordPress (thèmes, plugins, contenus).",
        "• Formation de jeunes à la gestion de contenu, à l’utilisation de WordPress et aux bonnes pratiques du web.",
        "• Assistance technique et accompagnement lors de la prise en main des outils."
      ],
      competences: ["WordPress", "Formation", "Pédagogie", "CMS", "Gestion de contenus"]
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
