
let goodMood = false;
function repairTapeRecorder(tapeId) {
  return new Promise((resolve, reject) => {
    if (goodMood) {
      console.log("Repair man is in good mood");
      resolve({
        tapeId: tapeId,
        name: "Good mood guy",
      });
    } else {
      console.log("repair man was in bad mood");
      reject({
        tapeId: tapeId,
        name: "Bad mood guy",
      });
    }
  });
}

repairTapeRecorder("shahz")
  .then((ourArg) => {
    console.log("My tape was repaired today.", ourArg);
  })
  .catch((ourArg) => {
    console.log("My tape was not repaired", ourArg);
  }); 