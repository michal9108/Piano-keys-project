// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event) {
 event.target.style.backgroundColor = "6df0c2";
}

const keyReturn  = function(event) {
 event.target.style.backgroundColor = "";
}

// Write a named function with event handler properties
let eventAssignment = function(note)  {
note.onmousedown = function() {
 keyPlay(event);
  }
note.onmouseup = function() {
 keyReturn(event);
  }
} 


// Write a loop that runs the array elements through the function
notes.forEach(eventHandlerProperties);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button

nextOne.onClick = function () {

  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').InnerHTLM = 'D';
  document.getElementById('letter-note-sex').InnerHTLM = 'C';

}

// Write anonymous event handler property and function for the second progress button

nextTwo.onClick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').InnerHTLM = 'DEAR';
  document.getElementById('word-six').InnerHTLM = 'FRI-';
  document.getElementById('word-optional').InnerHTLM = '-END';
  lastLyric.style.display ='inline-block';

document.getElementById('letter-note-three').InnerHTLM = 'G';
document.getElementById('letter-note-four').InnerHTLM = 'E';
document.getElementById('letter-note-five').InnerHTLM = 'C';
document.getElementById('letter-note-six').InnerHTLM = 'B';

}
// Write anonymous event handler property and function for the third progress button

nextThree.onClick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;

   document.getElementById('word-one').InnerHTLM = 'DEAR';
    document.getElementById('word-two').InnerHTLM = 'PY';
     document.getElementById('word-three').InnerHTLM = 'BIRTH';
      document.getElementById('word-four').InnerHTLM = 'DAY';
       document.getElementById('word-five').InnerHTLM = 'TO';
        document.getElementById('word-six').InnerHTLM = 'YOU!';

          

document.getElementById('letter-note-one').InnerHTLM = 'F';
document.getElementById('letter-note-two').InnerHTLM = 'F';
document.getElementById('letter-note-three').InnerHTLM = 'E';
document.getElementById('letter-note-four').InnerHTLM = 'C';
document.getElementById('letter-note-five').InnerHTLM = 'D';
document.getElementById('letter-note-six').InnerHTLM = 'C';

lastLyric.style.display ='none';

}



// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}