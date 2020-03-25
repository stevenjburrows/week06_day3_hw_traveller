const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => journey.startLocation);
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => journey.endLocation);
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const byTransport = this.journeys.filter((journey) => journey.transport === transport);
  return byTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const overDistance = this.journeys.filter((journey) => journey.distance > minDistance);
  return overDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((total, journey) => {
  return total + journey.distance
}, 0 )
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportMethods = this.journeys.map((journey) => journey.transport);
  const set = new Set(transportMethods);  
  const unique = Array.from(set);
  return unique
};


module.exports = Traveller;
