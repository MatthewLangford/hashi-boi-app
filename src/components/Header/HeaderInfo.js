import React from 'react';

const HeaderInfo = (props) => {
    return (
        <div className='header-info'>
            <span>Total Hashrate: { props.totalHashrate } </span><span>Total Shares Accepted: { props.totalAcceptedShares } </span>
            <span>Shares Rejected Shares : { props.totalRejectedShares } </span>
        </div>
    );
}




export default HeaderInfo;