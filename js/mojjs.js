$(document).ready(function() {

  //tab meny toggle

  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    let target = $(e.target).attr("href") // activated tab
  });

  //modal kad se submituje forma

  $('#courses').on('submit', function(e) {
    $('#myModal').modal('show');
    e.preventDefault();
  });

  //drugi modal

  $('#btn-total1').on('click', function() {
    $('#myModal1').modal('show');

  });

  //oslobadjanje forme

  $('.unbind').on('click', function() {
    $("#courses").unbind('submit').submit()

  })

  //trenutni dan

  $(document).ready(function() {
    $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
  });

  //fixed navigacija

  $('.about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('navbar-fixed-top');
    } else {
      $('nav').removeClass('navbar-fixed-top');
    }
  }, {
    offset: '110px;'
  });

  //fade in

  $('.about').waypoint(function() {
    $('.anim').addClass('in');
  }, {
    offset: '50%'
  });
  $('.menu').waypoint(function() {
    $('.course').addClass('in');
  }, {
    offset: '50%'
  });

  //glatki prelazi

  $('.pocetna').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('header').offset().top
    }, 1200);
  });

  $('.onama').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.about').offset().top
    }, 1200);
  });

  $('.galerija').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.gallery').offset().top
    }, 1200);
  });

  $('.gladan').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.menu').offset().top
    }, 1200);
  });

  $('.kontakt').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1200);
  });

  //dodati title i pattern za input u meniju

  $(".dodatak").attr("pattern", "\\d+");
  $(".dodatak").attr("title", "Unesite količinu koju želite da poručite!");

  //tooltip

  $('input[type=text]').tooltip({
    placement: "bottom",
    trigger: "focus"
  });
  $('textarea').tooltip({
    placement: "top",
    trigger: "focus"
  });


});


//funkcija za porudžbine

const prices = [460, 580, 590, 590, 590, 590, 540, 590, 590, 590, 590, 590, 580, 590, 610, 610, 630, 580, 730, 780, 290, 270, 320, 320, 320, 260, 280, 380, 380, 380, 400, 400, 60, 160, 580, 520, 520, 480, 580, 540, 580, 560, 590, 520, 580, 650, 510, 590, 660, 650, 720, 890, 990, 750, 930, 1200, 490, 510, 540, 650, 540, 690, 210, 200, 280, 200, 400, 210, 210];
let totalPrice = 0;
let amount = [];
let name = [];
let pattern = ``

function bill() {
  for (let i = 0; i < prices.length; i++) {
    amount[i] = parseInt(document.getElementById("course-" + i).value, 10)
  }
  for (var i = 0; i < prices.length; i++) {
    if (!isNaN(amount[i]) && amount[i] != 0) {
      totalPrice += amount[i] * prices[i];
      name[i] = document.querySelector(".course-" + i).innerText.substring(3)
      pattern += `

        <tr>
        <td>${name[i]}</td>
        <td>kol: ${amount[i]}</td>
        <td>dinara: ${prices[i] * amount[i]}</td>
        </tr>

        `
    }
    document.querySelector("#order").innerHTML = pattern;
    document.querySelector("#total").innerText = "Ukupno: " + totalPrice + " dinara!"
  }
}
document.querySelector("#btn-total").addEventListener("click", bill)



//provera forme za porudzbinu

function proveriFormu() {

  let testIme = /^[a-zA-Z '-]{2,32}$/g
  let testAdresa = /^[a-zA-Z0-9 .\/'-]{2,32}$/g
  let testTel = /^0\d\d\/\d{3}-\d{3,4}$/g
  let testPor = /^[ -~\n]{1,500}$/g

  let ime = document.getElementById("courses").ime.value;
  let telefon = document.getElementById("courses").telefon.value;
  let adresa = document.getElementById("courses").adresa.value;
  let por = document.getElementById("courses").poruka.value;

  let rezultatIme = ime.match(testIme);
  let rezultatAdresa = adresa.match(testAdresa);
  let rezultatTel = telefon.match(testTel);
  let rezultatPor = por.match(testPor);

  if (rezultatIme == null) {
    alert("Ime nije ok!");
    document.getElementById("courses").ime.focus();
  } else if (rezultatTel == null) {
    alert("Telefon nije ok!");
    document.getElementById("courses").telefon.focus();
  } else if (rezultatAdresa == null) {
    alert("Adresa nije ok!");
    document.getElementById("courses").adresa.focus();
  } else if (rezultatPor == null) {
    alert("Poruka nije ok!");
    document.getElementById("courses").poruka.focus();
  } else {

    document.getElementById("courses").submit();
    window.open("porudzbina.html");

  }
};
//
//zatvaranje odgovora

function closeOnLoad() {
  setTimeout(function() {
      window.close();
    },
    5000
  );
};

//provera forme za kontaktiranje

function proveri() {
  let testIme = /^[a-zA-Z '-]{2,32}$/g
  let testMail = /^[a-z0-9]+_?([.]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,5}$/g
  let testTel = /^0\d\d\/\d{3}-\d{3,4}$/g
  let testPor = /^[ -~\n]{1,500}$/g

  let ime = document.forma.inputName.value;
  let email = document.forma.inputEmail.value;
  let telefon = document.forma.inputPhone.value;
  let por = document.forma.inputText.value;

  let rezultatIme = ime.match(testIme);
  let rezultatMail = email.match(testMail);
  let rezultatTel = telefon.match(testTel);
  let rezultatPor = por.match(testPor);

  if (rezultatIme == null) {
    alert("Ime nije ok!");
    document.forma.inputName.focus();
  } else if (rezultatMail == null) {
    alert("EMail nije ok!");
    document.forma.inputEmail.focus();
  } else if (rezultatTel == null) {
    alert("Telefon nije ok!");
    document.forma.inputPhone.focus();
  } else if (rezultatPor == null) {
    alert("Poruka nije ok!");
    document.forma.inputText.focus();
  } else {
    document.forma.submit();
    window.open("odgovor.html");

  }
};
