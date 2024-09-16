import { useState } from "react";

function Todolist() {
  const [liste, setListe] = useState(['apprendre reacte','apprendre symfont','apprendre react', 'apprendre typescript', 'apprendre vue', 'apprendre svelte']);

const [newListe, setNewListe] = useState('');

const [error, setError] = useState('');


  const ajouter = () => {
    if (newListe.trim() === '') {
      setError('La valeur ne peut pas être vide');
      return;
    }
    setListe([...liste, newListe]);
    setNewListe('');
    setError('');
  };

  const supprimer = () => {
    if (liste.length === 0) {
      return;
    }
    setListe(liste.slice(0,liste.length-1));
  };


  return (
    
    <div>
       ----------------------------------------------------------------------------------------------------------- <br />
      <ul>
        {liste.map((valeur, index) => (
          <li key={index}>{valeur}</li>
        ))}
      </ul>
      <input type="text" value={newListe} onChange={(e) => setNewListe(e.target.value)} />
      <button onClick={ajouter}>ajouter</button>
      <button onClick={supprimer}>Supprimer</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default Todolist;