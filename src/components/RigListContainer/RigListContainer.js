import React from 'react';
import  { Container } from 'react-grid-system';
import { array } from 'prop-types';

import './RigListContainer.css';
import Rig from '../Rig/Rig';
import ColumnHeader from './ColumnHeader';

const RigListContainer = ({rigInfo}) => {
        RigListContainer.propTypes = {
            rigInfo: array
        }    
    
        return (
            <div className='rig-list-container'>
                <Container fluid={ true } className='grid-header'>
                    <ColumnHeader />
                    { rigInfo.map(rig =>
                        <Rig key={ rig.rigNumber } rig={ rig } />
                    )}
                </Container>
            </div>
        );
}

export default RigListContainer;
