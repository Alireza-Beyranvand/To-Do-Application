
 
import React  from 'react';
import Clock from 'react-live-clock';

class Cl extends React.Component {
    render() {
        return(
<Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} />
        )
      
    }
};

export default Cl