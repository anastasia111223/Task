let courses = [ 
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] }, 
    { name: "Courses in China", prices: [50, 250] }, 
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] }, 
    { name: "Courses in France", prices: [null, null] }, 
];
let requiredRange1 = [null, 200]; 
let requiredRange2 = [100, 350]; 
let requiredRange3 = [200, null];
// Поиск по диапазону
function findCourses(num) {
    return  courses.filter((course) => (num[1]===null||(course.prices[1]<=num[1]&&course.prices[1]!==null))&&course.prices[0]>=num[0]);
}
console.log(findCourses(requiredRange1));
console.log(findCourses(requiredRange2));
console.log(findCourses(requiredRange3));
// Сортировка по минимальной цене
let cSort = courses.sort((a,b)=> {
    if (a.prices[0]<b.prices[0]) return -1;
    if (a.prices[0]>b.prices[0]) return 1;
    if (a.prices[1]===null&&b.prices[1]!==null) return 1;
    if (a.prices[1]!==null&&b.prices[1]===null) return -1;
})
console.log(cSort);