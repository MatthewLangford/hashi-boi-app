import React, { Component } from 'react';
import './RigListContainer.css';
import Rig from '../Rig/Rig';

const RigListContainer = props => {  
    const { rigArray } = props  

        return (
            <div>
                <ul className='rig-list'>
                    { rigArray.map(rig =>
                        <li key={ rig.rigNumber }> 
                            <Rig rig={ rig }/>
                        </li>
                    )}
                </ul>
            </div>
        );
    
}

export default RigListContainer;
