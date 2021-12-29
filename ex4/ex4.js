const ingExtractor = (input) => {
    return input.replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter((word) => {
        let char = word.toLowerCase().replace("ing", "");

        //delete a, e , i , o , u with RegEx
        //when delete ing and word does not have a, e , i , o , u this word does not have mean
        
        if (char.length === char.replace(/[aeiou]/g, "").length) {
            return false;
        }
        if (word.toLowerCase().includes("ing")) {
            return true;
        }
    });
}

console.log(ingExtractor("coming bringing Letting sing"));
console.log(ingExtractor("going Ping, king sHrink dOing"));
console.log(ingExtractor("zing went ring, ding wing SINk"));
