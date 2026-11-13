/* ---- your original typewriter, unchanged ---- */
const words = [
"Robotics",
"STEM Education",
"Innovation Labs",
"Coding Programs",
"Artificial Intelligence",
"Competition Training",
"IoT Solutions",
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const text = document.getElementById("typewriter-text");
function typeEffect(){
    const current = words[wordIndex];
    if(!deleting){
        text.textContent = current.substring(0,charIndex);
        charIndex++;
        if(charIndex > current.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }
    }
    else{
        text.textContent = current.substring(0,charIndex);
        charIndex--;
        if(charIndex < 0){
            deleting = false;
            wordIndex++;
            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect,deleting?60:100);
}
typeEffect();

/* ---- program switcher ---- */
const programs = {
  school:[
    {t:"Workshops",w:"One-day builds",p:"No experience needed. Leave with a working robot you built yourself.",l:["Build and program a simple bot","Learn sensors and motors","Safe, beginner-friendly kits"]},
    {t:"Regular sessions",w:"Weekly classes",p:"A steady path from first circuit to robots that make their own decisions.",l:["Electronics and block coding","Move on to text code step by step","Small projects every month"]},
    {t:"Competition training",w:"Prepare to compete",p:"Get your team ready for school robotics events.",l:["Design and strategy","Timed practice runs","Mock judging rounds"],c:1}
  ],
  college:[
    {t:"Workshops",w:"Intensive weekends",p:"Go deep on one skill and build something you can show in your portfolio.",l:["Microcontrollers and IoT","AI and vision basics","Build with real sensors and boards"]},
    {t:"Regular sessions",w:"Project labs",p:"Work on longer projects with mentors, alongside students from other colleges.",l:["Embedded programming","Robot design and control","Project reviews"]},
    {t:"Competition training",w:"Prepare to compete",p:"Train your team for inter-college contests and hackathons.",l:["Build reviews and testing","Strategy and run planning","Debugging under time pressure"],c:1}
  ]
};
const WA_NUMBER = "919969407199";
const wa = msg => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const tracks = document.getElementById("tracks");
function render(level){
  tracks.innerHTML = programs[level].map(x =>
    `<article class="track${x.c?' comp':''}"><h3>${x.t}</h3><div class="when">${x.w}</div><p>${x.p}</p><ul>${x.l.map(i=>`<li>${i}</li>`).join("")}</ul><a class="btn ghost" target="_blank" rel="noopener" href="${wa(`Hi Botxlab, I am a ${level} student and want to enquire about ${x.t}.`)}">Enquire</a></article>`
  ).join("");
}
render("school");
document.querySelectorAll(".switch button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".switch button").forEach(o=>o.setAttribute("aria-pressed",o===b));
  render(b.dataset.level);
}));

/* ---- enquiry form opens WhatsApp with the details filled in ---- */
document.getElementById("enquiry").addEventListener("submit",e=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Hi Botxlab, I would like to enquire.\nName: ${f.get("name")}\nI am a: ${f.get("level")}\nSchool/College: ${f.get("inst") || "-"}\nInterested in: ${f.get("topic")}`;
  window.open(wa(msg),"_blank","noopener");
});

/* ---- topic tiles + quick enquiry ---- */
document.querySelectorAll("[data-topic]").forEach(a=>{
  a.href = wa(`Hi Botxlab, I want to know about ${a.dataset.topic}.`);
  a.target = "_blank"; a.rel = "noopener";
});
document.getElementById("q-go").addEventListener("click",()=>{
  const l = document.getElementById("q-level").value, t = document.getElementById("q-topic").value;
  window.open(wa(`Hi Botxlab, I am a ${l.toLowerCase()} and want to enquire about ${t}.`),"_blank","noopener");
});/* ---- your original typewriter, unchanged ---- */
const words = [
"Robotics",
"STEM Education",
"Innovation Labs",
"Coding Programs",
"Artificial Intelligence",
"Competition Training",
"IoT Solutions",
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const text = document.getElementById("typewriter-text");
function typeEffect(){
    const current = words[wordIndex];
    if(!deleting){
        text.textContent = current.substring(0,charIndex);
        charIndex++;
        if(charIndex > current.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }
    }
    else{
        text.textContent = current.substring(0,charIndex);
        charIndex--;
        if(charIndex < 0){
            deleting = false;
            wordIndex++;
            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect,deleting?60:100);
}
typeEffect();

/* ---- program switcher ---- */
const programs = {
  school:[
    {t:"Workshops",w:"One-day builds",p:"No experience needed. Leave with a working robot you built yourself.",l:["Build and program a simple bot","Learn sensors and motors","Safe, beginner-friendly kits"]},
    {t:"Regular sessions",w:"Weekly classes",p:"A steady path from first circuit to robots that make their own decisions.",l:["Electronics and block coding","Move on to text code step by step","Small projects every month"]},
    {t:"Competition training",w:"Prepare to compete",p:"Get your team ready for school robotics events.",l:["Design and strategy","Timed practice runs","Mock judging rounds"],c:1}
  ],
  college:[
    {t:"Workshops",w:"Intensive weekends",p:"Go deep on one skill and build something you can show in your portfolio.",l:["Microcontrollers and IoT","AI and vision basics","Build with real sensors and boards"]},
    {t:"Regular sessions",w:"Project labs",p:"Work on longer projects with mentors, alongside students from other colleges.",l:["Embedded programming","Robot design and control","Project reviews"]},
    {t:"Competition training",w:"Prepare to compete",p:"Train your team for inter-college contests and hackathons.",l:["Build reviews and testing","Strategy and run planning","Debugging under time pressure"],c:1}
  ]
};
const WA_NUMBER = "919969407199";
const wa = msg => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const tracks = document.getElementById("tracks");
function render(level){
  tracks.innerHTML = programs[level].map(x =>
    `<article class="track${x.c?' comp':''}"><h3>${x.t}</h3><div class="when">${x.w}</div><p>${x.p}</p><ul>${x.l.map(i=>`<li>${i}</li>`).join("")}</ul><a class="btn ghost" target="_blank" rel="noopener" href="${wa(`Hi Botxlab, I am a ${level} student and want to enquire about ${x.t}.`)}">Enquire</a></article>`
  ).join("");
}
render("school");
document.querySelectorAll(".switch button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".switch button").forEach(o=>o.setAttribute("aria-pressed",o===b));
  render(b.dataset.level);
}));

/* ---- enquiry form opens WhatsApp with the details filled in ---- */
document.getElementById("enquiry").addEventListener("submit",e=>{
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Hi Botxlab, I would like to enquire.\nName: ${f.get("name")}\nI am a: ${f.get("level")}\nSchool/College: ${f.get("inst") || "-"}\nInterested in: ${f.get("topic")}`;
  window.open(wa(msg),"_blank","noopener");
});

/* ---- topic tiles + quick enquiry ---- */
document.querySelectorAll("[data-topic]").forEach(a=>{
  a.href = wa(`Hi Botxlab, I want to know about ${a.dataset.topic}.`);
  a.target = "_blank"; a.rel = "noopener";
});
document.getElementById("q-go").addEventListener("click",()=>{
  const l = document.getElementById("q-level").value, t = document.getElementById("q-topic").value;
  window.open(wa(`Hi Botxlab, I am a ${l.toLowerCase()} and want to enquire about ${t}.`),"_blank","noopener");
});