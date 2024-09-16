import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { username } = useParams(); // Récupère le paramètre 'username'
  const defaultUsername = 'Anonymous'; // Valeur par défaut du paramètre 'username'

  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center',fontSize:'8.5em' }}>Bienvenue</h1>
      <h2 style={{ color: 'white', textAlign: 'center',fontSize:'3em' }}>sur mon site {username || defaultUsername}</h2>
    </div>
  );
}

export default Profile;
