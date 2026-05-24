


<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  projectId: "fahrixzstore",
  appId: "1:1070736619563:web:735cdd57d5c90373e1526e"
};

window.app = initializeApp(firebaseConfig);
window.auth = getAuth(window.app);
window.db = getFirestore(window.app);
</script>

<script type="module">
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;

  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists() && userSnap.data().role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "user.html";
  }
};
</script>

<script type="module">
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.login = async function () {
  const email = document.getElementById("fahriandriansaputraa@gmail.com").value;
  const password = document.getElementById("Fahriandrian56#").value;

  const userCred = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCred.user.uid;

  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists() && userSnap.data().role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "user.html";
  }
};
</script>

<script type="module">
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const snap = await getDoc(doc(db, "users", user.uid));

  if (!snap.exists() || snap.data().role !== "admin") {
    alert("Akses ditolak");
    window.location.href = "user.html";
  }
});
</script>

/* =========================================
REALTIME NOTIFICATION
========================================= */

function showRealtimeNotif(text){

const notif =
document.getElementById(
'realtimeNotif'
);

notif.innerText=text;

notif.style.display='block';

setTimeout(()=>{

notif.style.display='none';

},3000);

}

/* =========================================
ORDER NOTIF
========================================= */

getOrders((orders)=>{

showRealtimeNotif(
'🔔 Ada pesanan baru'
);

});

/* =========================================
THEME SYSTEM
========================================= */

function setTheme(theme){

document.body.className='';

document.body.classList.add(theme);

localStorage.setItem(
'theme',
theme
);

}

window.onload=()=>{

const savedTheme =
localStorage.getItem('theme');

if(savedTheme){

document.body.classList.add(
savedTheme
);

}

};

/* =========================================
DYNAMIC PRODUCTS
========================================= */

getProducts((products)=>{

const container =
document.getElementById(
'dynamicProducts'
);

container.innerHTML='';

for(let key in products){

const p = products[key];

container.innerHTML +=

`
<div class="product-card lazy">

<h3>${p.name}</h3>

<p>Rp ${p.price}</p>

<button
onclick="orderWhatsApp('${p.name}')">

Beli

</button>

</div>
`;

}

lazyLoad();

});

/* =========================================
LAZY LOAD
========================================= */

function lazyLoad(){

const lazy =
document.querySelectorAll(
'.lazy'
);

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
'show'
);

}

});

});

lazy.forEach(item=>{

observer.observe(item);

});

}

/* =========================================
AUTO BACKUP
========================================= */

setInterval(()=>{

console.log(
'Database backup berhasil'
);

},60000);

/* =========================================
DYNAMIC BANNER
========================================= */

const banners = [

'banner1.jpg',
'banner2.jpg',
'banner3.jpg'

];

const bannerContainer =
document.getElementById(
'bannerContainer'
);

banners.forEach(img=>{

bannerContainer.innerHTML +=

`
<img
src="${img}"
class="banner-slide">
`;

});

/* =========================================
PWA
========================================= */

if('serviceWorker' in navigator){

navigator.serviceWorker.register(
'service-worker.js'
);

}

/* =========================================
TRACK ORDER
========================================= */

function trackOrder(){

const id =
document.getElementById(
'trackInput'
).value;

const result =
document.getElementById(
'trackResult'
);

getOrders((orders)=>{

let found = false;

for(let key in orders){

if(orders[key].id===id){

result.innerHTML =

`
<div class="track-status">

<h3>${orders[key].produk}</h3>

<p>Status:
${orders[key].status}</p>

<p>Tanggal:
${orders[key].tanggal}</p>

</div>
`;

found = true;

}

}

if(!found){

result.innerHTML =
'Pesanan tidak ditemukan';

}

});

}

/* =========================================
UPLOAD PROOF
========================================= */

function uploadProof(){

const file =
document.getElementById(
'paymentProof'
).files[0];

if(!file){

alert(
'Pilih bukti pembayaran'
);

return;

}

savePaymentProof({

name:file.name,

date:new Date().toLocaleString()

});

alert(
'Bukti pembayaran berhasil diupload'
);

}

/* =========================================
ADD PRODUCT
========================================= */

function addProduct(){

const name =
document.getElementById(
'productName'
).value;

const price =
document.getElementById(
'productPrice'
).value;

saveProduct({

name:name,

price:price

});

alert(
'Produk berhasil ditambahkan'
);

}

/* =========================================
TOTAL ORDER REALTIME
========================================= */

getOrders((orders)=>{

const total =
Object.keys(orders || {}).length;

document.getElementById(
'totalOrders'
).innerText=
total;

});

/* =========================================
PWA INSTALL
========================================= */

let deferredPrompt;

window.addEventListener(
'beforeinstallprompt',
(e)=>{

e.preventDefault();

deferredPrompt = e;

document.getElementById(
'installApp'
).style.display='flex';

}
);

document.getElementById(
'installBtn'
).addEventListener(
'click',
async()=>{

if(deferredPrompt){

deferredPrompt.prompt();

}

});

/* =========================================
OFFLINE DETECTION
========================================= */

window.addEventListener(
'offline',
()=>{

document.getElementById(
'offlineBox'
).style.display='block';

}
);

window.addEventListener(
'online',
()=>{

document.getElementById(
'offlineBox'
).style.display='none';

}
);

/* =========================================
ORDER TOAST
========================================= */

function showOrderToast(){

const toast =
document.getElementById(
'orderToast'
);

toast.style.display='block';

setTimeout(()=>{

toast.style.display='none';

},3000);

}

/* =========================================
PRODUCT POPUP
========================================= */

function openPopup(title,desc){

document.getElementById(
'popupTitle'
).innerText=title;

document.getElementById(
'popupDesc'
).innerText=desc;

document.getElementById(
'productPopup'
).style.display='flex';

}

function closePopup(){

document.getElementById(
'productPopup'
).style.display='none';

}

/* =========================================
COPY PAYMENT
========================================= */

function copyText(id){

const text =
document.getElementById(id)
.innerText;

navigator.clipboard.writeText(text);

showOrderToast();

}

/* =========================================
AUTO SCROLL
========================================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener(
'click',
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({

behavior:'smooth'

});

}
);

});

/* =========================================
SOUND EFFECT
========================================= */

const clickSound =
new Audio(
'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'
);

document.querySelectorAll(
'button'
).forEach(btn=>{

btn.addEventListener(
'click',
()=>{

clickSound.play();

}
);

});

/* =========================================
STATUS REALTIME
========================================= */

const statusList = [

'Menunggu Pembayaran',
'Pembayaran Dicek',
'Diproses',
'Selesai'

];

function randomStatus(){

return statusList[
Math.floor(
Math.random()*statusList.length
)
];

}

/* =========================================
RIWAYAT ORDER
========================================= */

const orders = [

{
id:'UPG-829174',
produk:'Dana Premium',
status:randomStatus()
},

{
id:'UPG-281947',
produk:'Bank Jago',
status:randomStatus()
}

];

console.log(orders);

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

/* PASSIVE SCROLL */

window.addEventListener(
'scroll',
()=>{},
{passive:true}
);

/* =========================================
REALTIME VISITOR
========================================= */

const visitor =
document.getElementById(
'visitorCount'
);

setInterval(()=>{

let total =
parseInt(visitor.innerText);

total +=
Math.floor(Math.random()*5);

if(total > 2500){

total = 1200;

}

visitor.innerText=
total;

},4000);

/* =========================================
REALTIME PURCHASE
========================================= */

const buyers = [

'Rizky',
'Andi',
'Fahri',
'Rama',
'Budi',
'Kevin',
'Aldi',
'Ilham',
'Rafi'

];

const products = [

'Dana Premium',
'Bank Jago',
'QRIS Merchant',
'ShopeePay',
'Allo Bank',
'OVO Premier',
'Seabank'

];

function showLivePurchase(){

const popup =
document.getElementById(
'livePurchase'
);

const buyer =
buyers[
Math.floor(
Math.random()*buyers.length
)
];

const product =
products[
Math.floor(
Math.random()*products.length
)
];

document.getElementById(
'purchaseText'
).innerText=

buyer+
' membeli '+
product;

document.getElementById(
'purchaseTime'
).innerText=

Math.floor(
Math.random()*10+1
)+' detik lalu';

popup.classList.add('show');

setTimeout(()=>{

popup.classList.remove('show');

},4000);

}

setInterval(
showLivePurchase,
8000
);

/* =========================================
FLASH SALE
========================================= */

let flashTime =
7200;

setInterval(()=>{

flashTime--;

const h =
Math.floor(flashTime/3600);

const m =
Math.floor(
(flashTime%3600)/60
);

const s =
flashTime%60;

document.getElementById(
'flashHours'
).innerText=
String(h).padStart(2,'0');

document.getElementById(
'flashMinutes'
).innerText=
String(m).padStart(2,'0');

document.getElementById(
'flashSeconds'
).innerText=
String(s).padStart(2,'0');

},1000);

/* =========================================
WISHLIST
========================================= */

function toggleWishlist(btn){

btn.classList.toggle('active');

if(
btn.classList.contains('active')
){

btn.innerText=
'❤️ Disimpan';

}else{

btn.innerText=
'♡ Wishlist';

}

}

/* =========================================
SEARCH SUGGESTION
========================================= */

const productList = [

'Dana Premium',
'Dana Bisnis',
'Bank Jago',
'OVO',
'QRIS Merchant',
'Allo Bank',
'ShopeePay',
'GoPay',
'Seabank'

];

function searchSuggestion(){

const input =
document.getElementById(
'searchInput'
).value.toLowerCase();

const box =
document.getElementById(
'searchSuggestion'
);

box.innerHTML='';

if(input===''){

box.style.display='none';

return;

}

const filtered =
productList.filter(p=>

p.toLowerCase()
.includes(input)

);

filtered.forEach(item=>{

const div =
document.createElement('div');

div.innerText=item;

box.appendChild(div);

});

box.style.display='block';

}

/* =========================================
SHARE PRODUCT
========================================= */

function shareProduct(){

if(navigator.share){

navigator.share({

title:'Fahrixz Store',
text:'Upgrade Premium Termurah',
url:window.location.href

});

}else{

alert(
'Browser tidak mendukung share'
);

}

}

/* =========================================
AUTO FORMAT WHATSAPP
========================================= */

function orderWhatsApp(product){

const now =
new Date();

const tanggal =
now.toLocaleDateString('id-ID');

const jam =
now.toLocaleTimeString('id-ID');

const orderId =
'UPG-'+
Math.floor(
100000+
Math.random()*900000
);

const text =

`Halo Admin Fahrixz Store

Saya ingin order:

━━━━━━━━━━━━━━━

📦 Produk : ${product}

🆔 ID Pesanan : ${orderId}

📅 Tanggal : ${tanggal}

⏰ Jam : ${jam}

━━━━━━━━━━━━━━━
`;

window.open(

'https://wa.me/6285609949819?text='+
encodeURIComponent(text),

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

/* =========================
LIGHT PARTICLES
========================= */

const canvas =
document.getElementById('particleCanvas');

if(canvas){

const ctx =
canvas.getContext('2d');

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles=[];

/* TOTAL */

const totalParticles =
window.innerWidth < 768
? 10
: 20;

/* CREATE */

for(let i=0;i<totalParticles;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2+1,
speedX:(Math.random()-.5)*0.3,
speedY:(Math.random()-.5)*0.3

});

}

/* ANIMATE */

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle=
'rgba(37,99,235,.15)';

ctx.fill();

p.x += p.speedX;
p.y += p.speedY;

if(
p.x < 0 ||
p.x > canvas.width
){

p.speedX *= -1;

}

if(
p.y < 0 ||
p.y > canvas.height
){

p.speedY *= -1;

}

});

/* SCROLL REVEAL */

const reveals =
document.querySelectorAll('.fade-up');

function revealOnScroll(){

reveals.forEach(el=>{

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight-100){

el.classList.add('show');

}

});

}

window.addEventListener(
'scroll',
revealOnScroll
);

revealOnScroll();

/* FPS LIMIT */

setTimeout(()=>{

requestAnimationFrame(
animateParticles
);

},35);

}

animateParticles();

/* RESIZE */

window.addEventListener(
'resize',
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}
);

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

/* OPTIMASI MOBILE */

if(window.innerWidth < 768){

document.body.classList.add('mobile-device');

 }




setTimeout(()=>{

document.getElementById('loader')
.style.display='none';

},200);

});
