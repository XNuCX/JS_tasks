function encodeAndDecodeMessages() {
  let givenMesagePar = document.querySelectorAll("#main div p");
  let givenMesageTextArea = document.querySelectorAll("#main div textarea");

  let buttons = document.querySelectorAll("#main div button");
  let buttonEncode;
  let buttonDecode;
  let encodedMessage = "";
  let decodedMessage = "";
  let isSend = false;
  let isRecived = false;
  let messageArea;
  let resMessageArea;
  console.log(givenMesageTextArea);

  const encodeAndSend = function (i) {
    isSend = true;
    let message = givenMesageTextArea[i].value;

    for (let ch of message) {
      encodedMessage += String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    console.log(encodedMessage);

    givenMesageTextArea[i].value = "";
    resMessageArea.value = encodedMessage;
    encodedMessage = "";
  };
  const decodeAndSend = function (i) {
    let message = givenMesageTextArea[i].value;

    for (let ch of message) {
      decodedMessage += String.fromCharCode(ch.charCodeAt(0) - 1);
    }

    givenMesageTextArea[i].value = "";
    resMessageArea.value = decodedMessage;
    decodedMessage = "";
  };

  for (let i = 0; i < givenMesageTextArea.length; i++) {
    if (givenMesagePar[i].textContent === "Message") {
      buttonEncode = buttons[i];
      messageArea = givenMesageTextArea[i];
      buttonEncode.addEventListener("click", () => {
        console.log("click");
        encodeAndSend(i);
      });
    }
    if (givenMesagePar[i].textContent === "Last received message") {
      buttonDecode = buttons[i];
      resMessageArea = givenMesageTextArea[i];

      buttonDecode.addEventListener("click", () => {
        console.log("click decode");

        decodeAndSend(i);
      });
    }
  }
  console.log("TODO...");
}
