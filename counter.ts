/**
 * @description counter funtion with default value and destructuring concepts
 * @Author Rajmani
 * @param num 
 * @returns 
 */

const counter = (num: number = 0) => {

    const getNum = () => {
        return num;
    }

    const addNum = () => {
        num++;
    }

    return [getNum, addNum]
}

const [getA, nextA] = counter(1);

console.log(getA());
console.log(nextA());
console.log(getA());

const [getB, nextB] = counter(10);

console.log(nextB());
console.log(getA());
console.log(getB());
