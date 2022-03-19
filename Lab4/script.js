

function chatroomStatus(arr){
    count = 0;
    for(let i = 0 ; i<arr.length;i++){
        count ++
    }
    if(count == 0){
        return ("No one online")
    } else if (count == 1){
        return (arr[0] + " online")
    } else if ( count == 2){
        return (arr[0] + "and" + arr[1] + " online")
    } else if(count >2){
        return (arr[0] + ", "+ arr[1] +" and "+ (count-2)+ " more online")
    }
}

function spellingword(word){
    let result = [];
    for(let i =1;i<=word.length;i++){
        result.push(word.slice(0,i))
    }
    return result;
}

function findByIndex(arr,idx){
    let name =""
    let stretchArr= []
    for(let i of arr){
        stretchArr += stretchArr.concat(i)
    }

    for(let i of idx){
        name += stretchArr[i-1]
    }
    return name;
}

function fruiSalad(arr){
    let result = [];
    for(let i of arr){
        let half = Math.floor(i.length/2);
        result.push(i.slice(0,half),i.slice(half))
    }
    return result.sort().join('')
}


function perimeter(arr){
    let result;
    for(let i of arr){
        for(let j = 0; j<i.length;j++){
            i[j]
        }
    }
}

function calculateScore(arr){

    
}


