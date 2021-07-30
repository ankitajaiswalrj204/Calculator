let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue+=buttonText;
        }
        else if(buttonText=='C')
        {
            screenValue='';
            screen.value='';
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else if( buttonText=='Del'){
            let str=screenValue;
            str=str.substr(0,str.length-1);
            screenValue=str;
            screen.value=screenValue;

        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }



}  )
}   
