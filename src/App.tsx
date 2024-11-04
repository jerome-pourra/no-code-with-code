import React, { useEffect, useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Langues from './components/Langues';
import Interets from './components/Interets';
import { CvData } from './interfaces/index';

const App: React.FC = () => {
  const [cvData, setCvData] = useState<CvData>({
    nom: 'Dupont',
    prenom: 'Jean',
    profession: 'Développeur Web',
    email: 'jean.dupont@example.com',
    telephone: '0123456789',
    adresse: '123 Rue de Paris, 75000 Paris',
    aPropos: 'Je suis une personne motivée et dynamique.',
    experiences: [
      {
        titre: 'Développeur Frontend',
        entreprise: 'Société XYZ',
        duree: 'Jan 2020 - Présent',
        description: 'Développement d\'applications web en utilisant React et Bootstrap.'
      },
      {
        titre: 'Stagiaire Développeur',
        entreprise: 'Agence ABC',
        duree: 'Juin 2019 - Déc 2019',
        description: 'Participation à la création de sites web pour divers clients.'
      }
    ],
    formations: [
      {
        diplome: 'Master en Informatique',
        ecole: 'Université de Paris',
        annee: '2019'
      },
      {
        diplome: 'Licence en Informatique',
        ecole: 'Université de Lyon',
        annee: '2017'
      }
    ],
    competences: [
      'JavaScript',
      'React',
      'Node.js',
      'HTML/CSS',
      'Git',
      'Bootstrap'
    ],
    langues: [
      { langue: 'Français', niveau: 'Langue maternelle' },
      { langue: 'Anglais', niveau: 'Intermédiaire' }
    ],
    interets: [
      'Développement personnel',
      'Voyages',
      'Technologies émergentes',
      'Lecture',
      'Cyclisme'
    ]
  });

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Charger les données depuis le localStorage lors du chargement de la page
  useEffect(() => {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      setCvData(JSON.parse(savedData));
    }
  }, []);

  // Fonction pour sauvegarder les données dans le localStorage
  const saveToLocalStorage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    localStorage.setItem('cvData', JSON.stringify(cvData));
    alert('Données sauvegardées dans le stockage local du navigateur.');
  };

  return (
    <div className='container my-5'>
      <div className="row">
        {/* Section formulaire */}
        <div className='col-4'>
          <form style={{ position: 'sticky', top: '3rem' }}>

            <div className="mb-4 border p-3 rounded">
              <h2>Outils</h2>
              <button onClick={saveToLocalStorage} className="btn btn-primary">
                Sauvegarder l'état actuel
              </button>
            </div>

            <div className="mb-4 border p-3 rounded">
              <h2>Informations Personnelles</h2>
              <PersonalInfo cvData={cvData} handleChange={handleChange} />
            </div>

            <div className="mb-4 border p-3 rounded">
              <Experiences cvData={cvData} setCvData={setCvData} />
            </div>

            <div className="mb-4 border p-3 rounded">
              <Formations cvData={cvData} setCvData={setCvData} />
            </div>

            <div className="mb-4 border p-3 rounded">
              <Competences cvData={cvData} setCvData={setCvData} />
            </div>

            <div className="mb-4 border p-3 rounded">
              <Langues cvData={cvData} setCvData={setCvData} />
            </div>

            <div className="mb-4 border p-3 rounded">
              <Interets cvData={cvData} setCvData={setCvData} />
            </div>

          </form>
        </div>

        {/* Section prévisualisation */}
        <div className='col-8'>

          <div>

            <h3>{cvData.nom} {cvData.prenom}</h3>
            <h4>{cvData.profession}</h4>

            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">
                <i className="bi bi-envelope-fill me-2"></i>
                {cvData.email}
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone-fill me-2"></i>
                {cvData.telephone}
              </p>
              <p className="mb-0">
                <i className="bi bi-house-fill me-2"></i>
                {cvData.adresse}
              </p>
            </div>

            <p>A propos: {cvData.aPropos}</p>

            <h3>Expériences Professionnelles</h3>
            <ul className="list-group">
              {cvData.experiences.map((exp, index) => (
                <li key={index} className="list-group-item d-flex align-items-start">
                  <div className="me-2">
                    <i className="bi bi-briefcase-fill"></i> {/* Icône de l'entreprise */}
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{exp.titre} - {exp.entreprise} <span className="text-muted">({exp.duree})</span></h5>
                    <p className="mb-0">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Formations</h3>
            <ul className="list-group">
              {cvData.formations.map((formation, index) => (
                <li key={index} className="list-group-item d-flex align-items-start">
                  <div className="me-2">
                    <i className="bi bi-book-fill"></i> {/* Icône de livre pour la formation */}
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{formation.diplome} - {formation.ecole} <span className="text-muted">({formation.annee})</span></h5>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Compétences</h3>
            <ul className="list-group">
              {cvData.competences.map((competence, index) => (
                <li key={index} className="list-group-item d-flex align-items-start">
                  <div className="me-2">
                    <i className="bi bi-check-circle-fill"></i> {/* Icône pour représenter une compétence */}
                  </div>
                  <div className="flex-grow-1">
                    <span>{competence}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Langues</h3>
            <ul className="list-group">
              {cvData.langues.map((langue, index) => (
                <li key={index} className="list-group-item d-flex align-items-start">
                  <div className="me-2">
                    <i className="bi bi-globe"></i> {/* Icône représentant les langues */}
                  </div>
                  <div className="flex-grow-1">
                    <span>{langue.langue} - {langue.niveau}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Centres d'intérêt</h3>
            <ul className="list-group">
              {cvData.interets.map((interet, index) => (
                <li key={index} className="list-group-item d-flex align-items-start">
                  <div className="me-2">
                    <i className="bi bi-star"></i> {/* Icône représentant un intérêt */}
                  </div>
                  <div className="flex-grow-1">
                    <span>{interet}</span>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;