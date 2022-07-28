import { async } from 'q';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadBuisness } from '../data/buisnessApi';

export const Business = async(props)=>{

    const location = useLocation();
    const form = location.state;
    console.log(form.id);
    const navigate = useNavigate();
    const business = await loadBuisness(form.id);
    const [name, setName] = useState(customer?.name);
    const [password, setPassword] = useState(customer?.password);
}