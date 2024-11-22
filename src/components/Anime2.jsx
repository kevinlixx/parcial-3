import React, { useState } from 'react';
import hxh1 from '../imgs/hxh.jpg';
import hxh2 from '../imgs/hxh2.jpg';
import hxh3 from '../imgs/hxh3.jpg';

const imgsAnime = [hxh1, hxh2, hxh3];

const Anime2 = () => {
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

export default Anime2;