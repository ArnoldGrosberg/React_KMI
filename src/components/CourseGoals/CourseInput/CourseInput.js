import React, { useState } from 'react';
import { render } from 'react-dom';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import VolumeSlider from './slider';
import 'react-rangeslider/lib/index.css';
import './index.css';
import Slider from 'react-rangeslider';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [value, setValue] = useState(50);
    const [value2, setValue2] = useState(50);

    const goalInputChangeHandler = event => {
        let kaal = value2
        let pikkus = value
        let tulemus = kaal / (pikkus/100)**2
        let tekst;
        if (tulemus < 16) {tekst = 'Tõsine alakaal'}
        if (tulemus >= 16 && tulemus < 17) {tekst = 'Keskmine alakaal'}
        if (tulemus >= 17 && tulemus < 18.50) {tekst = 'Kerge alakaal'}
        if (tulemus >= 18.5 && tulemus < 25) {tekst = 'Normaalkaal'}
        if (tulemus >= 25 && tulemus < 30) {tekst = 'Ülekaal'}
        if (tulemus >= 30 && tulemus < 35) {tekst = 'Rasvumise 1. klass'}
        if (tulemus >= 35 && tulemus < 40) {tekst = 'Rasvumise 2. klass'}
        if (tulemus > 40) {tekst = 'Rasvumise 3. klass'}
        document.getElementById("goals").textContent = tekst + ", sinu KMI on: " + Math.round(tulemus*100)/100;
    };
    const inputChangeHandler = event => {
        setValue(document.getElementById("pikkus").value)
    };
    const inputChangeHandler2 = event => {
        setValue2(document.getElementById("kaal").value)
    };
    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    const handleChangeStart = () => {
    };

    const handleChangeComplete = () => {
        let pikkus = value;
        document.getElementById("pikkus").value = pikkus
        let kaal = value2;
        document.getElementById("kaal").value = kaal
    };


// <input type="text" onChange={goalInputChangeHandler} />
    return (
            <form onSubmit={goalInputChangeHandler}>
            <div
                className={`${styles['form-control']} ${!isValid && styles.invalid}`}
            >
                <label>Kehamassiindeksi kalkulaator</label>
            </div>
             
            <div id="appSlider"><br></br>Pikkus (CM)
            <div>
                <div className='slider'  style={{width:'425px'}} >
                    <div style={{ textAlign:'center',color:'red',fontSize:'18px',marginBottom:'5px'}}>
                    </div>
                    <Slider
                        min={0}
                        max={300}
                        value={value}
                        onChangeStart={handleChangeStart}
                        onChange={(e) => {setValue(e)}}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            </div>
            <input type="number" name="pikkus" id="pikkus" onChange={inputChangeHandler}/>
            </div>
            <div id="appSlider2"><br></br><br></br>Kaal (KG)
            <div>
                <div className='slider'  style={{width:'425px'}} >
                    <div style={{ textAlign:'center',color:'red',fontSize:'18px',marginBottom:'5px'}}>
                    </div>
                    <Slider
                        id="slider2"
                        min={0}
                        max={300}
                        value={value2}
                        onChangeStart={handleChangeStart}
                        onChange={(e) => {setValue2(e)}}
                        onChangeComplete={handleChangeComplete}
                    />
                </div>
            </div>
            <input type="number" name="kaal" id="kaal" onChange={inputChangeHandler2}/>
            </div><br></br><br></br>
            <Button type="button" onClick={goalInputChangeHandler}>Arvuta</Button>
        </form>
    );
};

export default CourseInput;