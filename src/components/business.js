import { async } from 'q';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loadBuisness } from '../data/buisnessApi';

export const Business = async()=>{
    const navigate = useNavigate();
    const business = await loadBuisness();
}