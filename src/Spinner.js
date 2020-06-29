import React from 'react';
import spinner from './assets/pizzaSpin.gif'
import './styles/Spinner.scss';


function Spinner() {

    return (
      <>
      <div className='spinnerContainer'>
        <p className='spinnerContainer__text'>Something went wrong. The data isn't here! Let me know and I'll see if I can manually add it to the database.</p>
        <img className='spinnerContainer__image' src={spinner}/>
      </div>
      </>
    );
  }

  export default Spinner;