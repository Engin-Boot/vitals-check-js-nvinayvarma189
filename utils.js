function isBPMOk(bpm){
    return !(bpm < 70 || bpm > 150);
}

function isSpo2Ok(spo2){
    return !(spo2 < 90)
}

function isRespRateOk(respRate){
    return !(respRate <30 || respRate > 95);
}

module.exports = {isBPMOk, isSpo2Ok, isRespRateOk};