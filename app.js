function getData() {
    var place = document.getElementById("place").value;
    var name = document.getElementById("name").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;
    return [place, name, verb, adj, adverb]
    console.log([place, name, verb, adj, adverb]);
}