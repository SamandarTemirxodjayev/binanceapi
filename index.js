const axios = require('axios');
const crypto = require('crypto');

async function getSpotBalance(apiKey, secretKey) {
 const timestamp = Date.now();
 const signature = crypto
    .createHmac('sha256', secretKey)
    .update(`${timestamp}`)
    .digest('hex');

 const url = 'https://api.binance.com/api/v3/account';
 const params = {
    timestamp,
    signature,
 };

 const headers = {
    'X-MBX-APIKEY': apiKey,
 };

 try {
    const response = await axios.get(url, { params, headers });
    const balanceData = response.data.balances;

    // filter out spot balance data
    const spotBalanceData = balanceData.filter(
      (data) => data.asset !== 'MATIC' && data.asset !== 'XRP'
    );

    // print balance data
    console.log('Spot Balance Data:', spotBalanceData);
 } catch (error) {
    console.error('Error:', error);
 }
}

// usage
const apiKey = 'lpW2CW5FOmb9aSd6AcXKV2NktJD0ZaGvIMFWNtZPrjPdINncHCkWPwmvI2t1je3i';
const secretKey = 'UjXiXouKmVWViYrqLm4ljyTrC8BwGy3iDyltL4RYZCpflYQeVRhfgzeglToM7wRr';
getSpotBalance(apiKey, secretKey);