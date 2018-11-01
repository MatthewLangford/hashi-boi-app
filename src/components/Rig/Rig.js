import React from 'react';



const Rig = props => {
    return (
    <div>
        <span>Rig Number: { props.rig.rigNumber } </span><span>Total Hashrate: { props.rig.hashrateTotal } </span><span>Time active: { props.rig.totalTimeInMinutes } minutes</span>
    </div>
    );
}


export default Rig;