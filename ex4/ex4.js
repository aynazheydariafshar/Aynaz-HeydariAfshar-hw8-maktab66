const ingExtractor = (input) => {
    return input.replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter((word) => {
        let char = word.toLowerCase().replace("ing", "");
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
