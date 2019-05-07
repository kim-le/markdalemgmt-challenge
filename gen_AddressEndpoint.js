const fetch = require("node-fetch");

fetch('https://api.blockcypher.com/v1/btc/test3/addrs', {'method': 'POST'})
    .then((result) => result.json())
    .then((data) => console.log(data));