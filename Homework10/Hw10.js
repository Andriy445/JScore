//task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

//task 2

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
const {
  names: [, name2, , name4],
  ages: [, age2, , age4]
} = data;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


// task 3


function mul(...data) {
  let result = 1;
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (Number.isInteger(data[i])) {
      result *= data[i];
      counter++;
    }
  }
  if (counter > 0) {
    return result;
  } else {
    return 0;
  }
}

console.log(mul(1, "str", 4, 3, true));
console.log(mul(null, "str", false, true));



//task 4

  let server = {
    data: 0,
    convertToString: function (calback) {
      calback (()=> {
        return this.data + '';
      });
    }
  };
  let client ={
    server: server,
    result: "",
    calc: function(data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function(){
      return (calback => {
        this.result = calback();
      });
    }
  };
  client.calc(123);
  console.log (client.result);
  console.log (typeof client.result);

//task 5 

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder (keysArray , valuesArray) {
  const map = new Map();
for (let i = 0 ; i < keys.length; i++){
map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}


let map = mapBuilder(keys, values);
console.log(map.size); 
	console.log(map.get(2)); 
