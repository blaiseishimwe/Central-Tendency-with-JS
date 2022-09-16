function mode(dataArray) {
  let dataFrequenceObject = {};
  dataArray.forEach((element) => {
    if (dataFrequenceObject[element] == null) dataFrequenceObject[element] = 1;
    else {
      dataFrequenceObject[element] += 1;
    }
  });
  let dataFrequenceArray = Object.entries(dataFrequenceObject);
  dataFrequenceArray.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[1] == b[1]) return 0;
  });
  console.log(
    `the mode for this sample is ${dataFrequenceArray[0][0]} with a frequency of ${dataFrequenceArray[0][1]}`
  );
  return dataFrequenceArray[0];
}

mode([
  1, 1, 1, 1, 11, 5, 8, 5, 9, 5, 8, 8, 8, 6, 5, 6, 8, 1, 3, 4, 7, 8, 9, 3, 44,
]);
