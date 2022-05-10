import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CreditCard(props) {
    const { cardNumber = '', cardIssuedDate = '', cardExpiryDate = '', cardCvv = '', cardType = '' } = props;

    let providerImage = require('../Assets/Icons/icons8-visa-48.png');
    // let bgImg = 'linear-gradient(to right bottom, #98bcf2, #a6abe5, #b39ad3, #bd89bc, #c27aa1)';
    if (cardType === 'visa') {
        providerImage = require('../Assets/Icons/icons8-visa-48.png');;
    }
    else if (cardType === 'mastercard') {
        providerImage = require('../Assets/Icons/icons8-mastercard-logo-48.png');;
    }
    else if (cardType === 'jcb') {
        providerImage = require('../Assets/Icons/icons8-jcb-40.png');;
    }

    return (
        <Card style={{ minWidth: '30%', maxHeight: '30vh', borderRadius:'20px', marginTop:'2%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cardNumber.split('').map((ch, i) => {
                        if (i++ % 4 == 0)
                            return ` ${ch}`;
                        else
                            return ch;
                    })}
                </Typography>
                <Typography variant="body2" color="text.primary" style={{ display: 'inline-block', margin: '10%' }}>
                    Issued : {cardIssuedDate}
                </Typography>
                <Typography variant="body2" color="text.primary" style={{ display: 'inline-block', margin: '10%' }}>
                    Expiry : {cardExpiryDate}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <CardMedia
                        style={{ width: 'unset' }}
                        component="img"
                        image={providerImage}
                        alt="Payment provider"
                    />
                </div>
            </CardContent>

        </Card>
    );
}
