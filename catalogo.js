const PHONE='523331191167';

const products=[
{name:'Oxímetro de niño',detail:'Equipo de monitoreo pediátrico',price:180,cat:'Equipo médico',icon:'👶'},
{name:'Oxímetro A2',detail:'Medición de saturación de oxígeno',price:100,cat:'Equipo médico',icon:'🩺'},
{name:'Oxímetro económico',detail:'Equipo portátil',price:90,cat:'Equipo médico',icon:'🫁'},
{name:'Oxímetro recargable',detail:'Equipo recargable de monitoreo',price:280,cat:'Equipo médico',icon:'🩺'},
{name:'Baumanómetro de escritorio',detail:'Equipo de medición de presión arterial',price:220,cat:'Equipo médico',icon:'🩺'},
{name:'Baumanómetro de pulsera',detail:'Equipo portátil de presión arterial',price:240,cat:'Equipo médico',icon:'🩺'},
{name:'Termómetro para niño',detail:'Termómetro infantil',price:75,cat:'Equipo médico',icon:'🌡️'},
{name:'Termómetro de mercurio',detail:'Termómetro clínico',price:35,cat:'Equipo médico',icon:'🌡️'},
{name:'Termómetro de pistola',detail:'Medición sin contacto',price:160,cat:'Equipo médico',icon:'🌡️'},
{name:'Termómetro digital',detail:'Termómetro clínico digital',price:35,cat:'Equipo médico',icon:'🌡️'},
{name:'Termómetro infrarrojo',detail:'Medición infrarroja',price:220,cat:'Equipo médico',icon:'🌡️'},
{name:'Nebulizador azul',detail:'Equipo para nebulización',price:225,cat:'Equipo médico',icon:'🫁'},
{name:'Esfigmomanómetro',detail:'Equipo para presión arterial',price:320,cat:'Equipo médico',icon:'🩺'},
{name:'Estetoscopio',detail:'Equipo médico',price:420,cat:'Equipo médico',icon:'🩺'},
{name:'Atomizador comprimido para nebulizar',detail:'Aparato para nebulización',price:420,cat:'Equipo médico',icon:'🫁'},
{name:'Glucómetro con agujas y estuche',detail:'Equipo para medición de glucosa',price:440,cat:'Equipo médico',icon:'🩸'},
{name:'Lámpara para oídos',detail:'Equipo médico',price:100,cat:'Equipo médico',icon:'🔦'},
{name:'Prueba Dengue Dúo Realy',detail:'Precio por pieza',price:90,cat:'Pruebas rápidas',icon:'🦟'},
{name:'Prueba COVID e Influenza Dúo',detail:'Precio por pieza',price:90,cat:'Pruebas rápidas',icon:'🦠'},
{name:'Prueba antidoping de 6 parámetros',detail:'Precio por pieza',price:100,cat:'Pruebas rápidas',icon:'🧪'},
{name:'Prueba cuádruple Influenza A y B, SARS-CoV-2, Virus Sincitial y Adenovirus',detail:'Precio por pieza',price:120,cat:'Pruebas rápidas',icon:'🧬'},
{name:'Cubrebocas KN95 negro',detail:'Precio por pieza',price:5,cat:'Protección',icon:'😷'},
{name:'Cubrebocas TTP infantil rosa/blanco',detail:'Caja con 50 piezas',price:60,cat:'Protección',icon:'😷'},
{name:'Cubrebocas TTP negro',detail:'Caja con 50 piezas',price:60,cat:'Protección',icon:'😷'},
{name:'Cubrebocas KN94',detail:'Precio por pieza',price:5,cat:'Protección',icon:'😷'},
{name:'Tubo rojo',detail:'Caja con 100 tubos',price:220,cat:'Laboratorio',icon:'🧪'},
{name:'Tubo lila',detail:'Caja con 100 tubos',price:280,cat:'Laboratorio',icon:'🧪'},
{name:'Cofias',detail:'Paquete con 100 piezas',price:160,cat:'Protección',icon:'🥼'},
{name:'Guantes de nitrilo chico',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes de nitrilo mediano',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes de nitrilo grande',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes Ambiderm estéril chico',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes Ambiderm estéril mediano',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Guantes Ambiderm estéril grande',detail:'Caja con 100 guantes',price:160,cat:'Guantes',icon:'🧤'},
{name:'Suplemento alimenticio con 17 vitaminas',detail:'Suplemento alimenticio',price:300,cat:'Vitaminas y suplementos',icon:'🌿'}
,
{name:'Forxiga',detail:'Promoción: 3 cajas por $1,000',price:1000,cat:'Promociones',icon:'💙'},
{name:'Trayenta',detail:'Promoción: 3 cajas por $1,000',price:1000,cat:'Promociones',icon:'💙'}
];

const regulated = [{"name": "Alprazolam de 1 mg con 30 tabletas", "retail": 217.35, "wholesale": 189.0}, {"name": "Alprazolam de 0.25 mg", "retail": 149.5, "wholesale": 130.0}, {"name": "Alprazolam de 0.50 mg con 30 tabletas", "retail": 226.55, "wholesale": 197.0}, {"name": "Alprazolam de 2 mg con 30 tabletas", "retail": 325.45, "wholesale": 283.0}, {"name": "Axcion fentermina 30 mg con 30 tabletas", "retail": 356.5, "wholesale": 310.0}, {"name": "Axcion fentermina AP 30 mg con 30 tabletas", "retail": 572.7, "wholesale": 498.0}, {"name": "Bromazepam 3 mg con 30 tabletas", "retail": 207.0, "wholesale": 180.0}, {"name": "Buprenorfina 0.3 mg IV, 5 ámpulas", "retail": 517.5, "wholesale": 450.0}, {"name": "Clonazepam gotas", "retail": 103.5, "wholesale": 90.0}, {"name": "Clonazepam tabletas", "retail": 103.5, "wholesale": 90.0}, {"name": "Diazepam", "retail": 103.5, "wholesale": 90.0}, {"name": "Diazepam 10 mg Tempus", "retail": 115.0, "wholesale": 100.0}, {"name": "Diazepam 50 ampolletas", "retail": 667.0, "wholesale": 580.0}, {"name": "Esbecalps 60 tabletas", "retail": 962.55, "wholesale": 837.0}, {"name": "Farmapram (Alprazolam 0.50 mg c/30)", "retail": 294.4, "wholesale": 256.0}, {"name": "Farmapram (Alprazolam 2 mg c/30)", "retail": 488.75, "wholesale": 425.0}, {"name": "Imipramina 25 mg con 20", "retail": 143.75, "wholesale": 125.0}, {"name": "Itravil clobenzorex 30 mg con 60 cápsulas", "retail": 960.25, "wholesale": 835.0}, {"name": "Lose 1 mg", "retail": 279.45, "wholesale": 243.0}, {"name": "Lose 2 mg", "retail": 333.5, "wholesale": 290.0}, {"name": "Lozam 1 mg c/40", "retail": 581.9, "wholesale": 506.0}, {"name": "Lozam 2 mg c/40", "retail": 1040.18, "wholesale": 904.5}, {"name": "Lozam 2 mg c/80", "retail": 1676.7, "wholesale": 1458.0}, {"name": "Metilfenidato 10 mg c/60", "retail": 379.5, "wholesale": 330.0}, {"name": "Metilfenidato 27 mg c/30", "retail": 1234.24, "wholesale": 1073.25}, {"name": "Metilfenidato 54 mg c/30", "retail": 1490.4, "wholesale": 1296.0}, {"name": "Obeclox c/60", "retail": 993.6, "wholesale": 864.0}, {"name": "Terfarmex fentermina 15 mg", "retail": 262.2, "wholesale": 228.0}, {"name": "Tradea LP (Metilfenidato 20 mg liberación prolongada) c/30", "retail": 1118.95, "wholesale": 973.0}, {"name": "Tramadol Adiolol 100 mg c/50 tabletas", "retail": 264.5, "wholesale": 230.0}, {"name": "Tramadol / Ketorolaco 10 mg / 25 mg c/6 Sinoris", "retail": 138.0, "wholesale": 120.0}, {"name": "Tramadol / Paracetamol B Tracet-ER 20 tabletas", "retail": 161.0, "wholesale": 140.0}];


const money=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(n);
function link(p){
  const t=`Hola, quiero pedir este producto de El Bambino Daniel:\n\n${p.name}\nPrecio mostrado: ${money(p.price)}\nCantidad: 1\n\n¿Me confirma disponibilidad, precio final y entrega?`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
}
function render(){
  const q=document.querySelector('#search').value.toLowerCase().trim();
  const c=document.querySelector('#cat').value;
  const list=products.filter(p=>(c==='Todos'||p.cat===c)&&(!q||(p.name+' '+p.detail).toLowerCase().includes(q)));
  document.querySelector('#grid').innerHTML=list.map(p=>`<article><div class="icon">${p.icon}</div><span>${p.cat}</span><h3>${p.name}</h3><p>${p.detail}</p><strong>${money(p.price)}</strong><a class="wa" target="_blank" href="${link(p)}">Pedir por WhatsApp</a></article>`).join('')||'<p>No se encontraron productos.</p>';
}
document.querySelector('#search').addEventListener('input',render);
document.querySelector('#cat').addEventListener('change',render);
function renderRegulated(){
  const body=document.querySelector('#regulated-list');
  body.innerHTML=regulated.map(p=>`<tr><td><strong>${p.name}</strong></td><td>${money(p.retail)}</td><td class="wholesale-price">${money(p.wholesale)}</td></tr>`).join('');
}
render();
renderRegulated();
