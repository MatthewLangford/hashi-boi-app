import React from 'react';
import { Row, Col, Hidden } from 'react-grid-system';

const ColumnHeader = (props) =>{
    return (
        <Row>
            <Col className='header-column column' xs={3} sm={1} >Rig #</Col>
            <Col className='header-column column' xs={3} sm={1} >Hashrate</Col>
            <Col className='header-column column' xs={3} sm={1} >Acc/Rej/Inv</Col>
            <Hidden xs>
            <Col className='header-column column' sm={1}>Pool Switches</Col>
                <Col className='header-column column' >Hashrate/Gpu</Col>
                <Col className='header-column column' >Temp/Gpu</Col>
                <Col className='header-column column' >Fan/Gpu</Col>
                <Col className='header-column column' sm={1} >Miner Version</Col>
            </Hidden>
            <Col className='header-column column' xs={3} sm={1} >Time Active</Col>
        </Row>
    );
};
export default ColumnHeader;