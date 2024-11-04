import React from 'react';
import { CvData } from '../interfaces/index';

interface InteretsProps {
  cvData: CvData;
  setCvData: React.Dispatch<React.SetStateAction<CvData>>;
}

const Interets: React.FC<InteretsProps> = ({ cvData, setCvData }) => {
  const addInteret = () => {
    setCvData((prevData) => ({
      ...prevData,
      interets: [...prevData.interets, ''],
    }));
  };

  const removeInteret = (index: number) => {
    setCvData((prevData) => ({
      ...prevData,
      interets: prevData.interets.filter((_, i) => i !== index),
    }));
  };

  const handleInteretChange = (index: number, value: string) => {
    const updatedInterets = [...cvData.interets];
    updatedInterets[index] = value;
    setCvData((prevData) => ({ ...prevData, interets: updatedInterets }));
  };

  return (
    <>
      <h2>Centres d'intérêt</h2>
      {cvData.interets.map((interet, index) => (
        <div key={index} className="form-group">
          <input
            type="text"
            value={interet}
            onChange={(e) => handleInteretChange(index, e.target.value)}
            className="form-control form-control-sm"
          />
          <button type="button" onClick={() => removeInteret(index)} className="btn btn-sm btn-danger mt-2">
            Retirer le centre d'intérêt
          </button>
        </div>
      ))}
      <button type="button" onClick={addInteret} className="btn btn-sm btn-secondary mt-3">
        Ajouter un centre d'intérêt
      </button>
    </>
  );
};

export default Interets;
