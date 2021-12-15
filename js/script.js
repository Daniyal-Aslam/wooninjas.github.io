// THEME SETTING BEGIN
const checked = document.getElementById('chk');
checked.addEventListener('change', () => {
    document.body.classList.toggle('night'); 
});
// THEME SETTING END

// TAB MENU BEGIN  
let i,tab_content;
tab_content=document.getElementsByClassName('tab-content');
const getTab=(select)=>{ 
    for(i=0;i<tab_content.length;i++){
        tab_content[i].style.display='none';
    }  
    document.getElementById(select).style.display='block';
}
document.getElementById('default').click();
  // TAB MENU END

//   PREVIOUS & NEXT BTN BEGIN  

const showPrev= document.getElementById('showPrev');    
const latest = document.getElementById('main_activity'); 

const prev = () =>{   
    showPrev.style.display="block";
    latest.style.display = 'none';   
}

const next = () =>{    
    showPrev.style.display="none";
    latest.style.display = 'block';    
}
//   PREVIOUS & NEXT BTN END