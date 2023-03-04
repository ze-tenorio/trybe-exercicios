const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentScore = (rightAns, studentAns) => {
    if (studentAns === rightAns) return 1;
    if (studentAns === 'N.A') return 0;
    return -0.5;
}

const examinator = (rightAnsArr, studentAnsArr, callback) => {
    let score = 0
    for (let index in rightAnsArr) {
        score += callback(rightAnsArr[index], studentAnsArr[index]);
    }
    return score;
}

console.log(examinator(RIGHT_ANSWERS, STUDENT_ANSWERS, studentScore));