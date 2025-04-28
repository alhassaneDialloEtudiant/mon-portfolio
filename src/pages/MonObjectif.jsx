import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MonObjectif.css';

function MonObjectif() {
  return (
    <div className="objectif-container">
      <motion.h3
        className="objectif-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mon Objectif
      </motion.h3>

      <motion.p
        className="objectif-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Déterminé, ambitieux et passionné par le monde du numérique, je poursuis mes objectifs professionnels et personnels avec l'envie de contribuer positivement à mon entourage, à mon pays et au monde.
      </motion.p>

      <motion.div
        className="objectif-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4>🎯 Objectif à court terme</h4>
        <p>
          Actuellement étudiant en Master MIAGE et admis en alternance pour l'année scolaire 2025-2026,
          je suis à la recherche :
          <br />
          • D'un <strong>stage</strong> dès maintenant pour consolider mes compétences pratiques dans le développement web (Java, Angular, React) et la data (SQL, Power BI).
          <br />
          • D'une <strong>entreprise partenaire</strong> pour mon <strong>contrat d'alternance</strong> 2025-2026 afin de poursuivre ma formation en milieu professionnel.
        </p>

        <h4>🚀 Objectif à moyen terme</h4>
        <p>
          Travailler dans une entreprise dynamique pour renforcer mes expériences professionnelles,
          développer mes compétences techniques et humaines,
          établir de solides relations professionnelles,
          et construire une stabilité financière durable.
        </p>

        <h4>🌍 Objectif à long terme</h4>
        <p>
          Mon ambition est double :
          <br /><br />
          • Devenir <strong>entrepreneur</strong> en créant ma propre entreprise dans le domaine du numérique, afin de contribuer à la transformation digitale de mon pays, moderniser les administrations, faciliter la communication, encourager l'innovation et former les jeunes aux nouvelles technologies.
          <br /><br />
          • Travailler au sein <strong>d'organisations internationales</strong> reconnues (dans le domaine du numérique ou du développement) pour étendre mon impact au niveau mondial, promouvoir la technologie au service du progrès humain et participer à de grands projets internationaux.
          <br /><br />
          Sur le plan personnel, je souhaite construire une vie équilibrée : me marier, fonder une famille, prospérer honnêtement, établir des relations humaines solides et venir en aide aux personnes dans le besoin.
        </p>
      </motion.div>
    </div>
  );
}

export default MonObjectif;
