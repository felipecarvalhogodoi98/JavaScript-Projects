let current = 'X';
let winner = false;
let matriz = new Array(3);
matriz[0] = [0,1,2];
matriz[1] = [0,1,2];
matriz[2] = [0,1,2];

const attCurrent = () => { 
  current = current === 'X' ? 'O' : 'X'
  document.querySelector('.current').textContent = current;
};

const p0 = (value) => value === matriz[0][0].textContent && matriz[0][0].textContent === matriz[0][1].textContent && matriz[0][0].textContent === matriz[0][2].textContent;
const p1 = (value) => value === matriz[1][0].textContent && matriz[1][0].textContent === matriz[1][1].textContent && matriz[1][0].textContent === matriz[1][2].textContent;
const p2 = (value) => value === matriz[2][0].textContent && matriz[2][0].textContent === matriz[2][1].textContent && matriz[2][0].textContent === matriz[2][2].textContent;
const p3 = (value) => value === matriz[0][0].textContent && matriz[0][0].textContent === matriz[1][0].textContent && matriz[0][0].textContent === matriz[2][0].textContent;
const p4 = (value) => value === matriz[0][1].textContent && matriz[0][1].textContent === matriz[1][1].textContent && matriz[0][1].textContent === matriz[2][1].textContent;
const p5 = (value) => value === matriz[0][2].textContent && matriz[0][2].textContent === matriz[1][2].textContent && matriz[0][2].textContent === matriz[2][2].textContent;
const p6 = (value) => value === matriz[0][0].textContent && matriz[0][0].textContent === matriz[1][1].textContent && matriz[0][0].textContent === matriz[2][2].textContent;
const p7 = (value) => value === matriz[0][2].textContent && matriz[0][2].textContent === matriz[1][1].textContent && matriz[0][2].textContent === matriz[2][0].textContent;



const verifyWinner = () => {
  if(p0('X') || p1('X') || p2('X') || p3('X') || p4('X') || p5('X') || p6('X') || p7('X')){ 
    document.querySelector('.win').textContent = 'Winner X';
    winner = true;
  }else if(p0('O') || p1('O') || p2('O') || p3('O') || p4('O') || p5('O') || p6('O') || p7('O')){ 
    document.querySelector('.win').textContent = 'Winner O';
    winner = true;
  }else{
    document.querySelector('.win').textContent = '';
    winner = false;
  }
}

matriz.forEach((m, index)=> {
 m.forEach(mm =>{
   matriz[index][mm] = document.querySelector(`#b${index}${mm}`);
   matriz[index][mm].addEventListener('click', () => {
     if(matriz[index][mm].textContent === '' && !winner){
        matriz[index][mm].textContent = current;
        verifyWinner();
        attCurrent();
        
     }
   })
 }) 
});


document.querySelector('.reset').addEventListener('click',() => {
  matriz.forEach((m) => {
    m.forEach(mm => {
      mm.textContent = '';
    })
  });
  verifyWinner();
  if(current === 'O'){
    attCurrent();
  }
});