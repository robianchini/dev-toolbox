// BASE METERS

const mToKm = (value) => {
  return value / 1000;
};

const mToCm = (value) => {
  return value * 100;
};

const mToMm = (value) => {
  return value * 1000;
};

const mToIn = (value) => {
  return value * 39.37;
};

const mToFt = (value) => {
  return value * 3.28084;
};

const mToMi = (value) => {
  return value / 1609.344;
};

// BASE INCHES

const inToM = (value) => {
  return value * 0.0254;
};

const inToKm = (value) => {
  return value * 0.0000254;
};

const inToCm = (value) => {
  return value * 2.54;
};

const inToMm = (value) => {
  return value * 25.4;
};

const inToFt = (value) => {
  return value * 0.0833333;
};

const inToMi = (value) => {
  return value * 0.000015783;
};

// BASE FEETS

const ftToM = (value) => {
  return value * 0.3048;
};

const ftToKm = (value) => {
  return value * 0.0003048;
};

const ftToCm = (value) => {
  return value * 30.48;
};

const ftToMm = (value) => {
  return value * 304.8;
};

const ftToFt = (value) => {
  return value * 12;
};

const ftToMi = (value) => {
  return value * 0.000189394;
};

module.exports = {
  mToKm,
  mToCm,
  mToMm,
  mToIn,
  mToFt,
  mToMi,
  inToM,
  inToKm,
  inToCm,
  inToMm,
  inToFt,
  inToMi,
  ftToM,
  ftToKm,
  ftToCm,
  ftToMm,
  ftToFt,
  ftToMi,
};
