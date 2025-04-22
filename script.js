let textInput = document.getElementById("textInput");
let output = document.getElementById("output");

function outputText() {
  const text = textInput.value;
  const words = text.split(/\s+/); //Split teilt einen String in Teile und das in der Klammer ist für mindestens 1 Leerzeichen

  let longestWord = "";

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  const highlightedText = words.map(word => {
    if (word === longestWord) {
        return `<span class="highlight">${word}</span>`;
      } 
      else 
      {
        return word;
      }
  }).join(" "); //nimmt die Wörter zusammen und macht ein Leerzeichen

  output.innerHTML = highlightedText;
}

textInput.addEventListener("input", outputText);
