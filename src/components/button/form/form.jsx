import React, { useCallback, useEffect, useState } from 'react';
import { hooks } from '../../../hooks/hooks';
import './form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Man');
    const {tg} = hooks();
    
    const onSendData = useCallback(() => {
    const data = {
    country,
    address,
    gender  
    }
    tg.sendData(JSON.stringify(data));
    }, [country, address, gender])

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

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

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