function big(inp) {
  inp.classList.add("pic12");
  inp.firstElementChild.classList.add("width-change");
}

function small(inp) {
  inp.classList.remove("pic12");
  inp.firstElementChild.classList.remove("width-change");
}

function animation(inp) {
  var temp = document.querySelectorAll(".tt");
  var indic = inp.getAttribute('id');
  var dec;
  var name;
  for (i = 0; i < temp.length; i++) {
    if (temp[i].getAttribute('id') == indic) {
      dec = temp[i];
    }
    $(temp[i]).fadeOut("slow");
  }

  dec.firstElementChild.style.width = "180px";
  var temp2 = document.getElementById("col-one");
  var node = document.createTextNode("You chose");
  var h = document.createElement("H2");
  h.appendChild(node);
  h.setAttribute("class", "h-demo");
  setTimeout(function() {
    temp2.classList.remove("col2")
  }, 1000);
  temp2.classList.add("after");
  var elem = document.createElement("img");
  if (indic == 1) {
    name = "Scissors";
    elem.setAttribute("src", "h1.png");
  } else if (indic == 2) {
    name = "Rock";
    elem.setAttribute("src", "h3.png");
  } else {
    name = "Paper";
    elem.setAttribute("src", "h2.png");
  }
  elem.setAttribute("class", "demo");
  setTimeout(function() {
    temp2.appendChild(elem)
  }, 1000);
  setTimeout(function() {
    temp2.appendChild(h)
  }, 1100);
  //setTimeout(function(){temp2.innerHTML="<h2 class='h-demo'>You chose <span class='h-demo2'>Rock.</span></h2>" }, 1100);
  var node2 = document.createTextNode(name);
  var h2 = document.createElement("H2");
  h2.appendChild(node2);
  h2.setAttribute("class", "h-demo2");
  setTimeout(function() {
    temp2.appendChild(h2);
  }, 1100);
  set2();
  set3(indic);
}

function set2() {
  var temp2 = document.getElementById("col-two");
  setTimeout(function() {
    temp2.classList.remove("col2")
  }, 2000);
  temp2.classList.add("after");
  var temp3 = document.querySelectorAll(".load");
  var img = document.querySelectorAll(".pic-right");
  setTimeout(function() {
    $(img[0]).toggleClass('flip');
  }, 2000);
  setTimeout(function() {
    temp3[0].classList.remove("load");
  }, 2000);
  setTimeout(function() {
    temp3[0].classList.add("load2");
  }, 2000);
  setTimeout(function() {
    $(img[0]).toggleClass('flip');
  }, 3000);
  setTimeout(function() {
    $(img[0]).toggleClass('flip');
  }, 4000);
  setTimeout(function() {
    $(img[0]).toggleClass('flip');
  }, 5000);
}

function set3(inp) {
  var temp;
  setTimeout(function() {
    temp = document.querySelectorAll(".load2");
  }, 6100);
  var temp2 = document.querySelectorAll(".pic-right");
  setTimeout(function() {
    temp2[0].classList.add("dis-n");
  }, 6000);
  setTimeout(function() {
    temp[0].classList.add("dis-n");
  }, 6100);
  var x = Math.floor((Math.random() * 3) + 1);
  var dec;
  var elem2 = document.createElement("img");
  var name;
  if (x == 1) {
    name = "Scissors";
    elem2.setAttribute("src", "h4.png");
  } else if (x == 2) {
    name = "Rock";
    elem2.setAttribute("src", "h5.png");
  } else {
    name = "Paper";
    elem2.setAttribute("src", "h6.png");
  }
  var node = document.createTextNode("Your opponent chose");
  var h = document.createElement("H2");
  h.appendChild(node);
  h.setAttribute("class", "h-demo");
  var node2 = document.createTextNode(name);
  var h2 = document.createElement("H2");
  h2.appendChild(node2);
  h2.setAttribute("class", "h-demo2");
  var temp3 = document.getElementById("col-two");
  setTimeout(function() {
    temp3.classList.remove("fin");
  }, 6400);
  elem2.setAttribute("class", "demo");
  setTimeout(function() {
    temp3.appendChild(elem2)
  }, 6500);
  setTimeout(function() {
    temp3.appendChild(h)
    temp3.appendChild(h2)
  }, 6600);

  set4(inp, x);
}

function set4(inp1, inp2){
  var node;
  if (inp1 == inp2){
    node = document.createTextNode("It's a tie!");
  } else if ((inp1 == 1 && inp2 == 3) || (inp1 == 3 && inp2 == 2) || (inp1 == 2 && inp2 == 1) ) {
    node = document.createTextNode("You won!");
  } else {
    node = document.createTextNode("You lost!");
  }
  var temp = document.querySelectorAll(".res");
  var h2 = document.createElement("H2");
  var bt = document.createElement("Button");
  title = document.createTextNode("Try again");
  h2.appendChild(node);
  h2.setAttribute("class", "statement2");
  bt.setAttribute("class", "btn btn-light");
  bt.setAttribute("onClick", "fin()");
  bt.appendChild(title);
  temp[0].setAttribute("class", "fixx");
  setTimeout(function() {
    temp[0].appendChild(h2);
    temp[0].appendChild(bt);
  }, 7000);

}

function fin() {
  location.reload();
}
