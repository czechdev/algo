const answer = arr => {
    let lengArr = []
    let resultArr = []
    arr.sort((a, b) => a - b)
    let leng = 1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            leng = leng + 1
        }
        else {
            lengArr.push(leng)
            leng = 1
        }
    }
    for (let j = 0; j < lengArr.length; j++) {
        if (lengArr[j] > 1) {
            resultArr.push(arr.splice(0, lengArr[j]))
        } 
        else if (lengArr[j] === 1) {
            resultArr.push(arr[0])
            arr.shift()
        }  
    }
    return resultArr
}
