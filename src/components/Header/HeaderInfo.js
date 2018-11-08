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

    const activeRigs = rigInfo.length > 1 && rigInfo.filter(rig => rig.totalTimeInMinutes !== 'error').length,
          avgSharesPerHour = totals.totalTimeInMinutes && Math.floor(totals.totalAcceptedShares / (totals.totalTimeInMinutes / 60)),
          totalShares = `${ totals.totalAcceptedShares }/${ totals.totalRejectedShares }/${ totals.totalInvalidShares}`,
          totalHashrate = `${ ((totals.totalHashrate / 1000) / 1000).toFixed(3) }Gh/s`;


    return (
        <Container className='header-info-container'>
        <Row>
            <Col className='column totals totals-header' xs={6} sm={3} ><strong>Total Hashrate</strong></Col> 
            <Hidden xs>
                <Col className='column totals totals-header' sm={3} ><strong>Total Shares</strong></Col>
                <Col className='column totals totals-header' xs={4} sm={3} ><strong>AVG Shares/Hour</strong></Col>
            </Hidden>
            <Col className='column totals totals-header' xs={6} sm={3} ><strong>Active Rigs</strong></Col>
        </Row> 
        <Row>
            <Col className='column totals' xs={6} sm={3} >{ totalHashrate }</Col>
            <Hidden xs>
                <Col className='column totals' sm={3} >{ totalShares }</Col>  
                <Col className='column totals' xs={4} sm={3} >{ avgSharesPerHour }</Col>
            </Hidden>
            <Col className='column totals' xs={6} sm={3} > { activeRigs }</Col>  
        </Row>   
        </Container>
    );
};
export default HeaderInfo;