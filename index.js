var count_o = 0;
var count_re = 0;
var temp = 0;
var total = 0;

var o = new RegExp('o', 'gi');
var re = new RegExp('re', 'gi');

var result_re = new Array();

document.getElementById('btn').addEventListener("click", function() {
  temp = document.getElementById('str').value;
  count_o = (temp.match(/o/g) || []).length;
  count_re = (temp.match(/re/g) || []).length;
  total = count_o + count_re

  result_re = [...temp.matchAll(new RegExp('re', 'gi'))].map(a => a.index);

  let a = new Array(total);
  for (let i = 0; i < total; ++i)
    a[i] = 1;

  var count = 0;
  result_re.forEach(item => {
    a[item + count] = 0;
    count = count - 1;
  });

  var img = 0;
  var main = document.createElement('div');

  document.body.appendChild(main);
  main.style.width = "100px";
  main.style.display = "inline-block";
  main.style.resize = "both";
  main.style.overflow = "auto";
  main.classList.add("cookie");

  document.querySelectorAll(".cookie").forEach(div => {
    div.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseUp() {
      window.removeEventListener('mousemove', divMove, true);
    }

    function mouseDown(e) {
      window.addEventListener('mousemove', divMove, true);
    }

    function divMove(e){
      div.style.position = 'absolute';
      div.style.top = e.clientY + 'px';
      div.style.left = e.clientX + 'px';
    }

  });

  a.forEach(item => {
    if (item === 1) {
      let img = document.createElement('img');
      img.src = "images/oreo-top.jpg";
      img.style.display = "block";
      img.style.width = "100%";
      img.draggable = false;
      main.appendChild(img);
    } else if (item === 0) {
        let img = document.createElement('img');
        img.src = "images/oreo-cream.jpg";
        img.style.display = "block";
        img.style.width = "100%";
        img.draggable = false;
        main.appendChild(img);
    }
  })

});
