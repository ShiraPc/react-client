import React, { useState, useEffect } from 'react';
import { loadCustomer } from "../data/customersApi";

export const CustomerContext = React.createContext();

export const CustomerContextComponent = (props) => {
    const [_customer, setCustomer] = useState([]);

    useEffect(async () => {
        const { data } = await loadCustomer("25e9c763-cac9-41ff-b0dc-aa15dfef5327");
        setCustomer(data);
    }, []);

    // const load = async () => {    
    //     const { data } = await loadCustomer("25e9c763-cac9-41ff-b0dc-aa15dfef5327");
    //     setCustomer(data);
    //     console.log(_customer);
    // }

    const addCustomer = (c) => {
        setCustomer(c);
    }

    const updateCustomer = (id, c) => {
        if(id===_customer.id)
            setCustomer(c);
    }

    const getCustomer = () => { 
        return _customer;
    }
  
    // יצירה של מעין שרות - סרוויס שמכיל את כל הלוגיקה שקשורה למוצרים.
    const CustomerContextValue = {
      customer: _customer,
      addCustomer,
      getCustomer,
      updateCustomer
    }

    return <CustomerContext.Provider value={CustomerContextValue}> 
    {/* children - פרמטר קבוע שריאקט שולח, ומכיל את כל התוכן שנשלח בתוך הקומפוננטה, בין אלמנט פותח לסוגר */}
            { props.children }
    </CustomerContext.Provider>
}