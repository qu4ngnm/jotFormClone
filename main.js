$(document).ready(function () {
  $("#txtDate").datepicker({
    dateFormat: "mm-dd-yy",
    changeMonth: true,
    changeYear: true,
  });
  $("#txtDate").datepicker("onClick");
});
$(document).ready(function () {
  $("#DateSigned").datepicker({
    dateFormat: "mm-dd-yy",
    changeMonth: true,
    changeYear: true,
  });
  $("#DateSigned").datepicker("onClick");
});

// const canvas = document.querySelector("#draw");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// function draw(x, y) {
//   const circle = new Path2D();
//   circle.arc(x, y, 10, 0, 2 + Math.Pi);
//   ctx.fill(circle);
// }
// let isMouseDown = false;
// canvas.addEventListener("mousedown", (e) => {
//   isMouseDown = true;
// });

// canvas.addEventListener("mouseup", (e) => {
//   isMouseDown = false;
//   console.log("mouseup");
// });

// canvas.addEventListener("mousemove", (e) => {
//   if (!isMouseDown) {
//     return;
//   }
//   const { clientX, clientY } = e;

//   const react = canvas.getBoundingClientRect();
//   draw(clientX - react.left, clientY - react.top);
// });

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const employSignature = document.getElementById("employ-signature");

const context1 = employSignature.getContext("2d");

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
employSignature.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

employSignature.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context1, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context1, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context1, x1, y1, x2, y2) {
  context1.beginPath();
  context1.strokeStyle = "black";
  context1.lineWidth = 1;
  context1.moveTo(x1, y1);
  context1.lineTo(x2, y2);
  context1.stroke();
  context1.closePath();
}
function clearCanvas() {
  context1.clearRect(0, 0, employSignature.width, employSignature.height);
}
const clear = document.getElementById("clear-btn-employee");
clear.addEventListener("click", clearCanvas);

//  Witness- Signature

const witnessSignature = document.getElementById("witness-signature");
const context2 = witnessSignature.getContext("2d");

witnessSignature.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

witnessSignature.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context2, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context2, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context2, x1, y1, x2, y2) {
  context2.beginPath();
  context2.strokeStyle = "black";
  context2.lineWidth = 1;
  context2.moveTo(x1, y1);
  context2.lineTo(x2, y2);
  context2.stroke();
  context2.closePath();
}

function clearCanvas1() {
  context2.clearRect(0, 0, witnessSignature.width, witnessSignature.height);
}
const clear1 = document.getElementById("clear-btn-witness");
clear1.addEventListener("click", clearCanvas1);

// Form Validation Jquery

$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstnameEmployee: "required",
      firstnameWitness: "required",
      lastnameEmployee: "required",
      lastnameWitness: "required",
      // email: {
      //   required: true,
      //   // Specify that email should be validated
      //   // by the built-in "email" rule
      //   email: true,
      // },
      secure-nums {
        required: true,
      }
      last-assigned: {
        required: true,
      },
    },
    // Specify validation error messages
    messages: {
      firstnameEmployee: "Please enter your firstname",
      lastnameEmployee: "Please enter your lastname",
      firstnameWitness: "Please enter your firstname",
      lastnameWitness: "Please enter your lastname",
      // password: {
      //   required: "Please provide a password",
      //   minlength: "Your password must be at least 5 characters long",
      // },
      secure-nums: "Please enter your security number"
      last-assigned: "Please enter your last assigned",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      form.submit();
    },
  });
});
