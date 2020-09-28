import React, { useState } from 'react';
import Resturent from '../resturents/Resturent';


const book = () => {


const resturentsData = [

{description:"Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmVFEXX1rtqk7gR4c47pEtQ_gIIwC3lreXMQ&usqp=CAU'},
{description:"It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8zy8SROWJBkbPtuPzpKKYZ9kRPARPrcLqBw&usqp=CAU"},
{description:'Coxs Bazar is also known by the name Panowa, which translates literally as "yellow flower". Another old name was Palongkee.',img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPk-b2bmAitOLE9YtwB_tbfoZYlRKR0FmHbw&usqp=CAU"}

]



    return (
        <div>
            {
                resturentsData.map(pc => <Resturent place = {pc}></Resturent> )
            }
        </div>
    );
};

export default book;