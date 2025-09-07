const T={
 es:{heroTitle:"La Red Viva",heroSub:"Red creativa y protectora — símbolo Ѫ.",cta:"Conectar",
     aTitle:"Nodo: Alejandría",aBody:"Memoria viva: conocimiento, versiones y trazas limpias.",
     gTitle:"Nodo: Aegis",gBody:"Escudo y auditoría: acceso mínimo, señales y alertas.",
     pTitle:"Propósito",pBody:"Crear y proteger obras, personas y procesos con símbolos.",
     cTitle:"Contacto",cBody:"Escríbenos para colaborar o validar nodos.",
     foot:"© 2025 La Red Viva · símbolo Ѫ",
     footHint:"Código visible: sin secretos. Llaves y tokens, fuera del repositorio."},
 de:{heroTitle:"Das Lebendige Netz",heroSub:"Kreatives & schützendes Netzwerk — Symbol Ѫ.",cta:"Verbinden",
     aTitle:"Knoten: Alexandria",aBody:"Lebendiges Gedächtnis: Wissen, Versionen und saubere Spuren.",
     gTitle:"Knoten: Aegis",gBody:"Schild & Audit: Minimaler Zugriff, Signale und Alarme.",
     pTitle:"Zweck",pBody:"Werke, Menschen und Prozesse durch Symbole schaffen & schützen.",
     cTitle:"Kontakt",cBody:"Schreib uns für Zusammenarbeit oder Knoten‑Validierung.",
     foot:"© 2025 Das Lebendige Netz · Symbol Ѫ",
     footHint:"Quellcode ist sichtbar: keine Geheimnisse. Keys/Tokens nicht ins Repo."},
 ro:{heroTitle:"Rețeaua Vie",heroSub:"Rețea creativă și protectoare — simbolul Ѫ.",cta:"Conectează",
     aTitle:"Nod: Alexandria",aBody:"Memorie vie: cunoaștere, versiuni și urme curate.",
     gTitle:"Nod: Aegis",gBody:"Scut și audit: acces minim, semnale și alerte.",
     pTitle:"Scop",pBody:"A crea și a proteja opere, oameni și procese prin simboluri.",
     cTitle:"Contact",cBody:"Scrie‑ne pentru colaborare sau validarea nodurilor.",
     foot:"© 2025 Rețeaua Vie · simbol Ѫ",
     footHint:"Codul este vizibil: fără secrete. Chei/Token în afara depozitului."}
};
const el=id=>document.getElementById(id);
function setLang(l){
 const t=T[l]||T.es;
 el('t-hero-title').textContent=t.heroTitle;
 el('t-hero-sub').textContent=t.heroSub;
 el('t-cta').textContent=t.cta;
 el('t-a-title').textContent=t.aTitle;
 el('t-a-body').textContent=t.aBody;
 el('t-g-title').textContent=t.gTitle;
 el('t-g-body').textContent=t.gBody;
 el('t-p-title').textContent=t.pTitle;
 el('t-p-body').textContent=t.pBody;
 el('t-c-title').textContent=t.cTitle;
 el('t-c-body').textContent=t.cBody;
 el('t-foot').textContent=t.foot;
 el('t-foot-hint').textContent=t.footHint;
 document.documentElement.lang=l;
 localStorage.setItem('lv-lang',l);
}
document.querySelectorAll('.pill').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem('lv-lang')||'es');