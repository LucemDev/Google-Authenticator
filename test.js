const TOTP = require('./totp');

const key = "XXXXXXXXXXXXXXXX"
const time = 30;

const OTP = new TOTP(key, time);
console.log(`OTP Code: ${OTP.getToken()}\nRemaining Time: ${OTP.getRemainingSeconds()}`);