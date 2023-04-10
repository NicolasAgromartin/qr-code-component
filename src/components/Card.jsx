import React from 'react';
import qrImage from '../assets/images/qrImage.png';

export default function Card() {
  return (
    <div className='card'>
      <img src={qrImage} alt="QR" />
      <h2>Improve your front-end skills by building projects</h2> 
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p>
    </div>
  )
}
