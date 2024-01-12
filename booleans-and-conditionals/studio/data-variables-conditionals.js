// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Too many astronauts")
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    console.log("Astronauts not ready")
    preparedForLiftOff = false
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    console.log("Weight limit exceeded")
    preparedForLiftOff = false
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log("Temperature outside of acceptbale temperature")
    preparedForLiftOff = false
} 

// add logic below to verify the fuel level is at 100%
if (fuelLevel < 100) {
    console.log("Fuel is too low")
    preparedForLiftOff = false
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    console.log("weather is too poor")
    preparedForLiftOff = false
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff = true) {
    console.log("Have a safe trip astronauts!")
}

console.log("date" + "=" + date);
console.log("time" + "=" + time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(fuelMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log("Have a safe trip astronauts!")