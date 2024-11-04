export interface Experience {
  titre: string;
  entreprise: string;
  duree: string;
  description: string;
}

export interface Formation {
  diplome: string;
  ecole: string;
  annee: string;
}

export interface Langue {
  langue: string;
  niveau: string;
}

export interface CvData {
  nom: string;
  prenom: string;
  profession: string;
  email: string;
  telephone: string;
  adresse: string;
  aPropos: string;
  experiences: Experience[];
  formations: Formation[];
  competences: string[];
  langues: Langue[];
  interets: string[];
}
