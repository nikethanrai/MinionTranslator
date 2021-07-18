var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output')

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + '?' + 'text=' + text
};

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText= json.contents.translated ;
            outputDiv.innerText=translatedText;
            console.log(json)
        })
        .catch(errorHandler)


};
function errorHandler(error){
    console.log("error occured",error);
    alert('something is wrong  with server')
}

btnTranslate.addEventListener('click', clickHandler)