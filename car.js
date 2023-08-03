let des = document.getElementById('des').getContext('2d')

// definição das instâncias
const f1 = new F1(260,460,80,150,'assets/pedro.png')
const c1= new Car(100,-100,120,100,'assets/pablo.png')
// const c2 = new Car(250,-300,50,20,'yellow')
const c2 = new Car(350,-500,120,100,'assets/pablo.png')
const bg_e = new Est_l(10,0,8,600,'white')
const bg_d = new Est_l(580,0,8,600,'white')
const bg_c1 = new Est_c(291,0,8,80,'yellow')
const bg_c2 = new Est_c(291,160,8,80,'yellow')
const bg_c3 = new Est_c(291,320,8,80,'yellow')
const bg_c4 = new Est_c(291,480,8,80,'yellow')

const som1 = new Audio('assets/motor_11.wav')
const som2 = new Audio('assets/batida_carro_.mp3')
som1.volume = 1.0
som1.loop = true

// definição dos textos
const t1 = new Text()
const t2 = new Text()
const t3 = new Text()
const t4 = new Text()

// definição das instâncias do som

// controle de movimentação
document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        f1.dir -=5
    }else if(event.key === 'd'){
        f1.dir +=5
    }
    som1.play()
})

document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        f1.dir = 0
    }else if(event.key === 'd'){
        f1.dir = 0
    }
})

// game over

// pontos

// colisao
function colisao (){
    if(f1.colid(c1)){
        console.log('colidiu 1')
        som1.pause()
        som2.play()
    }else if(f1.colid(c2)){
        console.log('colidiu 2')
    }
}

//Desenha
function desenha(){
    // som1.play()
    bg_e.des_obj()
    bg_d.des_obj()
    bg_c1.des_obj()
    bg_c2.des_obj()
    bg_c3.des_obj()
    bg_c4.des_obj()
    t1.des_text('Pontos:',40,40,'yellow','20px Times')
    t2.des_text('Vidas:',450,40,'green','20px Times')
    t3.des_text('55',110,40,'orange','20px Times')
    t4.des_text('10',510,40,'orange','20px Times')
    c1.des_obj()
    c2.des_obj()
    f1.des_obj()
}

//Atualiza
function atualiza(){
    c1.mover()
    c2.mover()
    f1.mover()
    //colisao
    bg_c1.mover()
    bg_c2.mover()
    bg_c3.mover()
    bg_c4.mover()
    
}

// principal
function main(){
    des.clearRect(0,0,600,600)
    atualiza()
    desenha()
}

setInterval(main,10)
