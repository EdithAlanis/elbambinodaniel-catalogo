const PHONE='523331191167';
const products=[
{name:'Guantes de nitrilo chico',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes de nitrilo mediano',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes de nitrilo grande',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes Ambiderm estéril chico',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes Ambiderm estéril mediano',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes Ambiderm estéril grande',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Lámpara para oídos',detail:'Equipo médico',price:100,cat:'Equipo médico',icon:'🩺'},
{name:'Oxímetro para niño',detail:'Equipo de monitoreo pediátrico',price:180,cat:'Equipo médico',icon:'👶'},
{name:'Oxímetro A2',detail:'Medición de saturación de oxígeno',price:100,cat:'Equipo médico',icon:'🩺'},
{name:'Oxímetro económico',detail:'Equipo portátil',price:90,cat:'Equipo médico',icon:'🫁'},
{name:'Prueba Dengue Dúo Realy',detail:'Precio por pieza',price:90,cat:'Pruebas rápidas',icon:'🦟'},
{name:'Prueba COVID e Influenza Dúo o VIH',detail:'Precio por pieza',price:90,cat:'Pruebas rápidas',icon:'🦠'},
{name:'Prueba antidoping de 6 parámetros',detail:'Precio por pieza',price:100,cat:'Pruebas rápidas',icon:'🧪'},
{name:'Prueba triple Influenza A y B, COVID-19 y Virus Sincitial',detail:'Precio por pieza',price:100,cat:'Pruebas rápidas',icon:'🧬'},
{name:'Prueba cuádruple Influenza A y B, COVID-19, Virus Sincitial y Adenovirus',detail:'Precio por pieza',price:120,cat:'Pruebas rápidas',icon:'🧬'},
{name:'Suplemento alimenticio con 17 vitaminas',detail:'Suplemento alimenticio',price:300,cat:'Vitaminas y suplementos',icon:'🌿'}
];
const money=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(n);
function link(p){const t=`Hola, quiero pedir este producto de El Bambino Daniel:\n\n${p.name}\nPrecio mostrado: ${money(p.price)}\nCantidad: 1\n\n¿Me confirma disponibilidad, precio final y entrega?`;return `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`}
function render(){const q=document.querySelector('#search').value.toLowerCase().trim();const c=document.querySelector('#cat').value;const list=products.filter(p=>(c==='Todos'||p.cat===c)&&(!q||(p.name+' '+p.detail).toLowerCase().includes(q)));document.querySelector('#grid').innerHTML=list.map(p=>`<article><div class="icon">${p.icon}</div><span>${p.cat}</span><h3>${p.name}</h3><p>${p.detail}</p><strong>${money(p.price)}</strong><a class="wa" target="_blank" href="${link(p)}">Pedir por WhatsApp</a></article>`).join('')||'<p>No se encontraron productos.</p>'}
document.querySelector('#search').addEventListener('input',render);document.querySelector('#cat').addEventListener('change',render);render();
