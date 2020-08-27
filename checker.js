const expect = require('chai').expect;
const {isBPMOk, isSpo2Ok, isRespRateOk} = require('./utils');

function vitalsAreOk(bpm, spo2, respRate) {
    return (isBPMOk(bpm) && isSpo2Ok(spo2) && isRespRateOk(respRate));
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

console.log('checker is done');
