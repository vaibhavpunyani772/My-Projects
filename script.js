let conctainer = document.querySelector(".container")


const colorArray = [
  "linear-gradient(180deg, rgba(189, 122, 240, 0.18), rgba(122, 240, 193, 0.06))",
  "linear-gradient(45deg, rgba(122, 240, 193, 0.18), rgba(240, 122, 193, 0.06))",
  "linear-gradient(120deg, rgba(240, 122, 238, 0.18), rgba(122, 193, 240, 0.06))",
  "linear-gradient(200deg, rgba(240, 171, 122, 0.18), rgba(193, 240, 122, 0.06))",
  "linear-gradient(300deg, rgba(240, 122, 136, 0.18), rgba(122, 240, 193, 0.06))",
  "linear-gradient(90deg, rgba(122, 122, 240, 0.18), rgba(240, 193, 122, 0.06))",
  "linear-gradient(135deg, rgba(122, 240, 178, 0.18), rgba(240, 122, 122, 0.06))",
  "linear-gradient(270deg, rgba(240, 200, 122, 0.18), rgba(122, 240, 220, 0.06))",
  "linear-gradient(60deg, rgba(200, 122, 240, 0.18), rgba(240, 122, 190, 0.06))",
  "linear-gradient(160deg, rgba(122, 240, 220, 0.18), rgba(122, 180, 240, 0.06))",
  "linear-gradient(210deg, rgba(240, 122, 193, 0.18), rgba(193, 240, 122, 0.06))",
  "linear-gradient(75deg, rgba(193, 122, 240, 0.18), rgba(240, 193, 122, 0.06))",
  "linear-gradient(250deg, rgba(122, 240, 160, 0.18), rgba(122, 193, 240, 0.06))",
  "linear-gradient(330deg, rgba(240, 160, 122, 0.18), rgba(122, 240, 193, 0.06))",
  "linear-gradient(15deg, rgba(122, 193, 240, 0.18), rgba(240, 122, 238, 0.06))",
  "linear-gradient(120deg, rgba(240, 122, 140, 0.18), rgba(122, 240, 190, 0.06))",
  "linear-gradient(280deg, rgba(122, 240, 210, 0.18), rgba(193, 122, 240, 0.06))",
  "linear-gradient(45deg, rgba(240, 122, 170, 0.18), rgba(122, 220, 240, 0.06))",
  "linear-gradient(300deg, rgba(122, 240, 130, 0.18), rgba(240, 200, 122, 0.06))",
  "linear-gradient(180deg, rgba(180, 122, 240, 0.18), rgba(122, 240, 210, 0.06))"
];
;


const projectsData = [
    {
        name:"Calculator",
        link:"https://calculator-kappa-eight-92.vercel.app/",
    },
    {
        name:"currency conveter",
        link:"https://currency-converter-n2qb.vercel.app/",
    },
    {
        name:"rock paper scissors",
        link:"https://rock-paper-scissors-zeta-coral.vercel.app/",
    },
    {
        name:"tic tac toe",
        link:"https://tik-tac-toe-self.vercel.app/",
    },
    {
        name:"memory card flip ",
        link:"https://memory-card-flip-game-brown.vercel.app/",
    },
    {
        name:"currency converter React js",
        link:"https://currency-converter-react-gilt.vercel.app/"

    },
    {
        name:"Todo Manager",
        link:"https://todo-manager-seven-wheat.vercel.app/"

    }
];

for(let i = 0 ; i<projectsData.length;i++) {
    let a = document.createElement("a");
    a.href=projectsData[i].link;
    a.innerHTML=`
    <div class="projectName">${projectsData[i].name}</div>
    `
    a.classList.add("div"); 
    const randomidx = Math.floor(Math.random()*colorArray.length)
    a.style.background=colorArray[randomidx]
    console.log(randomidx)
conctainer.appendChild(a);
}