const NM_PER_KM = 1.852;

function getDistanceFromLatLonInNM(lat1,lon1,lat2,lon2) {
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1);
  let a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c; // Distance in km
  return d / NM_PER_KM;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function calculateDistanceFromListLatLonNM(locations) {
    let lastFix = locations[0];
    return locations.reduce((sum, val) => {
        const newSum = sum + getDistanceFromLatLonInNM(lastFix.lat, lastFix.lng, val.lat, val.lng)
        lastFix = val;
        return newSum;
    }, 0)
}

export default calculateDistanceFromListLatLonNM;
