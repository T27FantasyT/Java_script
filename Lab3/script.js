const myFammily={
    Joel: 32,
	Fred: 44,
	Reginald: 65,
	Susan: 33,
	Julian: 13
}

function afterNYear(obj,n){
    let copy = {};

    for(let key in myFammily){
        copy[key] = myFammily[key]
        copy[key] = copy[key] + n;
    }
    return copy
}

const order = { "Shampoo": 50.99, "Rubber Ducks": 15.99 }

function freeShipping(order){
    let sum = 0;
    for(let key in order){
        sum = sum + order[key];
    }
    if(sum>50) return true; else return false;
}

const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

function nameScore(name){
    name = name.toUpperCase();
    let sum = 0;
    for(let i = 0; i<name.length;i++){
        sum = sum + scores[name.charAt(i)]
    }
    return sum

}

const obj = { a: 1, b: 2, c: 3 };

function invert(obj){
    let copy = {};
    for(let key in obj){
        copy[obj[key]] = key;
    }
    return copy;
}


const stolenItems = {
	tv: 30,
	skate: 20,
	stereo: 50,
}

function totalAmountLost(item){
    let totalLosts = 0;
    for(let key in  item){
        totalLosts += item[key]
    }
    if(totalLosts==0){
        console.log("Lucky you");
        
    }else console.log(totalLosts);
}


const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name){
    let check = false;
    for(let key in GUEST_LIST){
        if(name == key){
            console.log("Hi! I'm "+ [name] + ", and I'm from " +GUEST_LIST[key]+".")
            check = true;
        }
    }
    if(!check){
        "Hi! I'm a guest."
    }
}

function oldest(obj){
    let max = 0;
    let result = null;

for(let name in persons){
    if(persons[name]>max){
        max = persons[name];
        result = {[name] :max}
    }
    return result;
}
   
}

function reverseCase(str){
    let string = ""
    for(let i = str.length-1;i >= 0;i--){
        if(str[i]==str[i].toUpperCase()){
            str[i] = str[i].toLowerCase();
            string += str[i];
        } else {
            str[i] = str[i].toUpperCase()
            string += str[i]
        }
        console.log(string)
    }
    return string;
}

reverseCase("tHE fOX iS cOMING fOR tHE cHICKEN");
// BTVN" Tham khao string method, date-time,



