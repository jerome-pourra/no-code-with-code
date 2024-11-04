import React from 'react';
import { CvData } from '../interfaces/index';

interface FormationsProps {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
}

const Formations: React.FC<FormationsProps> = ({ cvData, setCvData }) => {
  const addFormation = () => {
    setCvData((prevData) => ({
      ...prevData,
      formations: [...prevData.formations, { diplome: '', ecole: '', annee: '' }],
    }));
  };

  const removeFormation = (index: number) => {
    setCvData((prevData) => ({
      ...prevData,
      formations: prevData.formations.filter((_, i) => i !== index),
    }));
  };

  const handleFormationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormations = [...cvData.formations];
    updatedFormations[index] = { ...updatedFormations[index], [name]: value };
    setCvData((prevData) => ({ ...prevData, formations: updatedFormations }));
  };

  return (
    <>
      <h2>Formations</h2>
      {cvData.formations.map((formation, index) => (
        <div key={index} className="form-group">
          <label>Diplôme</label>
          <input
            type="text"
            name="diplome"
            value={formation.diplome}
            onChange={(e) => handleFormationChange(index, e)}
            className="form-control form-control-sm"
          />
          <label>École</label>
          <input
            type="text"
            name="ecole"
            value={formation.ecole}
            onChange={(e) => handleFormationChange(index, e)}
            className="form-control form-control-sm"
          />
          <label>Année</label>
          <input
            type="text"
            name="annee"
            value={formation.annee}
            onChange={(e) => handleFormationChange(index, e)}
            className="form-control form-control-sm"
          />
          <button type="button" onClick={() => removeFormation(index)} className="btn btn-sm btn-danger mt-2">
            Retirer la formation
          </button>
        </div>
      ))}
      <button type="button" onClick={addFormation} className="btn btn-sm btn-secondary mt-3">
        Ajouter une formation
      </button>
    </>
  );
};

export default Formations;
