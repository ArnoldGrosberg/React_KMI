import React, { Component } from 'react'
import { useState } from 'react';
import Slider from 'react-rangeslider'
class Horizontal extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            value: 50
        }
    }
    handleChangeStart = () => {
        console.log('Change event started')
    };
    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeComplete = () => {
        console.log(this.state.value)
        console.log(`Change event completed`)
        let pikkus = document.getElementById("appSlider").textContent.slice(11);
        document.getElementById("pikkus").value = pikkus
        let kaal = document.getElementById("appSlider2").textContent.slice(9);
        document.getElementById("kaal").value = kaal
        console.log(pikkus)
        console.log(kaal)
        let tulemus = kaal / (pikkus/100)**2
        console.log(tulemus)
        let tekst;
        if (tulemus < 16) {tekst = 'Tõsine alakaal'}
        if (tulemus >= 16 && tulemus < 17) {tekst = 'Keskmine alakaal'}
        if (tulemus >= 17 && tulemus < 18.50) {tekst = 'Kerge alakaal'}
        if (tulemus >= 18.5 && tulemus < 25) {tekst = 'Normaalkaal'}
        if (tulemus >= 25 && tulemus < 30) {tekst = 'Ülekaal'}
        if (tulemus >= 30 && tulemus < 35) {tekst = 'Rasvumise 1. klass'}
        if (tulemus >= 35 && tulemus < 40) {tekst = 'Rasvumise 2. klass'}
        if (tulemus > 40) {tekst = 'Rasvumise 3. klass'}
            console.log(tekst)
        document.getElementById("goals").textContent = tekst + ", sinu KMI on: " + Math.round(tulemus*100)/100;
    };
    
    render () {
        const { value } = this.state
        return (
            <div>
                <div className='slider'  style={{width:'425px'}} >
                    <div style={{ textAlign:'center',color:'red',fontSize:'18px',marginBottom:'5px'}}>
                    </div>
                    <Slider
                        min={0}
                        max={300}
                        value={value}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChange}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    {value}
                </div>
            </div>
        )
    }
}
export default Horizontal