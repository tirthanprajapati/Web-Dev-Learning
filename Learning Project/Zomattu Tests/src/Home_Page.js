function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// var i=0;

// const element = document.getElementsByClassName("Btn");
// element.addEventListener("click", bt());
// function btnclk() {
//   console.log(i)
//   i=i+1;
//   if(i%2==0)
//   {
//     document.querySelector(".Btn2").className="Btn";
//   }
//   else
//   {
//     document.querySelector(".Btn").className="Btn2";
//   }
// }
// function btncik()
// {
//   bt()
// }


var inp = 0;
document.getElementById('Btn').addEventListener('click', btnclk)


function btnclk() {
  console.log("Button is Clicked")
  inp = inp + 1;
  if (inp % 2 == 0) {
    document.getElementById('Btn2').id = 'Btn';
  } else {
    document.getElementById('Btn').id = 'Btn2';
  }
}