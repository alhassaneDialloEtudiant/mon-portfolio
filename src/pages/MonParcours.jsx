import React from 'react';
import { motion } from 'framer-motion';
import '../styles/MonParcours.css';

function MonParcours() {
  const elements = [
    {
      annee: '2024 – 2025',
      titre: 'Licence 3 Informatique – parcours MIAGE',
      ecole: 'Université d’Évry – Université Paris-Saclay, France',
      statut: 'en cours'
    },
    {
      annee: '2023 – 2024',
      titre: 'Licence 2 Informatique',
      ecole: 'Université d’Évry – Université Paris-Saclay, France'
    },
    {
      annee: '2022 – 2023',
      titre: 'Licence 3 Informatique',
      ecole: 'Université de Labé, Guinée'
    },
    {
      annee: '2021 – 2022',
      titre: 'Licence 2 Informatique',
      ecole: 'Université de Labé, Guinée'
    },
    {
      annee: '2020 – 2021',
      titre: 'Licence 1 Informatique',
      ecole: 'Université de Labé, Guinée'
    },
    {
      annee: '2019 – 2020',
      titre: 'Baccalauréat Scientifique – option Mathématiques',
      ecole: 'Lycée Grande École, Guinée'
    }
  ];

  return (
    <div className="contenu-onglet">
      <motion.h3 
        className="titre-onglet"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Mon parcours
      </motion.h3>

      <motion.ul 
        className="liste-parcours"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {elements.map((item, index) => (
          <motion.li
            key={index}
            className="item-parcours"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <strong>{item.annee} :</strong> {item.titre}
            <br />
            <span className="details">({item.ecole}) {item.statut && `– ${item.statut}`}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default MonParcours;
