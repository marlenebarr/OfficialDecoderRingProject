// Write your tests here!
const polybiusModule = (function () {
  
  function polybius(input, encode = true) {
   
    const encoder = {
      a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55",
    };
    
    const decoder = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h",
      42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z"
    };
    
    input = input.split("");
    if (encode) {
      return input.reduce((result, char) => {
        char = char.toLowerCase();
        const code = char.charCodeAt();
        if (code >= 97 && code <= 122) {
          return `${result}${encoder[char]}`;
        }
        return `${result}${char}`;
      }, "");
    }
    
    const result = input.reduce((acc, char) => {
      return char !== " " ? acc + 1: acc;
    }, 0);
    
    if(result % 3 !== 0) return false;
    let newString = "";
    
    for(let i = 0; i < input.length; i += 3){
      if(input[i] !== " "){  
      const encoded = input[i] + input [i + 4];  
      const decoded = decoder[encoded];  
      newString = `${newString}${decoded}`;
      } else {
        i += 3;
        const encoded = input[i] + input[i + 5];
        const decoded = decoder[encoded];
        newString = `${newString} ${decoded}`;
      }
    }
    return newString;
  }
  return {
    polybius,
  };
})();

