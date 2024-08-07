import express from 'express';
import cors from 'cors';
import { longestWord, shortestWord, wordLengths } from './wordGame.js';
import { totalPhoneBill } from './totalBill.js';
import {enoughAirtime} from './enoughAirtime.js';



// Create a new express application instance
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Create a default route

        app.get('/api/word_game', function (httpRequest, httpResponse) {
            const sentence = httpRequest.query.sentence;
       
            httpResponse.json ({
                longestWord : longestWord(sentence),
                shortestWord :shortestWord(sentence),
                sum : wordLengths(sentence)
            });
        });


app.post('/api/phonebill/total', function (httpRequest, httpResponse) {
    const total = httpRequest.body.total;
   const billAmount = totalPhoneBill(total);
   httpResponse.json ({
    bill: billAmount
    });
});


app.get('/api/phonebill/prices', function (httpRequest, httpResponse) {

    httpResponse.json ({
    
        call : 2.75,
        sms : 0.65
       
    });
});


app.post('/api/phonebill/price', function (httpRequest, httpResponse) {
    const {type, price} = httpRequest.body;

    let message;

    if (type === 'call') {
        message = `The call price was set to ${price}`;
    } else if (type === 'sms') { 
        message = `The sms price was set to ${price}`;
    } else {
        message = 'Invalid type';
    }
    httpResponse.json({
        status: 'Success',
        message: message
    });
});
    

app.post('/api/enough', function (httpRequest, httpResponse) {
    const bill = httpRequest.body.usage;
    const available = httpRequest.body.available;
    const airtime = enoughAirtime (bill, available)
  
    httpResponse.json ({
        
         result: airtime
        
    });
});


// Start the server

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})