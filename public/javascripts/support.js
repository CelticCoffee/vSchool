$(document).ready(function() {

var buttonDOM = document.querySelectorAll('.auctionBox');
var titleDOM = document.querySelectorAll('.boxTitle');

for (var i = 0; i < buttonDOM.length; i ++){
  buttonDOM[i].dataID = i;
  titleDOM[i].dataID = i;
  buttonDOM[i].addEventListener('click', openTextBox, false);
  titleDOM[i].addEventListener('click', openTextBox, false);
}

var textArray = document.querySelectorAll('.auctionText');

for (var j = 0; j < textArray.length; j++){
  textArray[j].dataID = j;
  console.log(textArray[j]);
}


function openTextBox(){
  var activeButton = (event.target);

  for(var k = 0; k < textArray.length; k++) {
    if (activeButton.dataID == textArray[k].dataID) {
      var textContainer = document.getElementById('textBoxOpen');
      textContainer.style.display = 'block';
      textArray[k].style.display = 'block';
      }

    else {
      textArray[k].style.display = 'none';

    }
  }
}






});
