function loadWord(){
const now = new Date();
const key = "wotd";
const saved = localStorage.getItem(key);
const savedAt = localStorage.getItem(key + "Time");
const today = now.toISOString().slice(0,10);
const cutOff = new Date(`${today}T06:05:00`);

if (saved && savedAt && new Date(savedAt) > cutOff){
    w.textContent = saved;
}
else{
    fetch("https://minddump.kanudude191.workers.dev")
    .then(r => r.text())
    .then(t => {
        w.textContent = t;
        localStorage.setItem(key,t);
        localStorage.setItem(key + "Time", now.toISOString());
        }
    
        );
    }
}
