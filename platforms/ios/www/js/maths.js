function findPFromRMS(rmsVolts, load)
{
    return Math.round((((rmsVolts * rmsVolts) / load) * 100)) / 100;
}

function findPFromPeak(peakVolts, load)
{
    var rmsVolts = peak2RMS(peakVolts);
    return findPFromRMS(rmsVolts, load);
}

function findRMSFromP(p, load)
{
    return Math.round(Math.sqrt(p * load) * 100) /100;
}

function findPeakFromP(p, load)
{
    return rms2Peak(findRMSFromP(p, load));
}

function peak2RMS(peakVolts)
{
    return Math.round(0.3535 * peakVolts);
}

function rms2Peak(rmsVolts)
{
    return Math.round(rmsVolts * (1.414 * 2));
}