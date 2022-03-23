import React from 'react'
import { useEffect,useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Portfolio.scss';
import {mobilePortfolio,
    featuredPortfolio,
    webPortfolio,
    designPortfolio,
    contentPortfolio } from '../../data';

function Portfolio() {
    const[selected,setSelected]=useState('Languages');
    const[data,setData]=useState([]);

    const list =[
        {
            id:'Languages',
            title:'Languages',
        },
        {
            id:'Database',
            title:'Database',
        },
        {
            id:'Labraries/Frameworks',
            title:'Labraries/Frameworks',
        },
        {
            id:'Hosting/SaaS',
            title:'Hosting/SaaS'
        },
      
        {
            id:'Testing',
            title:'Testing'
        }
    ]
    useEffect(()=>{
        switch(selected){
            case 'Languages':
            setData(featuredPortfolio);
            break;
            case 'Database':
                setData(webPortfolio);
            break;
            case 'Labraries/Frameworks':
               setData(designPortfolio);
            break;
            case 'Hosting/SaaS':
               setData(mobilePortfolio);
            break;
            case 'Testing':
               setData(contentPortfolio);
            break;                                     
            default:
                setData(featuredPortfolio)
        }
    },[selected])
    return (
        <div className='portfolio' id='portfolio'>
         <h2>Skills</h2>
            <ul>
               {list.map((item)=>(
               <PortfolioList
               key={item.id} 
               title={item.title}
               active={selected ===item.id}
               setSelected={setSelected}
               id={item.id}
         
               />
            
               ))}
            </ul>
          
                  <div className="container">
                {data.map(d=>(
                <div className="item" key={d.id}>
                    <img src={d.img} alt=''/>
                    <h3>{d.title}</h3>
                </div>
                ))}
                     
            </div>
        </div>
    )
}

export default Portfolio
