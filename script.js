/* =========================
DATA PRODUK LENGKAP
========================= */

const products = [

/* =========================
E-WALLET
========================= */

{
name:'Dana Bisnis',
price:'35K',
category:'ewallet',
badge:'Best Seller',
image:'produk/dana-bisnis.jpg'
},

{
name:'Dana Premium',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/dana-premium.jpg'
},

{
name:'Link Aja',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/linkaja.jpg'
},

{
name:'Doku',
price:'35K',
category:'ewallet',
badge:'Fast Process',
image:'produk/doku.jpg'
},

{
name:'Shopee Pay',
price:'35K',
category:'ewallet',
badge:'Best Seller',
image:'produk/shopeepay.jpg'
},

{
name:'ShopeePay Mitra',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/spaymitra.jpg'
},

{
name:'Isaku',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/isaku.jpg'
},

{
name:'Gopay',
price:'35K',
category:'ewallet',
badge:'Best Seller',
image:'produk/gopay.jpg'
},

{
name:'Ovo',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/ovo.jpg'
},

{
name:'Fast Pay',
price:'35K',
category:'ewallet',
badge:'Fast Process',
image:'produk/fastpay.jpg'
},

{
name:'TopIndoku',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/topindoku.jpg'
},

/* =========================
BANK DIGITAL
========================= */

{
name:'Superbank',
price:'60K',
category:'bank',
badge:'Fast Process',
image:'produk/superbank.jpg'
},

{
name:'Bank Mega Syariah',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/bms.jpg'
},

{
name:'Aladin Bank',
price:'60K',
category:'bank',
badge:'Best Seller',
image:'produk/aladin.jpg'
},

{
name:'Krom Bank Digital',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/krom.jpg'
},

{
name:'BSI Mobile',
price:'60K',
category:'bank',
badge:'Fast Process',
image:'produk/bsi.jpg'
},

{
name:'Motion Bank',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/motion.jpg'
},

{
name:'Mind by Bank Mestika',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/mind.jpg'
},

{
name:'Blu by BCA',
price:'60K',
category:'bank',
badge:'Best Seller',
image:'produk/blu.jpg'
},

{
name:'Allo Bank',
price:'60K',
category:'bank',
badge:'Fast Process',
image:'produk/allo.jpg'
},

{
name:'Bank Raya by BRI',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/raya.jpg'
},

{
name:'Permata Me',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/permata.jpg'
},

{
name:'Bank Saqu',
price:'60K',
category:'bank',
badge:'Fast Process',
image:'produk/saqu.jpg'
},

{
name:'Bank Jago',
price:'60K',
category:'bank',
badge:'Best Seller',
image:'produk/jago.jpg'
},

{
name:'Bank BRI',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/bri.jpg'
},

{
name:'Livin Merchant by Mandiri',
price:'60K',
category:'bank',
badge:'Fast Process',
image:'produk/livinmerchant.jpg'
},

{
name:'Livin by Mandiri',
price:'60K',
category:'bank',
badge:'Best Seller',
image:'produk/livin.jpg'
},

{
name:'Bank BCA',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/bca.jpg'
},

{
name:'Wondr by BNI',
price:'60K',
category:'bank',
badge:'Popular',
image:'produk/wondr.jpg'
},

{
name:'BSYA by BCA Syariah',
price:'60K',
category:'bank',
badge:'Fast Process',
image:'produk/bsya.jpg'
},

/* =========================
PPOB / QRIS / MERCHANT
========================= */

{
name:'ShopeePay Mitra',
price:'35K',
category:'ewallet',
badge:'Popular',
image:'produk/spaymitra.jpg'
},

{
name:'Merchant QRIS',
price:'45K',
category:'qris',
badge:'Best Seller',
image:'produk/qris.jpg'
},

{
name:'Dana Bisnis',
price:'45K',
category:'qris',
badge:'Best Seller',
image:'produk/danabisnis.jpg'
},

{
name:'Merchant BCA',
price:'45K',
category:'qris',
badge:'Popular',
image:'produk/merchantbca.jpg'
},

{
name:'Merchant BRI',
price:'45K',
category:'qris',
badge:'Popular',
image:'produk/merchantbri.jpg'
},

{
name:'Byon Merchant by BSI',
price:'45K',
category:'qris',
badge:'Fast Process',
image:'produk/byon.jpg'
},

{
name:'Toko Netzme QRIS Merchant',
price:'45K',
category:'qris',
badge:'Popular',
image:'produk/netzme.jpg'
},

{
name:'Shopee Pay Partner',
price:'45K',
category:'qris',
badge:'Best Seller',
image:'produk/spartner.jpg'
},

{
name:'BNI Merchant',
price:'45K',
category:'qris',
badge:'Fast Process',
image:'produk/bnimerchant.jpg'
},

{
name:'Permata QR Merchant',
price:'45K',
category:'qris',
badge:'Popular',
image:'produk/permataqr.jpg'
},

{
name:'Gopay Merchant',
price:'45K',
category:'qris',
badge:'Best Seller',
image:'produk/gopaymerchant.jpg'
},

{
name:'Fazz Agen',
price:'45K',
category:'qris',
badge:'Popular',
image:'produk/fazz.jpg'
},

{
name:'Order Kuota',
price:'45K',
category:'qris',
badge:'Fast Process',
image:'produk/kuota.jpg'
}

];

function renderProducts(){

const grid =
document.getElementById('productGrid');

grid.innerHTML='';

products.forEach(product=>{

grid.innerHTML += `

<div class="product-card"
data-category="${product.category}">

<div class="badge">
${product.badge}
</div>

<div class="product-image">

${product.name}

</div>

<div class="product-info">

<div class="product-name">
${product.name}
</div>

<div class="product-price">
${product.price}
</div>

<button class="buy-btn"
onclick="orderNow('${product.name}')">

Beli Sekarang

</button>

</div>

</div>

`;

});

}

renderProducts();

function filterCategory(category){

document.querySelectorAll('.product-card')
.forEach(card=>{

if(category==='all'){

card.style.display='block';

}else{

card.style.display=
card.dataset.category===category
? 'block'
: 'none';

}

});

}

function searchProduct(){

const value =
document.getElementById('searchInput')
.value
.toLowerCase();

document.querySelectorAll('.product-card')
.forEach(card=>{

const text =
card.innerText.toLowerCase();

card.style.display =
text.includes(value)
? 'block'
: 'none';

});

}

function orderNow(product){

const id =
'UPG-'+Math.floor(Math.random()*900000+100000);

const msg =
`Halo FahriXZ Store

Saya ingin order:

Produk : ${product}
ID Pesanan : ${id}`;

window.open(
'https://wa.me/6287895917725?text='+
encodeURIComponent(msg),
'_blank'
);

}

function copyText(text){

navigator.clipboard.writeText(text);

showToast('Berhasil disalin');

}

function showToast(text){

const toast =
document.getElementById('toast');

toast.innerText=text;

toast.style.display='block';

setTimeout(()=>{

toast.style.display='none';

},2000);

}

/* LIVE ORDER */

const fakeOrders = [

'Rizky membeli Dana Premium',
'Andi membeli Blu by BCA',
'Kevin membeli Merchant QRIS',
'Fahri membeli ShopeePay Mitra',
'Dimas membeli Bank Jago'

];

setInterval(()=>{

const random =
fakeOrders[
Math.floor(Math.random()*fakeOrders.length)
];

const live =
document.getElementById('liveOrder');

live.innerText='🔥 '+random;

live.style.display='block';

setTimeout(()=>{

live.style.display='none';

},4000);

},7000);

/* VISITOR */

setInterval(()=>{

const count =
document.getElementById('visitorCount');

count.innerText =
Math.floor(Math.random()*2000)+1000;

},5000);

/* POPUP */

function openPopup(product,price){

document.getElementById('productPopup')
.style.display='flex';

document.getElementById('popupContent')
.innerHTML=`

<h2>${product}</h2>

<br>

<p>
Harga : ${price}
</p>

<br>

<p>
⚡ Proses cepat 5-30 menit
</p>

<br>

<p>
✔ Aman dan terpercaya
</p>

<br>

<button class="buy-btn"
onclick="orderNow('${product}')">

Beli Sekarang

</button>

`;

}

function closePopup(){

document.getElementById('productPopup')
.style.display='none';

}

/* QRIS */

function openQris(){

document.getElementById('qrisPopup')
.style.display='flex';

}

function closeQris(){

document.getElementById('qrisPopup')
.style.display='none';

}

/* DARK MODE */

function toggleDark(){

document.body.classList.toggle('light-mode');

}

/* =========================
REVEAL
========================= */

window.addEventListener('scroll',()=>{

document.querySelectorAll('.reveal')
.forEach(el=>{

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight-100){

el.classList.add('active');

}

});

});

/* =========================
CURSOR GLOW
========================= */

const glow =
document.querySelector('.cursor-glow');

document.addEventListener('mousemove',e=>{

glow.style.left=e.clientX+'px';
glow.style.top=e.clientY+'px';

});

/* =========================
CHAT BUBBLE
========================= */

const fakeChats = [

'Kak prosesnya cepat banget 🔥',
'Trusted dan aman',
'5 menit langsung selesai',
'Recommended seller 💙'

];

setInterval(()=>{

const bubble =
document.getElementById('chatBubble');

bubble.innerText =
fakeChats[
Math.floor(Math.random()*fakeChats.length)
];

bubble.style.display='block';

setTimeout(()=>{

bubble.style.display='none';

},4000);

},9000);

/* =========================
SPIN
========================= */

function spinDiscount(){

const wheel =
document.getElementById('spinWheel');

const random =
Math.floor(Math.random()*3600);

wheel.style.transform=
`rotate(${random}deg)`;

setTimeout(()=>{

const rewards = [

'Diskon 5%',
'Diskon 10%',
'Bonus Fast Process',
'Diskon 15%'

];

showToast(
rewards[
Math.floor(Math.random()*rewards.length)
]
);

},4000);

}

/* =========================
FILTER PRICE
========================= */

function filterPrice(price){

document.querySelectorAll('.product-card')
.forEach(card=>{

if(price==='all'){

card.style.display='block';
return;

}

card.style.display =
card.innerText.includes(price+'K')
? 'block'
: 'none';

});

}

/* =========================
COUNTER
========================= */

setInterval(()=>{

const trx =
document.getElementById('trxCounter');

trx.innerText =
parseInt(trx.innerText)+
Math.floor(Math.random()*3);

const customer =
document.getElementById('customerCounter');

customer.innerText =
parseInt(customer.innerText)+1;

},5000);

/* =========================
AI CHAT
========================= */

function toggleAI(){

const ai =
document.getElementById('aiChat');

ai.style.display =
ai.style.display==='block'
? 'none'
: 'block';

}

function sendAI(){

const input =
document.getElementById('aiInput');

const msg =
input.value.toLowerCase();

const chat =
document.getElementById('aiMessages');

chat.innerHTML += `
<div>
🧑 ${msg}
</div>
`;

let reply='';

if(msg.includes('harga')){

reply='35K e-wallet, 45K QRIS, 60K bank digital kak';

}else if(msg.includes('aman')){

reply='Aman kak, proses manual dan terpercaya ✔';

}else if(msg.includes('proses')){

reply='Estimasi proses 5-30 menit kak';

}else{

reply='Silakan hubungi admin WhatsApp untuk info lebih lanjut kak';

}

chat.innerHTML += `
<div>
🤖 ${reply}
</div>
`;

input.value='';

chat.scrollTop=chat.scrollHeight;

}

/* =========================
UPLOAD PREVIEW
========================= */

document.getElementById('paymentProof')
.addEventListener('change',e=>{

const file =
e.target.files[0];

if(file){

const reader =
new FileReader();

reader.onload=function(ev){

const preview =
document.getElementById('previewImage');

preview.src=ev.target.result;
preview.style.display='block';

}

reader.readAsDataURL(file);

}

});

function sendProof(){

showToast(
'Bukti transfer berhasil dikirim ✔'
);

window.open(
'https://wa.me/6287895917725',
'_blank'
);

}

/* =========================
RIWAYAT
========================= */

function saveHistory(product){

let history =
JSON.parse(
localStorage.getItem('orders')
)||[];

history.push(product);

localStorage.setItem(
'orders',
JSON.stringify(history)
);

renderHistory();

}

function renderHistory(){

let history =
JSON.parse(
localStorage.getItem('orders')
)||[];

const list =
document.getElementById('historyList');

if(history.length===0){

list.innerHTML='<p>Belum ada pesanan</p>';
return;

}

list.innerHTML='';

history.forEach(item=>{

list.innerHTML+=`
<div class="testi-card">
${item}
</div>
`;

});

}

renderHistory();

/* =========================
ORDER SAVE
========================= */

function orderNow(product){

saveHistory(product);

const text =
`Halo admin, saya ingin order ${product}`;

window.open(
`https://wa.me/6287895917725?text=${encodeURIComponent(text)}`,
'_blank'
);

}

/* =========================
VOUCHER
========================= */

function applyVoucher(){

const voucher =
document.getElementById('voucherInput')
.value.toUpperCase();

if(voucher==='FAHRI10'){

showToast(
'Voucher berhasil digunakan ✔'
);

}else{

showToast(
'Voucher tidak valid ❌'
);

}

}

/* =========================
LIVE CHAT
========================= */

const fakeLive = [

[
'Kak aman gak?',
'Aman kak ✔'
],

[
'Berapa lama proses?',
'5-30 menit kak ⚡'
],

[
'Trusted?',
'Trusted dan fast respon 🔥'
]

];

setInterval(()=>{

const chat =
fakeLive[
Math.floor(Math.random()*fakeLive.length)
];

const box =
document.getElementById('fakeLiveChat');

box.innerHTML=`

<div class="fake-chat-user">
🧑 "${chat[0]}"
</div>

<br>

<div class="fake-chat-admin">
🤖 ${chat[1]}
</div>

`;

box.style.display='block';

setTimeout(()=>{

box.style.display='none';

},5000);

},12000);

/* =========================
BOTTOM SHEET
========================= */

function openSheet(product){

const sheet =
document.getElementById('bottomSheet');

sheet.classList.add('active');

document.getElementById('sheetContent')
.innerHTML=`

<p>
Produk : ${product}
</p>

<br>

<p>
⚡ Estimasi 5-30 menit
</p>

<br>

<p>
✔ Aman dan terpercaya
</p>

<br>

<button class="buy-btn"
onclick="orderNow('${product}')">

Beli Sekarang

</button>

`;

}

/* =========================
3D CARD
========================= */

document.querySelectorAll('.product-card')
.forEach(card=>{

card.addEventListener('mousemove',e=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

const rotateX =
((y/rect.height)-0.5)*20;

const rotateY =
((x/rect.width)-0.5)*-20;

card.style.transform=
`rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

card.addEventListener('mouseleave',()=>{

card.style.transform=
'rotateX(0) rotateY(0)';

});

});

/* =========================
PWA
========================= */

let deferredPrompt;

window.addEventListener(
'beforeinstallprompt',
e=>{

e.preventDefault();

deferredPrompt=e;

});

document.getElementById('installBtn')
.addEventListener('click',()=>{

if(deferredPrompt){

deferredPrompt.prompt();

}

});

/* =========================
PULL REFRESH
========================= */

let startY=0;

document.addEventListener(
'touchstart',
e=>{

startY=e.touches[0].pageY;

});

document.addEventListener(
'touchmove',
e=>{

let move=
e.touches[0].pageY;

if(move-startY>150){

location.reload();

}

});

/* =========================
AUTO ORDER POPUP
========================= */

setInterval(()=>{

showToast(
fakeOrders[
Math.floor(Math.random()*fakeOrders.length)
]
);

},15000);

/* WISHLIST */

function addWishlist(){

const wish =
document.getElementById('wishlistPopup');

wish.style.display='block';

setTimeout(()=>{

wish.style.display='none';

},2000);

}

/* SOUND */

function playClick(){

const audio =
new Audio(
'https://www.soundjay.com/buttons/sounds/button-16.mp3'
);

audio.play();

  }

/* FAQ */

function toggleFaq(element){

element.parentElement.classList.toggle('active');

}

/* COUNTDOWN */

let countDate =
new Date().getTime()+86400000;

setInterval(()=>{

let now = new Date().getTime();

let distance = countDate-now;

let hour =
Math.floor((distance%(1000*60*60*24))
/(1000*60*60));

let minute =
Math.floor((distance%(1000*60*60))
/(1000*60));

let second =
Math.floor((distance%(1000*60))/1000);

document.getElementById('hour')
.innerText=hour;

document.getElementById('minute')
.innerText=minute;

document.getElementById('second')
.innerText=second;

},1000);

/* LOADER */

window.addEventListener('load',()=>{

setTimeout(()=>{

document.getElementById('loader')
.style.display='none';

},1200);

});
