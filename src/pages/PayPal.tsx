import React, { useRef, useEffect } from 'react';

declare global {
  interface Window {
    paypal: {
      buttons: (options: any) => {
        render: (element: HTMLDivElement) => void;
      };
    };
  }
}

const PayPal = () => {
  const paypal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.paypal && window.paypal.buttons) {
      window.paypal
        .buttons({
			createOrder:(data:any,actions:any,err:any)=>{
				return actions.order.create({
					intent: "CAPTURE",
					purchase_units:[
						{
							description: "Rycho bije miske",
							amount:{
								currency_code:"PLN",
								value: 0.01
							}
						}
					]
				})
			},
			onApprove:async(data:any,actions:any)=>{
				const order = await actions.order.capture();
				console.log(order);
				
			},onError:(err:any)=>{
				console.log(err);
			}
          // PayPal buttons configuration options can go here
        })
        .render(paypal.current!); // Added non-null assertion operator
    }
  }, []);

  return (
    <div>
      <div ref={paypal}>Paypal managment</div>
    </div>
  );
};

export default PayPal;
