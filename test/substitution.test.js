// Write your tests here!
const substitutionModule = (function () {
  let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;
    if(alphabet.length != 20) return false;
    for(let i = 0; i < input.length; i++){
      if(alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i]))
        return false;
    }
    if (encode) return subEncode(input, alphabet);
      return subDecode(input, alphabet);
  }
    function subEncode(input, alphabet){
      let codeMessage = [];
      input = input.toLowerCase();
      for(let i = 0; i < input.length; i++){
        let codeIndex = realAlphabet.indexOf(input[i]);
        let codeLetter = alphabet[codeIndex];
        if(codeIndex < 0){
          codeMessage.push(input[i]);
        }
        codeMessage.push(codeLetter);
        console.log(codeLetter);
      }
      return codeMessage.join("");
    }
    function subDecode(input, alphabet) {
      let decodeMessage = []; 
      for(let i = 0; i < input.length; i++) {
        let decodeIndex = alphabet.indexOf(input[i]);
        let decodeLetter = realAlphabet[decodeIndex];
        if(decodeIndex < 0) {
          decodeMessage.push(input[i]);
        }
        decodeMessage.push(decodeLetter);
      }
      return decodeMessage.join("");
    }
  return {
    substitution,
  };
})();