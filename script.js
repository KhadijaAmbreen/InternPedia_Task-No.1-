// con 2 chevron
let c = document.getElementById("con2-tiles")
let a = document.getElementById("left-chevron")
a.addEventListener("click",()=>{
    c.scrollBy(-200,0)
})
let b = document.getElementById("right-chevron")
b.addEventListener("click",()=>{
    c.scrollBy(200,0)
})
// con 3 chevron
let p= document.getElementById("con3-tiles")
let q = document.getElementById("con3-left-chevron")
q.addEventListener("click",()=>{
    p.scrollBy(-200,0)
})
let r = document.getElementById("con3-right-chevron")
r.addEventListener("click",()=>{
    p.scrollBy(200,0)
})
// con 4 chevron
let g= document.getElementById("con4-tiles")
let h = document.getElementById("con4-left-chevron")
h.addEventListener("click",()=>{
    g.scrollBy(-200,0)
})
let i = document.getElementById("con4-right-chevron")
i.addEventListener("click",()=>{
    g.scrollBy(200,0)
})
// con 5 chevron
let w= document.getElementById("con5-tiles")
let x = document.getElementById("con5-left-chevron")
x.addEventListener("click",()=>{
    w.scrollBy(-200,0)
})
let y = document.getElementById("con5-right-chevron")
y.addEventListener("click",()=>{
    w.scrollBy(200,0)
})