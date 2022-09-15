function arithmeticMean(arr) {
  let sumOfObservations = 0;
  let numberOfObservations = arr.length;
  let arithmeticMean;
  for (i of arr) {
    sumOfObservations += i;
  }

  arithmeticMean = sumOfObservations / numberOfObservations;

  console.log(arr);
  console.log(`The arithmetic mean for the observations is ${arithmeticMean}`);

  return arithmeticMean;
}

arithmeticMean([2, 4, 8, 6]);
