import { useState } from 'react';
import './App.css';
import CoreConcept from '../../components/CoreConcept/CoreConcept';
import CustomButton from '../../components/CustomButton/CustomButton';
import Pic from '../../components/Pic/Pic';
import test from '../../assets/test.jpg'
import test_avif from '../../assets/test.avif'
import { LISTINGS } from '../Default/data';

// Has not been cleaned up, review later

let txt = 'original text'

function CoreConceptsTest() {
  const [ displayedText , setDisplayedText ] = useState('Please click a button');

  function handleSelect() {
    txt = 'new text';
    console.log('selected');
    setDisplayedText();
  }

  return (
    <div className="App">
      <Pic 
        src = {{primary:test, avif: test_avif}}
        size = {100}
      />
      <ul>
        <CoreConcept {...LISTINGS[0]} attribute="king" />
        <CoreConcept {...LISTINGS[1]} />
        <CoreConcept {...LISTINGS[2]}> <CustomButton onClick={handleSelect}> This is a button {txt}</CustomButton> </CoreConcept>
      </ul>
    </div>
  );
}

export default CoreConceptsTest;
