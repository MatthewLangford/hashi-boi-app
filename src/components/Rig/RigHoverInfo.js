import React from 'react';

import './Rig.css';

const RigHoverInfo = ({info, type}) => {

    const typeString = (type === 'hashrate' && 'mh/s') || (type === 'temp' && 'c') || (type === 'fan' && '%') || '';
    return (
        <div className={`${type}-div hover-div`}>
            {info.map((item, index) => `gpu${index}:${item}${typeString} `)}
        </div>
    )
}

export default RigHoverInfo;