import React from 'react';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import Price from '../Price/Price';
import AviaCompany from '../AviaCompany/AviaCompany';

function FilterComponent({data}) {
    return (
        <div>
            <Sort/>
            <Filter />
            <Price/>
            <AviaCompany data ={data}/>
        </div>
    );
}

export default FilterComponent;