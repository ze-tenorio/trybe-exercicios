// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];

const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = () => students.map((element, index) => {
        const studentObj = {
            name: element,
            grades: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
        }
        return studentObj;
})

console.log(studentAverage());