const mainpage = document.querySelector('.mainbox');
const succMsg = document.querySelector('.finalmsg');
const form = document.querySelector('.forms');
const mail = document.getElementById('iemail');
const inptmail = document.getElementById('inputmail');
const disms = document.querySelector('.Dismiss');
const erroralret = document.getElementById('errormsg');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let mailinput = mail.value;

    let crtmail = /^([a-zA-Z0-9\._]+)(@)([a-zA-Z]{1,10})(\.)(([a-z]{2})(\.)([a-z]{2})|([a-z]{3}))$/;
    if(crtmail.test(mailinput))
    {
        mainpage.classList.add('hide');
        succMsg.classList.remove('hide');
        inptmail.innerText=mailinput;
        mail.value='';
        if(inptmail.classList.contains('error-input'))
        {
            inptmail.classList.remove('error-input')
        }
        if(erroralret.innerHTML != '')
        {
            erroralret.innerHTML='';
        }
    }else
    {
        mail.classList.add('wrongid-input')
        erroralret.innerHTML = 'Valid email required'
    }
})
disms.addEventListener('click',function(){
    mainpage.classList.remove('hide');
    succMsg.classList.add('hide');
})