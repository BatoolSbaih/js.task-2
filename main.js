var registerForm = document.querySelector(".registerform");
registerForm.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;
  var amounts = {
    amount: elements["amount"].value,
  };

  var exchange = document.querySelector(".exchange");
  var options = exchange.value;
  if ("dollar" == options) {
    dollar();
  } else if ("dinar" == options) {
    dinar();
  } else {
    nis();
  }
  function dollar() {
    document.querySelector("p").innerHTML="result :";
    var result = amounts.amount * .27;
    document.querySelector("p").innerHTML += result;
  }

  function dinar() {
    document.querySelector("p").innerHTML="result :";
    var result = amounts.amount * .19;
    document.querySelector("p").innerHTML += result;
  }

  function nis() {
    document.querySelector("p").innerHTML="result :";
    var result = amounts.amount;
    document.querySelector("p").innerHTML += result;
  }
};
