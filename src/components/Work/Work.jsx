import React from 'react'
import { useEffect,useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import './Work.scss';
import {Reactx,FullApp,Backend,python} from '../../data';

function Work() {
    const[selected,setSelected]=useState('Languages');
    const[data,setData]=useState([]);

    const list =[
        {
            id:'ReactJs',
            title:'Labraries/Frameworks',
        },
        {
            id:'Full-Application',
            title:'Full-Application Projects',
        },
        {
            id:'Backend',
            title:'Backend Projects',
        },
       
      
        {
            id:'Python',
            title:'Testing'
        }
    ]
    useEffect(()=>{
        switch(selected){
            case 'ReactJs':
            setData(Reactx);
            break;
            case 'Full-Application':
                setData(FullApp);
            break;
            
            break;
            case 'Backend':
               setData(Backend);
            break;
            case 'Python':
               setData(python);
            break;                                     
            default:
                setData(Reactx)
        }
    },[selected])
    return (
        <div className='portfolio' id='portfolio'>
         <h2>Projects</h2>
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
                    <div>   <a href={d.url}>
                <div className="item" key={d.id}>
                <img src={d.img} alt=''/>
                    <h3>{d.title}</h3>
                </div>
             </a>
              
                </div>
                ))}
                     
            </div>
        </div>
    )
}

export default Work
