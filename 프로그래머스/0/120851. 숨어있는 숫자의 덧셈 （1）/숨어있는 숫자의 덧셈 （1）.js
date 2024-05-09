function solution(my_string) {
    let numbers = my_string.match(/\d/g);
    return numbers.reduce((sum, num) => sum + Number(num), 0);
}