let ans=document.getElementById("screen");

let calculate=(number)=> {
    ans.value=ans.value+number;
}
let Result=()=> {
    ans.value=eval(ans.value);
}
function del() {
    ans.value=ans.value.slice(0,-1);
}
function clr() {
    ans.value=" ";
}