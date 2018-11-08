import React from 'react';
import { Row, Col, Hidden } from 'react-grid-system';

const ColumnHeader = () =>{
    return (
        <Row>
            <Col className='column header-column' xs={2.5} sm={1} >#</Col>
            <Col className='column header-column' xs={2.5} sm={1} >Hashrate</Col>
            <Col className='column header-column' xs={4} sm={1.5} >Acc/Rej/Inv</Col>
            <Hidden xs>
                <Col className='column header-column' sm={1} >Shares/Hour</Col>
                <Col className='column header-column' >Hashrate/Gpu</Col>
                <Col className='column header-column' >Temp/Gpu</Col>
                <Col className='column header-column' >Fan/Gpu</Col>
                <Col className='column header-column' sm={.5}>PS</Col>
                <Col className='column header-column' sm={1} >Version</Col>
            </Hidden>
            <Col className='column header-column' xs={3} sm={1} >Time On</Col>
        </Row>
    );
};
export default ColumnHeader;