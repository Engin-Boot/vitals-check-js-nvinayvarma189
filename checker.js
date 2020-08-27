const expect = require('chai').expect;
const {isBPMOk, isSpo2Ok, isRespRateOk} = require('./utils');

function vitalsAreOk(bpm, spo2, respRate) {
    return (isBPMOk(bpm) && isSpo2Ok(spo2) && isRespRateOk(respRate));
}

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;

expect(vitalsAreOk(20, 95, 70)).to.be.false; // isBPMOk fails
expect(vitalsAreOk(75, 55, 70)).to.be.false; // isSpo2Ok fails
expect(vitalsAreOk(75, 95, 25)).to.be.false; // isRespRateOk fails

expect(vitalsAreOk(20, 55, 70)).to.be.false; // isBPMOk and isSpo2Ok fail
expect(vitalsAreOk(20, 95, 25)).to.be.false; // isBPMOk and isRespRateOk fail
expect(vitalsAreOk(75, 55, 25)).to.be.false; // isSpo2Ok and isRespRateOk fail

expect(vitalsAreOk(20, 55, 25)).to.be.false; // isBPMOk and isSpo2Ok and isRespRateOk fail





console.log('checker is done');
