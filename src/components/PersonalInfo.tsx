import React from 'react';
import { CvData } from '../interfaces';

interface PersonalInfoProps {
  cvData: CvData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ cvData, handleChange }) => {
  return (
    <>
      {['nom', 'prenom', 'profession', 'email', 'telephone', 'adresse'].map((field) => (
        <div key={field} className="form-group">
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            name={field}
            value={cvData[field as keyof CvData]}
            onChange={handleChange}
            className="form-control form-control-sm"
          />
        </div>
      ))}

      {/* Champ "À propos" */}
      <div className="form-group">
        <label>À propos</label>
        <textarea
          name="aPropos"
          value={cvData.aPropos}
          onChange={handleChange}
          className="form-control form-control-sm"
          rows={3} // Ajuste le nombre de lignes si nécessaire
        />
      </div>
    </>
  );
};

export default PersonalInfo;
