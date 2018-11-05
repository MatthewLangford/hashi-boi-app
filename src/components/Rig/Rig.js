import React from 'react';
import  { Row, Col, Hidden } from 'react-grid-system';

const Rig = props => {
    const { rig } = props;
    return (
        <Row>
            <Col className='column' xs={3} sm={1} >{ rig.rigNumber }</Col>
            <Col className='column' xs={3} sm={1} >{ rig.hashrateTotal }</Col>
            <Col className='column' xs={3} sm={1} >{ rig.acceptedShares }/{ rig.rejectedShares }/{ rig.invalidShares }</Col>
            <Hidden xs>
                <Col className='column' sm={1} >{ rig.poolSwitches }</Col>
                <Col className='column'>{ rig.hashratePerCard }</Col>
                <Col className='column'>{ rig.tempPerCard }</Col>
                <Col className='column'>{ rig.fanPerCard }</Col>
                <Col className='column' sm={1} >{ rig.minerVersion }</Col>
            </Hidden>
            <Col className='column' xs={3} sm={1} >{ Math.floor(rig.totalTimeInMinutes / 60) } : { rig.totalTimeInMinutes % 60  }</Col>
        </Row>
    );
};
export default Rig;