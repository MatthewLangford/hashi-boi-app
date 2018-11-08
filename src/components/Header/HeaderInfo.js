import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { object, array } from 'prop-types';

import './HeaderInfo.css';
import '../RigListContainer/RigListContainer.css';


const HeaderInfo = ({ totals , rigInfo }) => {
    //const { totals, rigInfo } = props;

    HeaderInfo.propTypes = {
        totals : object,
        rigInfo : array
    }

    return (
        <Container className='header-info-container'>
        <Row>
            <Col className='column totals totals-header' xs={6} sm={3} ><strong>Total Hashrate</strong></Col> 
            <Hidden xs>
                <Col className='column totals totals-header' sm={3} ><strong>Total Shares</strong></Col>
                <Col className='column totals totals-header' xs={4} sm={3} ><strong>Shares Last Hour</strong></Col>
            </Hidden>
            <Col className='column totals totals-header' xs={6} sm={3} ><strong>Active Rigs</strong></Col>
        </Row> 
        <Row>
            <Col className='column totals' xs={6} sm={3} >{ totals.totalHashrate / 1000 }mh/s</Col>
            <Hidden xs>
                <Col className='column totals' sm={3} >{ totals.totalAcceptedShares }/{ totals.totalRejectedShares }/{ totals.totalInvalidShares }</Col>  
                <Col className='column totals' xs={4} sm={3} >{ totals.totalTimeInMinutes && 
                                                                Math.floor(totals.totalAcceptedShares / (totals.totalTimeInMinutes / 60))}</Col>
            </Hidden>
            <Col className='column totals' xs={6} sm={3} > { rigInfo.length > 1 && rigInfo.filter(rig => rig.totalTimeInMinutes !== 'error').length }</Col>  
        </Row>   
        </Container>
    );
};
export default HeaderInfo;