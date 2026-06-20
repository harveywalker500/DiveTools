export function CalculateMaxOperatingDepth(po2, fo2, units) {
  if (units === 'imperial') {
    return 33 * (po2 / fo2 - 1)
  }
  else if(units === 'metric'){
    return 10 * (po2 / fo2 - 1)
  }
}

export function GetGasType(fO2, fHe) {
  if (fO2 === 100) {
    return 'OXYGEN';
  } else if (fO2 === 21 && fHe === 0) {
    return 'AIR';
  } else if (fHe > 0) {
    return fO2 + '/' + fHe;
  } else if (fHe === 0 && fO2 !== 21) {
    return 'Nx' + fO2;
  } else {
    return 'N/A';
  }
}
