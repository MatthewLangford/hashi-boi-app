import React from 'react';
import './RigListContainer.css';
import Rig from '../Rig/Rig';

const RigListContainer = props => {  
    const { rigInfo } = props  

        return (
            <div>
                <ul className='rig-list'>
                    { rigInfo.map(rig =>
                        <li key={ rig.rigNumber }> 
                            <Rig rig={ rig }/>
                        </li>
                    )}
                </ul>
            </div>
        );
    
}

export default RigListContainer;
