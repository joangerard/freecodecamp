function studentMsg(totalScores, studentScore) {
  const averageGrades = getAverage(totalScores);
  const studentGrade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore)? "passed": "failed";
  const msg = `Class average: ${averageGrades}. Your grade: ${studentGrade}. You ${passed} the course.`;

  return msg;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));