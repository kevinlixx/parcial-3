import React, { useState } from 'react';
import steins1 from '../imgs/stg1_.jpg';
import steins2 from '../imgs/stg2.jpg';
import steins3 from '../imgs/stg3.jpg';

const imgsAnime = [steins1, steins2, steins3];

const Anime1 = () => {
  const [nroImgAnime, setNroImgAnime] = useState(0);

  function imgsAnimeSiguiente() {
    if (nroImgAnime < imgsAnime.length - 1) {
      setNroImgAnime(nroImgAnime + 1);
    }
  }

  function imgAnimePrevia() {
    if (nroImgAnime > 0) {
      setNroImgAnime(nroImgAnime - 1);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1>Steins Gate</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <input type="button" value="<" onClick={imgAnimePrevia} />
        <input type="button" value=">" onClick={imgsAnimeSiguiente} />
      </div>
      <img src={imgsAnime[nroImgAnime]} alt="anime" style={{ width: '55%', marginTop: '20px' }} />
    </div>
  );
};

export default Anime1;