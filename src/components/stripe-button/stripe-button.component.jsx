import React from "react";
import StripeCheckout from "react-stripe-checkout";
import crwnLogo from '../../assets/crown.svg'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KE4f1SFI1YcC39PVCgrUjwKp34R75hC9YNiPCa6emYGlvIbtTUyxy9X8qcyH4IthGxrlfWjnOusdHsr43JSe9J0006Onu5Br9';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
     
    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image={crwnLogo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    )
};

export default StripeCheckoutButton;