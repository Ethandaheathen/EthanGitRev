function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;    


    document.getElementById("sentence").innerHTML = sentences(verb, adverb, person, adj, place);
}

function sentences(verb, adverb, person, adj, place) {
    sentenceArray = [`Today I had to ${verb} ${adverb}. But right in the middle of it, ${person} came with this ${adj} book and wanted to go to ${place}.`, `${person} was in ${place} trying to ${verb}. However, ${person} left a ${adj} shirt, while crying ${adverb}.`, `It's been a long time since ${person} decided to ${verb} in ${place}. What some people said was that ${person} screamed "This straberry is ${adj}!!" We thought ${person} went crazy!`]

    ranN = Math.floor(Math.random() * sentenceArray.length)
return sentenceArray[ranN]
}


var a = [1, 2, 4, 9]


var arr = {
    word: "dog"
    hint: "Company you keep at home"
},

