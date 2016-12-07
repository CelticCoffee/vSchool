$(document).ready(function() {

var buttonDOM = document.querySelectorAll('.auctionBox');
var titleDOM = document.querySelectorAll('.boxTitle');

for (var i = 0; i < buttonDOM.length; i ++){
  buttonDOM[i].dataID = i;
  titleDOM[i].dataID = i;
  buttonDOM[i].addEventListener('click', openTextBox, false);
  titleDOM[i].addEventListener('click', openTextBox, false);
}

document.addEventListener("click", findCoords, false);

function findCoords(event){
  var x = event.clientX;
  var y = event.clientY;
  console.log(x, y)
}

var textArray = document.querySelectorAll('.auctionText');

for (var j = 0; j < textArray.length; j++){
  textArray[j].dataID = j;
  // console.log(textArray[j]);
}


function openTextBox(event){
  var activeButton = (event.target);
  console.log(event.clientX);
  console.log(event.clientY);


  for(var k = 0; k < textArray.length; k++) {
    if (activeButton.dataID == textArray[k].dataID) {
      var textContainer = document.getElementById('textBoxOpen');
      textContainer.style.display = 'block';
      textArray[k].style.display = 'block';
      // window.scroll(476, 251);
      window.scroll(901, 357);

      }

    else {
      textArray[k].style.display = 'none';

    }
  }

}






});
