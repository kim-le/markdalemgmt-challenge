const fetch = require("node-fetch");

fetch('https://api.blockcypher.com/v1/btc/main/addrs/1DEP8i3QJCsomS4BSMY2RpU1upv62aGvhD/balance', {'method': 'GET'})
    .then((result) => result.json())
    .then((data) => console.log(data));