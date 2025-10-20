const button =document.getElementById("button");
const code =document.getElementById("code");
const numbers=document.getElementById("numbers")
const char=document.getElementById("char")
const alphabet=document.getElementById("alphabet")



function code_generator(){
let chars=[];

if(numbers.checked==true){
    console.log(chars.length)
    chars=chars.concat(['0','1','2','3','4','5','6','7','8','9']);
    console.log(chars.length)
}
if(alphabet.checked==true){
    chars= chars.concat(['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',

  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',  ])
}
if(char.checked==true){
    chars=chars.concat([ '!','@','#','$','%','^','&','*','(',')','_','+','-','=','{','}','[',']',
  ':',';','"',"'",'<','>',',','.','?','/','\\','|','`','~',' '])
}
if(char.checked==false &&alphabet.checked==false &&numbers.checked==false){
  code.innerText="select an option !!!!"
}
else{
     let tmp=[];
     for (let i = 0 ; i<15 ;i++){
     tmp+=chars[Math.floor(Math.random()*chars.length)];
     }
    code.innerText=tmp;
  }
}
