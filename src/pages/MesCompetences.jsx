import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MesCompetences.css'; // Assurez-vous d'importer le fichier CSS pour le style  de la page

function MesCompetences() {
  const categories = [
    {
      titre: "Développement web",
      competences: [
        { nom: "HTML5", icone: "🟠", description: "Notions solides" },
        { nom: "CSS3", icone: "🔵", description: "Notions solides" },
        { nom: "JavaScript", icone: "🟡", description: "En cours d'approfondissement" },
        { nom: "React", icone: "⚛️", description: "En cours d’apprentissage" },
        { nom: "Angular", icone: "🟥", description: "Bases en cours d’apprentissage" },
        { nom: "Java", icone: "☕", description: "Notions solides" },
        { nom: "WordPress / Elementor", icone: "🌐", description: "Création de sites web simple" }
      ]
    },
    {
      titre: "Bases de données",
      competences: [
        { nom: "SQL", icone: "🛢️", description: "Notions solides" },
        { nom: "MySQL", icone: "🐬", description: "Manipulation de bases de données" },
        { nom: "MongoDB", icone: "🍃", description: "Découverte, notions de base" }
      ]
    },
    {
      titre: "Data / Business Intelligence",
      competences: [
        { nom: "Power BI", icone: "📊", description: "Reporting et visualisation" },
        { nom: "SQL Server", icone: "🛢️", description: "Manipulation de données" },
        { nom: "Data Analysis", icone: "📈", description: "En cours d’apprentissage" }
      ]
    },
    {
      titre: "Outils / DevOps",
      competences: [
        { nom: "Git", icone: "🔧", description: "Utilisation basique" },
        { nom: "GitHub", icone: "🐙", description: "Gestion de versions de projets" },
        { nom: "Postman", icone: "📬", description: "Tests d’API" },
        { nom: "GitHub Copilot", icone: "🤖", description: "Assistant de code en cours d’utilisation" },
        { nom: "XAMPP (local)", icone: "🖥️", description: "Serveur local pour projets PHP / MySQL" }
      ]
    },
    {
      titre: "Autres",
      competences: [
        { nom: "VSCode", icone: "📝", description: "IDE principal" },
        { nom: "Figma", icone: "🎨", description: "Design d’interfaces (UI)" }
      ]
    }
  ];

  return (
    <div className="competences-container">
      <motion.h3
        className="competences-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Compétences techniques
      </motion.h3>

      <motion.p
        className="competences-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Voici les technologies et outils que je maîtrise actuellement et que j'utilise dans mes projets personnels et académiques :
      </motion.p>

      <div className="competences-categories">
        {categories.map((categorie, idx) => (
          <motion.div
            key={idx}
            className="competence-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            <h4>{categorie.titre}</h4>
            <div className="competences-grid">
              {categorie.competences.map((comp, index) => (
                <motion.div
                  key={index}
                  className="competence-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="competence-icone">{comp.icone}</div>
                  <div className="competence-nom">{comp.nom}</div>
                  <div className="competence-description">{comp.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MesCompetences;
