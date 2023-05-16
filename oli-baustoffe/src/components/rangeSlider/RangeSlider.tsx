import React, { useState } from 'react';
import styles from './RangeSlider.module.css';

const RangeSlider = () => {
  const [value, setValue] = useState(8);

  const handleSliderChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.slider_container}>
        <div className={styles.slider}>
            <input
                type="range"
                min="0"
                max="45"
                value={value}
                onChange={handleSliderChange}
            />
        </div>
      <p>Grad: {value}</p>
    </div>
  );
};

export default RangeSlider;
