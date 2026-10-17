const burger=document.getElementById('burger'),nav=document.getElementById('nav');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.getElementById('yr').textContent=new Date().getFullYear();
const copy=document.getElementById('copy');
if(copy){copy.addEventListener('click',async()=>{const m=document.getElementById('msg');
try{await navigator.clipboard.writeText('rexcodilla58@gmail.com');m.textContent='Email address copied.'}
catch(e){m.textContent='Copy failed. Please copy the address shown below.'}})}
