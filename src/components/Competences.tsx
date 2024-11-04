import React from 'react';
import { CvData } from '../interfaces/index';

interface CompetencesProps {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
}

const Competences: React.FC<CompetencesProps> = ({ cvData, setCvData }) => {
  const addCompetence = () => {
    setCvData((prevData) => ({
      ...prevData,
      competences: [...prevData.competences, ''],
    }));
  };

  const removeCompetence = (index: number) => {
    setCvData((prevData) => ({
      ...prevData,
      competences: prevData.competences.filter((_, i) => i !== index),
    }));
  };

  const handleCompetenceChange = (index: number, value: string) => {
    const updatedCompetences = [...cvData.competences];
    updatedCompetences[index] = value;
    setCvData((prevData) => ({ ...prevData, competences: updatedCompetences }));
  };

  return (
    <>
      <h2>Compétences</h2>
      {cvData.competences.map((competence, index) => (
        <div key={index} className="form-group">
          <input
            type="text"
            value={competence}
            onChange={(e) => handleCompetenceChange(index, e.target.value)}
            className="form-control form-control-sm"
          />
          <button type="button" onClick={() => removeCompetence(index)} className="btn btn-sm btn-danger mt-2">
            Retirer la compétence
          </button>
        </div>
      ))}
      <button type="button" onClick={addCompetence} className="btn btn-sm btn-secondary mt-3">
        Ajouter une compétence
      </button>
    </>
  );
};

export default Competences;
