import React, { useState } from 'react';
import bl1 from '../imgs/bl1.jpg';
import bl2 from '../imgs/bl2.jpg';
import bl3 from '../imgs/bl3.jpg';

const imgsAnime = [bl1, bl2, bl3];

const Anime3 = () => {
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
      <h1>Hunter x Hunter</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <input type="button" value="<" onClick={imgAnimePrevia} />
        <input type="button" value=">" onClick={imgsAnimeSiguiente} />
      </div>
      <img src={imgsAnime[nroImgAnime]} alt="anime" style={{ width: '55%', marginTop: '20px' }} />
    </div>
  );
};

export default Anime3;