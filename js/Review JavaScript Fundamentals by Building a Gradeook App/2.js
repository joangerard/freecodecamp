function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  if (score === 100) {
    return "A++";
  }

  if (score > 89) {
    return "A";
  }

  if (score > 79) {
    return "B";
  }

  if (score > 69) {
    return "C";
  }

  if (score > 59) {
    return "D";
  }

  return "F";
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));