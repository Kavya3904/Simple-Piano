




function Sound(event){

                                                        // white note key variable storeing

    var whiteakeyC = document.getElementById('whitekeyC');
    var whiteakeyD = document.getElementById('whitekeyD');
    var whiteakeyE = document.getElementById('whitekeyE');
    var whiteakeyF = document.getElementById('whitekeyF');
    var whiteakeyG = document.getElementById('whitekeyG');
    var whiteakeyH = document.getElementById('whitekeyH');
    var whiteakeyI = document.getElementById('whitekeyI');
    var whiteakeyJ = document.getElementById('whitekeyJ');


                                                       // Black note key variable storeing
    var whiteakeyK = document.getElementById('BlackeyK');
    var whiteakeyL = document.getElementById('BlackeyL');
    var whiteakeyM = document.getElementById('BlackeyM');
    var whiteakeyN = document.getElementById('BlackeyN');
    var whiteakeyO = document.getElementById('BlackeyO');

    var keyCode = event.keyCode,

			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;

          
// function whitekeychangeC(){
//    whiteakeyC.style.height="340px";
    
//     }
//     function whitekeychangeD(){
//         whiteakeyC.style.height="340px";
         
//          }
    // function removewhitekeychange(){
    //     if(whiteakey.style.height="340px"){
    //         whiteakey.style.height="350px"
    //     }
    // }

   
   
    const audio =document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const Key =document.querySelector(`div[data-key="${event.keyCode}"]`);
    
    Key.classList.add("playing");
    audio.currentTime =0;
    audio.play();
  
    
  

                                                      //changing  white note key
   function changekeyC(){
    audio.addEventListener('ended',()=>{
        whiteakeyC.classList.remove('active')
        })
   }
 function changekeyD(){
    audio.addEventListener('ended',()=>{
        whiteakeyD.classList.remove('active')
        })
   }
   function changekeyE(){
    audio.addEventListener('ended',()=>{
        whiteakeyE.classList.remove('active')
        })
   }
   function changekeyF(){
    audio.addEventListener('ended',()=>{
        whiteakeyF.classList.remove('active')
        })
   }
   function changekeyG(){
    audio.addEventListener('ended',()=>{
        whiteakeyG.classList.remove('active')
        })
   }
   function changekeyH(){
    audio.addEventListener('ended',()=>{
        whiteakeyH.classList.remove('active')
        })
   }
   function changekeyI(){
    audio.addEventListener('ended',()=>{
        whiteakeyI.classList.remove('active')
        })
   }
   function changekeyJ(){
    audio.addEventListener('ended',()=>{
        whiteakeyJ.classList.remove('active')
        })
   }

                                                  //changing  Black note key
    function changekeyK(){
    audio.addEventListener('ended',()=>{
    whiteakeyK.classList.remove('active')
    })
    }
    function changekeyL(){
        audio.addEventListener('ended',()=>{
            whiteakeyL.classList.remove('active')
            })
       }
       function changekeyM(){
        audio.addEventListener('ended',()=>{
            whiteakeyM.classList.remove('active')
            })
       }
       function changekeyN(){
        audio.addEventListener('ended',()=>{
            whiteakeyN.classList.remove('active')
            })
       }
       function changekeyO(){
        audio.addEventListener('ended',()=>{
            whiteakeyO.classList.remove('active')
            })
       }
                                                  //Each key switch code
switch(keyCode){
                                                  //switch case for black note keys
    case 65:
        whiteakeyC.classList.add('active');
changekeyC();
break;
case 83:
    whiteakeyD.classList.add('active');
    changekeyD();
    break;
    ///change
    case 68:
    whiteakeyE.classList.add('active');
    changekeyE();
    break;
    case 70:
    whiteakeyF.classList.add('active');
    changekeyF();
    break;
    case 71:
    whiteakeyG.classList.add('active');
    changekeyG();
    break;
    case 72:
    whiteakeyH.classList.add('active');
    changekeyH();
    break;
    case 74:
    whiteakeyI.classList.add('active');
    changekeyI();
    break;
    case 75:
    whiteakeyJ.classList.add('active');
    changekeyJ();
    break;
                                                     //switch case for black note keys
    case 87:
    whiteakeyK.classList.add('active');
    changekeyK();
    break;
    case 69:
        whiteakeyL.classList.add('active');
        changekeyL();
        break;
        case 84:
            whiteakeyM.classList.add('active');
            changekeyM();
            break;
            case 89:
                whiteakeyN.classList.add('active');
                changekeyN();
                break;
                case 85:
                    whiteakeyO.classList.add('active');
                    changekeyO();
                    break;

}

}
const Keys = Array.from(document.querySelectorAll('.key'));       

window.addEventListener('keydown', Sound);

// function soundless(event){
//     var whiteakey = document.getElementById('whitekey');

//     function removewhitekeychange(){
//         if(whiteakey.style.height="340px"){
//             whiteakey.style.height="350px"
//         }
//     }
//     const audio =document.querySelector(`audio[data-key="${event.keyCode}"]`);
//     const Key =document.querySelector(`div[data-key="${event.keyCode}"]`);
    
//     Key.classList.add("playing");
//     audio.crruentTime =0;
//     audio.play();
//     switch(65){
//         case 65 :
//             whitekeychange();
           
//             break;
//     }
// }
// window.addEventListener('keydown', Sound);
// window.addEventListener('keyup', soundless);
