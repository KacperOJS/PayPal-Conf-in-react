import React, { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import PayPal from './PayPal';
const Profile = () => {
	const [checkout,setcheckout]=useState(false);
  return (
    <div>
		{checkout ? (
			<PayPal/>
		):(

		
      <button onClick={()=>{
		setcheckout(true);
	  }}>Checkout</button>
		)}
    </div>
  );
};

export default Profile;
