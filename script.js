
const key='worldvoicecm-cart-v1';
let cart=JSON.parse(localStorage.getItem(key)||'[]');
const count=document.querySelector('#count'),items=document.querySelector('#items'),total=document.querySelector('#total');
const drawer=document.querySelector('#drawer'),shade=document.querySelector('#shade');
function render(){
 count.textContent=cart.length;
 items.innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-row"><span>${x.name}</span><span>$${Number(x.price).toFixed(2)} <button onclick="removeItem(${i})">×</button></span></div>`).join(''):'<p>Your bag is empty.</p>';
 total.textContent=cart.reduce((s,x)=>s+Number(x.price),0).toFixed(2);
 localStorage.setItem(key,JSON.stringify(cart));
}
window.removeItem=i=>{cart.splice(i,1);render()}
document.querySelectorAll('.add').forEach(b=>b.onclick=()=>{cart.push({name:b.dataset.name,price:b.dataset.price});render();openBag()});
function openBag(){drawer.classList.add('open');shade.classList.add('open')}
function closeBag(){drawer.classList.remove('open');shade.classList.remove('open')}
document.querySelector('#bagBtn').onclick=openBag;document.querySelector('#close').onclick=closeBag;shade.onclick=closeBag;
document.querySelector('#clear').onclick=()=>{cart=[];render()};render();
