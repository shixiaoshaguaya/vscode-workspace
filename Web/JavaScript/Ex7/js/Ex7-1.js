window.onload = function () {
  var oUl = document.getElementById('list');
  var oLi = oUl.getElementsByTagName('li');
  for (var i = 0; i < oLi.length; i++) {
    Edit(oLi[i]);
  }

  function Edit(li) {
    var oDiv = li.getElementsByTagName('div');
    var oSpan = li.getElementsByTagName('span')[0];
    var oInput = li.getElementsByTagName('input')[0];
    var oA = li.getElementsByTagName('a');
    oSpan.onclick = function () {
      if (oA[0].className == "img-light") {
        oDiv[0].style.display = 'none';
        oDiv[1].style.display = 'block';
        oInput.value = oSpan.innerHTML;
      }
    };
    oA[0].onclick = function () {
      if (oA[0].className == "img-light") {
        oA[0].className = "img-dark";
      } else {
        oA[0].className = "img-light";
      }
    };
    oA[1].onclick = function () {
      oDiv[0].style.display = 'block';
      oDiv[1].style.display = 'none';
      oSpan.innerHTML = oInput.value;
    };
    oA[2].onclick = function () {
      oDiv[0].style.display = 'block';
      oDiv[1].style.display = 'none';
    };
    oInput.onkeydown = function (event) {
      if (event.keyCode == 13) {
        oDiv[0].style.display = 'block';
        oDiv[1].style.display = 'none';
        oSpan.innerHTML = oInput.value;
      }
      if (event.keyCode == 27) {
        oDiv[0].style.display = 'block';
        oDiv[1].style.display = 'none';
      }
    };
  };
};