// const APCA-API-KEY-ID = "PKUHJ7NZEG8V5L8MXC8Q"

import Alpaca from "@alpacahq/alpaca-trade-api";
// const axios = require('axios');
// const Alpaca = require(‘@alpacahq/alpaca-trade-api’);




const alpacaApiKey = 'PKWASDC8D021EL9GQE3X';
const alpacaApiSecret = 'YjuN1TqRTIf6d81aD3SO7tshUAFssQXslGmU4nZ2';


// Set up Axios instance with your API key

// const getPositions = async () => {
//     try{
        
//         let response = await alpacaApi.get('/v2/account');
//         let responseData = await response.json()
//         console.log(responseData)

//     }
//     catch(err){
//         console.log(err.message)
//     }
// }

// getPositions()


const alpaca = new Alpaca({
  keyId: alpacaApiKey,
  secretKey: alpacaApiSecret,
  paper: true
});
async function printAccount() {
  const account = await alpaca.getAccount();
  console.log(account);
}
printAccount();
