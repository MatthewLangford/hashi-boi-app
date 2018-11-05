import React from 'react';

import './HeaderInfo.css';

const HeaderInfo = (props) => {
    const { totals } = props;
    return (
        <div className='header-info'>
            <span><h3>Total Hashrate:<br/> { totals.hashrate } </h3></span><span><h3>Total Shares A/R/I:<br/> { totals.acceptedShares }/{ totals.rejectedShares }/{ totals.invalidShares } </h3></span>
        </div>
    );
};
export default HeaderInfo;