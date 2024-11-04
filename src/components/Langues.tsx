import React from 'react';
import { CvData } from '../interfaces/index';

interface LanguesProps {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
}

const Langues: React.FC<LanguesProps> = ({ cvData, setCvData }) => {
  const addLangue = () => {
    setCvData((prevData) => ({
      ...prevData,
      langues: [...prevData.langues, { langue: '', niveau: '' }],
    }));
  };

  const removeLangue = (index: number) => {
    setCvData((prevData) => ({
      ...prevData,
      langues: prevData.langues.filter((_, i) => i !== index),
    }));
  };

  const handleLangueChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedLangues = [...cvData.langues];
    updatedLangues[index] = { ...updatedLangues[index], [name]: value };
    setCvData((prevData) => ({ ...prevData, langues: updatedLangues }));
  };

  return (
    <>
      <h2>Langues</h2>
      {cvData.langues.map((langue, index) => (
        <div key={index} className="form-group">
          <label>Langue</label>
          <input
            type="text"
            name="langue"
            value={langue.langue}
            onChange={(e) => handleLangueChange(index, e)}
            className="form-control form-control-sm"
          />
          <label>Niveau</label>
          <input
            type="text"
            name="niveau"
            value={langue.niveau}
            onChange={(e) => handleLangueChange(index, e)}
            className="form-control form-control-sm"
          />
          <button type="button" onClick={() => removeLangue(index)} className="btn btn-sm btn-danger mt-2">
            Retirer la langue
          </button>
        </div>
      ))}
      <button type="button" onClick={addLangue} className="btn btn-sm btn-secondary mt-3">
        Ajouter une langue
      </button>
    </>
  );
};

export default Langues;
