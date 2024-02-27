const apiKey = 'YOUR_API_KEY_HERE';

fetch('https://paper-api.alpaca.markets/v2/positions', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    "APCA-API-KEY-ID": "PKWASDC8D021EL9GQE3X",
    "APCA-API-SECRET-KEY" : "YjuN1TqRTIf6d81aD3SO7tshUAFssQXslGmU4nZ2"


  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
