import React from 'react';
import { useState } from 'react';
import styles from './Configurator.module.css';
import Image from 'next/image';
import images from '../../constants/images';

import RangeSlider from '../../components/rangeSlider/RangeSlider';
import Satteldach from './Dachmaße_Sattel_Giebeldach/Dachmaße_Satteldach';
import Pultdach from './Dachmaße_Pultdach/Dachmaße_Pultdach';

const Dachinformation = () => {

    // const [isChecked, setIsChecked] = useState(false);

    // const handleCheckboxChange = (event: any) => {
    //   setIsChecked(event.target.checked);
    // };

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: any) => {
      setSelectedOption(event.target.value);
    };
  

  return (
    <div className={styles.dachinformation_container}>
        {/* <input type='text' /> */}
        <label htmlFor="select-option" className='subheading'>Unterkonstruktion : </label>
        <select className={styles.select} id="select-option" name="select-option">
            <option value="option1">Bitte wählen</option>
            <option value="option1">Stahl</option>
            <option value="option2">Holz</option>
        </select>
        <label htmlFor="select-option" className='subheading'>Dachplatten in cm : </label>
        <select className={styles.select} id="select-option" name="select-option">
            <option value="option1">Bitte wählen</option>
            <option value="option1">32 cm</option>
            <option value="option2">35 cm</option>
            <option value="option2">40 - 50 cm</option>
            <option value="option2">60 - 80 cm</option>
            <option value="option2">100 cm</option>
            <option value="option2">150 cm</option>
        </select>
        <label htmlFor="select-option" className='subheading'>Dachform : </label>
        <div className="container grid grid--2-cols margin-bottom-md">
            <div className={styles.wrapper}>
                <div className={styles.selectImageContainer}>
                    <input type='radio' name='groupeOne' value="option1" id='sattel_giebeldach' 
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}/>
                    <label htmlFor="sattel_giebeldach">
                        <Image src={images.icon5} alt='test' width={182} height={182} className='image' />
                    </label>
                    {/* <label htmlFor="sattel_giebeldach">Sattel- / Giebeldach</label> */}
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.selectImageContainer}>
                    <input type='radio' name='groupeOne' value="option2" id='pult_flachdach' 
                    // checked={isChecked} 
                    // onChange={handleCheckboxChange}
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                    />
                    <label htmlFor="pult_flachdach">
                        <Image src={images.icon6} alt='test' width={182} height={182} className='image' />
                    </label>
                    {/* <label htmlFor="sattel_giebeldach">Sattel- / Giebeldach</label> */}
                </div>
            </div>
        </div>

        {selectedOption === 'option1' && <Pultdach /> }
        {selectedOption === 'option2' && <Satteldach />}

        {/* <label htmlFor="select-option" className='subheading'>Stößt Ihr Dach an eine Wand / Brandschutzmauer? : </label>
        <div className={styles.radio_container}>
            <label htmlFor="groupeTwo">
                <input type="radio" value="Ja" name='groupeTwo' />
                ja
            </label>
            <br />
            <label htmlFor="groupeTwo">
                <input type="radio" value="Nein" name='groupeTwo' />
                Nein
            </label>
        </div> */}

        <label htmlFor="select-option" className='subheading'>Dachneigung : </label>
        <RangeSlider />
    </div>
  )
}

export default Dachinformation