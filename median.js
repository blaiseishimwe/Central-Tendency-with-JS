function getMedian(arr) {
  let sortedData = arr.sort((a, b) => b - a);
  let numberOfObservations = arr.length;
  let median;
  console.log(sortedData);

  if (numberOfObservations % 2 == 1) {
    median = sortedData[(numberOfObservations + 1) / 2 - 1];
  } else {
    median =
      (sortedData[numberOfObservations / 2 - 1] +
        sortedData[numberOfObservations / 2]) /
      2;
  }

  console.log(`the median is ${median}`);

  return median;
}

getMedian([4, 2, 3, 8, 10, 5, 8]);

getMedian([1, 4, 2, 3, 8, 10, 5, 8]);
