import React from 'react';
import { CvData } from '../interfaces/index';

interface ExperiencesProps {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
}

const Experiences: React.FC<ExperiencesProps> = ({ cvData, setCvData }) => {
  const addExperience = () => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, { titre: '', entreprise: '', duree: '', description: '' }],
    }));
  };

  const removeExperience = (index: number) => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.filter((_, i) => i !== index),
    }));
  };

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedExperiences = [...cvData.experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [name]: value };
    setCvData((prevData) => ({ ...prevData, experiences: updatedExperiences }));
  };

  return (
    <>
      <div className='form-group'>
        <h2>Expériences Professionnelles</h2>
        {cvData.experiences.map((exp, index) => (
          <div key={index} className="form-group">
            <label>Titre du poste</label>
            <input
              type="text"
              name="titre"
              value={exp.titre}
              onChange={(e) => handleExperienceChange(index, e)}
              className="form-control form-control-sm"
            />
            <label>Entreprise</label>
            <input
              type="text"
              name="entreprise"
              value={exp.entreprise}
              onChange={(e) => handleExperienceChange(index, e)}
              className="form-control form-control-sm"
            />
            <label>Durée</label>
            <input
              type="text"
              name="duree"
              value={exp.duree}
              onChange={(e) => handleExperienceChange(index, e)}
              className="form-control form-control-sm"
            />
            <label>Description</label>
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, e)}
              className="form-control form-control-sm"
            />
            <button type="button" onClick={() => removeExperience(index)} className="btn btn-sm btn-danger mt-2">
              Retirer l'expérience
            </button>
          </div>
        ))}
        <button type="button" onClick={addExperience} className="btn btn-sm btn-secondary mt-3">
          Ajouter une expérience
        </button>
      </div>
    </>
  );
};

export default Experiences;
