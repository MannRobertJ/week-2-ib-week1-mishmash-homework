function giveItBackLater(value, callback) {
  setTimeout(() => callback(value), 100);
}

function addSomePromises(somePromise) {
  return somePromise.then(value => value + value).catch(err => err + err + err);
}

/* I'm not sure if or where I should put reject in the returrned promise. 
But since the test works I decided to leave it. */
function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    giveItBackLater(value, value => resolve(value)); // The promise will wait 100ms then return value, then resolve with value. 
  });
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };
