import React, { Component } from 'react';
import  { Row, Col, Hidden } from 'react-grid-system';
import { object, bool } from 'prop-types';
import RigHoverInfo from './RigHoverInfo';

import './Rig.css';

export default class Rig extends Component {
    state = {
        rig: {},
        hashratePopup : false,
        fanPopup: false,
        tempPopup: false
    }

    static propTypes = {
        rig: object,
        hashratePopup : bool,
        tempPopup: bool,
        fanPopup: bool
    };
     
    static defaultProps = {
        rig: {},
        hashratePopup: false,
        tempPopup: false,
        fanPopup: false
    };

    handleMouseEnter = (e, type) =>{
        e.preventDefault();
        this.setState((type === 'hashrate' && { hashratePopup: true }) 
                       || (type === 'temp' && { tempPopup: true })
                       || (type === 'fan' && { fanPopup: true }));
        
    }

    handleMouseLeave = (e, type) => {
        e.preventDefault(e);
        this.setState((type === 'hashrate' && { hashratePopup: false }) 
        || (type === 'temp' && { tempPopup: false })
        || (type === 'fan' && { fanPopup: false }));
    }

    componentDidMount() {
        this.setState({rig: this.props.rig});
    }

    componentWillReceiveProps() {
        this.setState({rig: this.props.rig});
    }

    
    render () {
        const { rig, hashratePopup, tempPopup, fanPopup } = this.state;
        const errorRig = rig.totalTimeInMinutes === 'error';
        const totalTimeFormatted = errorRig ? 0 : `${ Math.floor(rig.totalTimeInMinutes / 60) }: ${ rig.totalTimeInMinutes % 60 }`;
        
        return (
            <Row className={ `${ ( rig.avgSharesPerHour >= 300 && !errorRig ) && 'good'} ${ rig.avgSharesPerHour < 300 && 'warning'}  ${ errorRig && 'error'}`}>
                <Col className='column' xs={2.5} sm={1} >{ rig.rigNumber || 0 }</Col>
                <Col className='column right' xs={2.5} sm={1} >{ `${ rig.hashrateTotal ? ((rig.hashrateTotal / 1000).toFixed(1)) : 0 }mh` }</Col>
                <Col className='column right' xs={4} sm={1.5} >{ rig.acceptedShares  || 0 }/{ rig.rejectedShares || 0 }/{ rig.invalidShares || 0}</Col>
                <Hidden xs>
                    <Col className='column' sm={1}>{ rig.avgSharesPerHour || 0 }</Col>

                    <Col onMouseEnter={ e => this.handleMouseEnter(e, 'hashrate') } onMouseLeave={ e => this.handleMouseLeave(e, 'hashrate') } className='column hover-column'>{ `AVG Hashrate:  ${ rig.avgHashratePerCard  ? ((rig.avgHashratePerCard / 1000).toFixed(1)) : 0 }mh` } </Col>
                                        { hashratePopup && <RigHoverInfo info={ rig.hashratePerCard || []} type='hashrate' />}

                    <Col onMouseEnter={ e => this.handleMouseEnter(e, 'temp') } onMouseLeave={ e => this.handleMouseLeave(e, 'temp') } className='column'>{ `AVG Temp: ${ rig.avgTempPerCard || 0 }c` }</Col>
                                        { tempPopup && <RigHoverInfo info={ rig.tempPerCard || [] } type='temp' />}

                    <Col onMouseEnter={ e => this.handleMouseEnter(e, 'fan') } onMouseLeave={ e => this.handleMouseLeave(e, 'fan') } className='column'>{ `AVG Fan: ${ rig.avgFanPerCard || 0 }%` }</Col>
                                        { fanPopup && <RigHoverInfo info={ rig.fanPerCard || [] } type='fan' />}

                    <Col className='column' sm={.5} >{ rig.poolSwitches || 0 }</Col>
                    <Col className='column' sm={1} >{ rig.minerVersion || 0 }</Col>
                </Hidden>
                <Col className='column right' xs={3} sm={1} >{ totalTimeFormatted }</Col>
            </Row>
        );
    };
};
