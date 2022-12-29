document.getElementById("submit").onclick = function () {
  var name = document.getElementById("form_name").value;
  var email = document.getElementById("form_email").value;
  var number = document.getElementById("form_number").value;
  var message = document.getElementById("form_msg").value;

  if (name == "") {
    var crt_emj = document.createElement("img");
    crt_emj.setAttribute("class", "vadivel_emt_img");
    crt_emj.setAttribute("id", "vadivel_emt_img1");
    crt_emj.setAttribute("src", "./img.jpg");
    crt_emj.setAttribute("alt", "Empty");

    var emoji1 = document.getElementById("vadivel_emoji_1");
    emoji1.appendChild(crt_emj);
  }

  if (email == "") {
    var crt_emj = document.createElement("img");
    crt_emj.setAttribute("class", "vadivel_emt_img");
    crt_emj.setAttribute("id", "vadivel_emt_img2");
    crt_emj.setAttribute("src", "./img.jpg");
    crt_emj.setAttribute("alt", "Empty");

    var emoji1 = document.getElementById("vadivel_emoji_2");
    emoji1.appendChild(crt_emj);
  }

  if (number == "") {
    var crt_emj = document.createElement("img");
    crt_emj.setAttribute("class", "vadivel_emt_img");
    crt_emj.setAttribute("id", "vadivel_emt_img3");
    crt_emj.setAttribute("src", "./img.jpg");
    crt_emj.setAttribute("alt", "Empty");

    var emoji1 = document.getElementById("vadivel_emoji_3");
    emoji1.appendChild(crt_emj);
  }

  if (message == "") {
    var crt_emj = document.createElement("img");
    crt_emj.setAttribute("class", "vadivel_emt_img");
    crt_emj.setAttribute("id", "vadivel_emt_img4");
    crt_emj.setAttribute("src", "./img.jpg");
    crt_emj.setAttribute("alt", "Empty");

    var emoji1 = document.getElementById("vadivel_emoji_4");
    emoji1.appendChild(crt_emj);
  }

  if (name !== "") {
    const elementToRemove_a = document.querySelector("#vadivel_emt_img1");
    elementToRemove_a.parentNode.removeChild(elementToRemove_a);
  }

  if (email !== "") {
    const elementToRemove_b = document.querySelector("#vadivel_emt_img2");
    elementToRemove_b.parentNode.removeChild(elementToRemove_b);
  }

  if (number !== "") {
    const elementToRemove_c = document.querySelector("#vadivel_emt_img3");
    elementToRemove_c.parentNode.removeChild(elementToRemove_c);
  }

  if (message !== "") {
    const elementToRemove_d = document.querySelector("#vadivel_emt_img4");
    elementToRemove_d.parentNode.removeChild(elementToRemove_d);
  }
};


function image1() {
  let name1 = document.getElementById("form_name");

  name1.addEventListener("focus", createElement);

  function createElement() {
    var divElement = document.createElement("img");
    divElement.setAttribute("class", "vadivel_foc_img");
    divElement.setAttribute("id", "vadivel_foc_img1");
    divElement.setAttribute("src", "./img1.jpg");
    divElement.setAttribute("alt", "Focus");

    var emoji1 = document.getElementById("vadivel_emoji_1");
    emoji1.appendChild(divElement);
  }

  name1.addEventListener("blur", () => {
    const elementToRemove1 = document.querySelector("#vadivel_foc_img1");
    elementToRemove1.parentNode.removeChild(elementToRemove1);
  });
}
image1();

function image2() {
  let email1 = document.getElementById("form_email");

  email1.addEventListener("focus", createElement, blur);

  function createElement() {
    var divElement = document.createElement("img");
    divElement.setAttribute("class", "vadivel_foc_img");
    divElement.setAttribute("id", "vadivel_foc_img2");
    divElement.setAttribute("src", "./img1.jpg");
    divElement.setAttribute("alt", "Focus");

    var emoji1 = document.getElementById("vadivel_emoji_2");
    emoji1.appendChild(divElement);
  }
  email1.addEventListener("blur", () => {
    const elementToRemove2 = document.querySelector("#vadivel_foc_img2");
    elementToRemove2.parentNode.removeChild(elementToRemove2);
  });
}
image2();

function image3() {
  let number1 = document.getElementById("form_number");

  number1.addEventListener("focus", createElement);

  function createElement() {
    var divElement2 = document.createElement("img");
    divElement2.setAttribute("class", "vadivel_foc_img");
    divElement2.setAttribute("id", "vadivel_foc_img3");
    divElement2.setAttribute("src", "./img1.jpg");
    divElement2.setAttribute("alt", "Focus");

    var emoji1 = document.getElementById("vadivel_emoji_3");
    emoji1.appendChild(divElement2);
  }

  number1.addEventListener("blur", () => {
    const elementToRemove3 = document.querySelector("#vadivel_foc_img3");
    elementToRemove3.parentNode.removeChild(elementToRemove3);
  });
}
image3();

function image4() {
  let message1 = document.getElementById("form_msg");

  message1.addEventListener("focus", createElement);

  function createElement() {
    var divElement3 = document.createElement("img");
    divElement3.setAttribute("class", "vadivel_foc_img");
    divElement3.setAttribute("id", "vadivel_foc_img4");
    divElement3.setAttribute("src", "./img1.jpg");
    divElement3.setAttribute("alt", "Focus");

    var emoji1 = document.getElementById("vadivel_emoji_4");
    emoji1.appendChild(divElement3);
  }

  message1.addEventListener("blur", () => {
    const elementToRemove4 = document.querySelector("#vadivel_foc_img4");
    elementToRemove4.parentNode.removeChild(elementToRemove4);
  });
}
image4();
