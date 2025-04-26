import { motion } from 'framer-motion';
import { FaHeart, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';
import '../styles/Apropos.css';

function Apropos() {
  return (
    <section className="apropos">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="titre">À propos de moi</h2>
        <p className="intro">
          Je suis <strong>Diallo Alhassane</strong>, étudiant en <strong>Master MIAGE</strong> à l’université Paris Nanterre. Passionné par le développement web et la data, je conçois des solutions modernes et performantes tout en valorisant l’esthétique et l’utilisabilité.
        </p>

        <h3 className="section-titre">Mon parcours</h3>
        <ul className="timeline">
          <li><span>2018 - 2021 :</span> Bac S option mathématiques (Lycée en Guinée)</li>
          <li><span>2021 - 2024 :</span> Licence Informatique (Université Paris Nanterre)</li>
          <li><span>2024 - aujourd’hui :</span> Master MIAGE – Ingénierie Logicielle pour le Web</li>
        </ul>

        <h3 className="section-titre">Mes valeurs</h3>
        <div className="valeurs">
          <div className="valeur"><FaHeart /> Passion</div>
          <div className="valeur"><FaLightbulb /> Curiosité</div>
          <div className="valeur"><FaUsers /> Esprit d'équipe</div>
          <div className="valeur"><FaCode /> Goût du code propre</div>
        </div>

        <h3 className="section-titre">Compétences techniques</h3>
        <div className="skills">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Angular</span>
          <span>HTML/CSS</span>
        </div>

        <h3 className="section-titre">Mon objectif professionnel</h3>
        <p className="objectif">
          Je suis à la recherche d’une <strong>alternance à partir de septembre 2025</strong>, dans le domaine du <strong>développement web</strong> ou de la <strong>data</strong>, pour contribuer à des projets innovants, tout en consolidant mes compétences techniques et humaines.
        </p>
      </motion.div>
    </section>
  );
}

export default Apropos;
