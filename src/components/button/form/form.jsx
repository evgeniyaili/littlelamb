import React, { useEffect, useState } from 'react';
import { hooks } from '../../../hooks/hooks';
import './form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Man');
    const {tg} = hooks();

    useEffect(()=> {
        tg.MainButton.setParams({
            text:'Send data'
    })
    }, [])
    useEffect(()=>{
        if (!address || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, address])

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
                <option value={'Man'}>Men</option>
                <option value={'Woman'}>Woman</option>
            </select>
        </div>
    );
 
};
export default Form;