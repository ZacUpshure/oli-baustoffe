import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import styles from './Configurator.module.css';
import Image from 'next/image';
import images from '../../constants/images';
import RangeSlider from '../../components/rangeSlider/RangeSlider';
import Satteldach from './Dachmaße_Sattel_Giebeldach/Dachmaße_Satteldach';
import Pultdach from './Dachmaße_Pultdach/Dachmaße_Pultdach';

const Dachinformation = ({onSubmit}: any) => {
    
    
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectionChange = (event: any) => {
        const selectedValue = event.currentTarget.value;
        setUnterkonstruktion(selectedValue);
      };
    
    const [Unterkonstruktion, setUnterkonstruktion] = useState('');
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit({ 
            Unterkonstruktion
        });
    };
  
  return (
    <div className={styles.dachinformation_container} onSubmit={handleSubmit}>
        <label htmlFor="select-option" className='subheading'>Unterkonstruktion : </label>
        <select className={styles.select} id="select-option" name="select-option" value={Unterkonstruktion} onChange={handleSelectionChange}>
            <option value="nicht ausgewählt">Bitte wählen</option>
            <option value="Stahl">Stahl</option>
            <option value="Holz">Holz</option>
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
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.selectImageContainer}>
                    <input type='radio' name='groupeOne' value="option2" id='pult_flachdach' 
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                    />
                    <label htmlFor="pult_flachdach">
                        <Image src={images.icon6} alt='test' width={182} height={182} className='image' />
                    </label>
                </div>
            </div>
        </div>

        {selectedOption === 'option1' && <Pultdach /> }
        {selectedOption === 'option2' && <Satteldach />}

        <label htmlFor="select-option" className='subheading'>Dachneigung : </label>
        <RangeSlider />
        <div className='padding_top'></div>
        <button className='btn btn--full margin-right-sm' type="submit">Daten Einreichen</button>
    </div>
  )
}

export default Dachinformation