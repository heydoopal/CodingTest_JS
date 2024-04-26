function solution(array, height) {
    let ans = array.filter(item => item > height)   
    return ans.length
}



