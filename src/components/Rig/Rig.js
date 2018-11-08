import React, { Component } from 'react';
import  { Row, Col, Hidden } from 'react-grid-system';
import { object } from 'prop-types';

export default class Rig extends Component {
    state = {
        rig: this.props.rig
    }

    static propTypes = {
        rig: object
    };
     
    static defaultProps = {
        rig: {}
    };

    render () {
        const { rig } = this.state;
        const totalTimeFormatted = `${ Math.floor(rig.totalTimeInMinutes / 60) }: ${ rig.totalTimeInMinutes % 60 } ` || 0;
        //console.log(rig)
        return (
            <Row className={ `${rig.avgSharesPerHour < 300 && 'warning'}  ${rig.totalTimeInMinutes === 'error' && 'error'}`}>
                <Col className='column' xs={2.5} sm={1} >{ rig.rigNumber || 0 }</Col>
                <Col className='column right' xs={2.5} sm={1} >{ rig.hashrateTotal || 0 }</Col>
                <Col className='column right' xs={4} sm={1.5} >{ rig.acceptedShares  || 0 }/{ rig.rejectedShares || 0 }/{ rig.invalidShares || 0}</Col>
                <Hidden xs>
                    <Col className='column' sm={1}>{ rig.avgSharesPerHour || 0 }</Col>
                    <Col className='column hover-column'>{ `AVG Hashrate: ${ rig.avgHashratePerCard || 0 }` } </Col>
                    <Col className='column'>{ `AVG Temp: ${ rig.avgTempPerCard || 0 }` }</Col>
                    <Col className='column'>{ `AVG Fan: ${ rig.avgFanPerCard || 0 }` }</Col>
                    <Col className='column' sm={.5} >{ rig.poolSwitches || 0 }</Col>
                    <Col className='column' sm={1} >{ rig.minerVersion || 0 }</Col>
                </Hidden>
                <Col className='column right' xs={3} sm={1} >{ totalTimeFormatted }</Col>
            </Row>
        );
    };
};
