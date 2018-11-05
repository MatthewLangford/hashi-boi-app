import React from 'react';
import  { Container } from 'react-grid-system';

import './RigListContainer.css';
import Rig from '../Rig/Rig';
import ColumnHeader from './ColumnHeader';

const RigListContainer = props => {  
    const { rigInfo } = props  
        return (
            <div className='rig-list-container'>
                <Container fluid={ true } className='grid-header'>
                    <ColumnHeader />
                    { rigInfo.map(rig =>
                        <Rig key={ rig.rigNumber} rig={ rig } />
                    )}
                </Container>
            </div>
        );
}

export default RigListContainer;
