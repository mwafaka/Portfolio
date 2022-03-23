import React from 'react'
import './Menu.scss'
function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#portfolio'>Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#work'>Skills</a>
                </li>
               
            </ul>

        </div>
    )
}

export default Menu
