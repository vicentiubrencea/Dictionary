let dictionary = [];

function addWord() {
    let wordValue = document.getElementById("word").value;
    if (wordValue.trim().length != 0) {
        dictionary.push(wordValue.trim());
        document.getElementById("word").value = '';
    } else {
        document.getElementById("message").innerHTML = "Please type a word";
    }
}

function searchWord() {
    let findWordValue = document.getElementById("findWord").value;
    if (findWordValue.trim().length == 0) {
        document.getElementById("message").innerHTML = "Please type a word";    
    } else if (dictionary.includes(findWordValue.trim())) {
        document.getElementById("message").innerHTML = "The word was found"; 
    } else {
        document.getElementById("message").innerHTML = "The word was not found";
    }
    document.getElementById("findWord").value = '';
}