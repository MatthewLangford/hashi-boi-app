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
            const averageShares = Math.floor(rig.acceptedShares / (rig.totalTimeInMinutes / 60))

        return (
            <Row className={ `${averageShares < 300 && 'warning'}  ${rig.totalTimeInMinutes === 'error' && 'error'}`}>
                <Col className='column' xs={2.5} sm={1} >{ rig.rigNumber }</Col>
                <Col className='column right' xs={2.5} sm={1} >{ rig.hashrateTotal }</Col>
                <Col className='column right' xs={4} sm={1.5} >{ rig.acceptedShares }/{ rig.rejectedShares }/{ rig.invalidShares }</Col>
                <Hidden xs>
                    <Col className='column' sm={1}>{ averageShares }</Col>
                    <Col className='column hover-column'>AVG hashrate: { rig.hashratePerCard && 
                                                                         Math.floor(rig.hashratePerCard.reduce((prev, curr) => prev + curr) / rig.hashratePerCard.length) }</Col>
                    <Col className='column'>AVG Temp: { rig.tempPerCard && 
                                                                        Math.floor(rig.tempPerCard.reduce((prev, curr) => prev + curr) / rig.tempPerCard.length) }</Col>
                    <Col className='column'>AVG Fan: { rig.fanPerCard && 
                                                                      Math.floor(rig.fanPerCard.reduce((prev, curr) => prev + curr)/ rig.fanPerCard.length) }</Col>
                    <Col className='column' sm={.5} >{ rig.poolSwitches }</Col>
                    <Col className='column' sm={1} >{ rig.minerVersion }</Col>
                </Hidden>
                <Col className='column right' xs={3} sm={1} >{ Math.floor(rig.totalTimeInMinutes / 60) } : { rig.totalTimeInMinutes % 60  }</Col>
            </Row>
        );
    }
};
