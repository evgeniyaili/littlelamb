import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Men');

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeGender = (e) => {
        setGender(e.target.value)
    }


    return (
        <div className={'form'}>
            <h3>Input data</h3>
            <input type="text" placeholder={'Country'} value={country} onChange={onChangeCountry}/>
            <input type="text" placeholder={'Address'} value={address} onChange={onChangeAddress}/>
            <select className={'select'} value={gender} onChange={onChangeGender}>
                <option value={'Men'}>Men</option>
                <option value={'Woman'}>Woman</option>
            </select>
        </div>
    );
 
};
export default Form;