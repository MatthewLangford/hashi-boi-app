import React from 'react';

import './HeaderInfo.css';

const HeaderInfo = (props) => {
    const { totals } = props;
    return (
        <div className='header-info'>
            <span><h3>Total Hashrate:<br/> { totals.totalHashrate } </h3></span><span><h3>Total Shares A/R/I:<br/>
             { totals.totalAcceptedShares }/{ totals.totalRejectedShares }/{ totals.totalInvalidShares } </h3></span>
        </div>
    );
};
export default HeaderInfo;