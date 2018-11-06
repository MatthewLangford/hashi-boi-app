import React from 'react';
import  { Row, Col, Hidden } from 'react-grid-system';

const Rig = props => {
    const { rig } = props;
    console.log(rig)
    return (
        <Row>
            <Col className='column' xs={2} sm={1} >{ rig.rigNumber }</Col>
            <Col className='column right' xs={3} sm={1} >{ rig.hashrateTotal }</Col>
            <Col className='column right' xs={4} sm={1.5} >{ rig.acceptedShares }/{ rig.rejectedShares }/{ rig.invalidShares }</Col>
            <Hidden xs>
                <Col className='column'>AVG hashrate: { rig.hashratePerCard ? Math.floor(rig.hashratePerCard.reduce((prev, curr) => prev + curr)
                                                         / rig.hashratePerCard.length) : ''}</Col>
                <Col className='column'>AVG Temp: { rig.tempPerCard ? Math.floor(rig.tempPerCard.reduce((prev, curr) => prev + curr) 
                                                    / rig.tempPerCard.length) : '' }</Col>
                <Col className='column'>AVG Fan: { rig.fanPerCard ? Math.floor(rig.fanPerCard.reduce((prev, curr) => prev + curr)
                                                     / rig.fanPerCard.length) : '' }</Col>
                <Col className='column' sm={.5} >{ rig.poolSwitches }</Col>
                <Col className='column' sm={1} >{ rig.minerVersion }</Col>
            </Hidden>
            <Col className='column right' xs={3} sm={1} >{ Math.floor(rig.totalTimeInMinutes / 60) } : { rig.totalTimeInMinutes % 60  }</Col>
        </Row>
    );
};
export default Rig;