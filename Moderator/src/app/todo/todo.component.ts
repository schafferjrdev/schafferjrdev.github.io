import { Component, OnInit } from '@angular/core';
import _ from "lodash";

export class Todo {
  desc: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

export class Jogador {
  name: string;
  job: Classes;
  target: boolean;
  toughTarget: boolean;
  love: boolean;
  save: boolean;
  enchant: boolean;
  dead: boolean;
  curePotion: boolean;
  deathPotion: boolean;

}

export interface Classes {
  name: string;
  desc: string;
  team: string;
  power: string;
  order: number;
  qnt: number;
  icon: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {
  showPlayer: boolean = false;
  filterInGame: boolean = false;
  sortGame: boolean = false;
  hasData: boolean = localStorage["players"];
  step: number = 0;

  playerEditIndex: number =0;
  
  todo: Todo = new Todo();
  todos: Todo[] = [];

  jogador: Jogador = new Jogador();
  jogadores: Jogador[] = [];

  classesForSort: string[];

  times = {
    aldeia:0,
    lobos:0,
    balance:0,
    balancing:0,
    totalClasses:0
  }
 

  classes: Classes[] = [
    {
      name: 'Lobisomem', 
      desc: 'Toda noite, junto dos outros Lobos, ele escolhe alguém da aldeia para atacar e matar',
      team: 'bad',
      power: '-6',
      order: 4,
      qnt:0,
      icon:'lobisomem'
    },
    {
      name: 'Cachorro', 
      desc: 'Na primeira noite escolhe outra pessoa para ser seu companheiro, se essa pessoa morrer, você morre. No resto das noites joga pelos lobos. ',
      team: 'bad',
      power: '-4',
      order: 0,
      qnt:0,
      icon:'cao'
    },
    {
      name: 'Aldeão', 
      desc: 'Não tem poderes especiais',
      team: 'good',
      power: '+1',
      order: 100,
      qnt:0,
      icon:'aldeao'
    },
    {
      name: 'Guardião', 
      desc: 'Toda noite protege uma pessoa de ataque de lobo*. Não pode escolher a mesma pessoas duas vezes seguidas.',
      team: 'good',
      power: '+3',
      order: 3,
      qnt:0,
      icon:'guardiao'
    },
    {
      name: 'Vidente', 
      desc: 'Toda noite a vidente escolhe alguem e consulta as entidades para saber se tal pessoa é ou não lobo',
      team: 'good',
      power: '+7',
      order: 2,
      qnt:0,
      icon:'vidente'
    },
    {
      name: 'Feiticeira', 
      desc: 'Toda noite você tentará adivinhar quem é a vidente, você vence com os lobos',
      team: 'bad',
      power: '-3',
      order: 3,
      qnt:0,
      icon:'feiticeira'
    },
    {
      name: 'Bruxa', 
      desc: 'Tem duas poções que podem ser usadas uma vez durante o jogo, com a cura ela sabe quem foi atacado a noite e salva, e com o veneno ela elimina um jogador.',
      team: 'good',
      power: '+4',
      order: 7,
      qnt:0,
      icon:'bruxa'
    },
    {
      name: 'Licano', 
      desc: 'Ele confunde o vidente aparecendo na vidência como se fosse Lobo, porém ele joga sempre pela vila',
      team: 'good',
      power: '-1',
      order: 100,
      qnt:0,
      icon:'licano'
    },
    {
      name: 'Amaldiçoado', 
      desc: 'Luta pela vila, mas caso seja atacado pelos Lobos, se junta a eles.',
      team: 'good',
      power: '-3',
      order: 100,
      qnt:0,
      icon:'amaldicoado'
    },
    {
      name: 'Gigante', 
      desc: 'Precisa de dois ataques de lobo para morrer',
      team: 'good',
      power: '+3',
      order: 100,
      qnt:0,
      icon:'gigante'
    },
    {
      name: 'Caçador', 
      desc: 'Se morrer em algum momento ele escolhe alguém pra matar, sem influencia da vila. Se morrer de dia todo mundo sabe, se for de noite fica secreto',
      team: 'good',
      power: '+3',
      order: 0,
      qnt:0,
      icon:'cacador'
    },
    {
      name: 'Maçom', 
      desc: 'Se reconhecem na primeira noite. Se alguém falar sobre, o moderador mata a pessoa durante a noite e avisa no dia seguinte',
      team: 'good',
      power: '+2',
      order: 0,
      qnt:0,
      icon:'macom'
    },
    {
      name: 'Príncipe', 
      desc: 'Não pode ser linchado',
      team: 'good',
      power: '+3',
      order: 100,
      qnt:0,
      icon:'principe'
    },
    {
      name: 'Lupino', 
      desc: 'É lobo, mas parece um aldeão para o vidente',
      team: 'bad',
      power: '-9',
      order: 100,
      qnt:0,
      icon:'lupino'
    },
    {
      name: 'Lobinho', 
      desc: 'Se ele morrer, na próxima noite os lobos matam 2',
      team: 'bad',
      power: '-8',
      order: 100,
      qnt:0,
      icon:'lobinho'
    },
    {
      name: 'Lobo Mau', 
      desc: 'Durante a noite, se estiver vivo deixa os lobos matarem um jogador adjacente ao alvo',
      team: 'bad',
      power: '-9',
      order: 100,
      qnt:0,
      icon:'lobo-mau'
    },
    {
      name: 'Cupido', 
      desc: 'No começo do jogo, ele escolhe duas pessoas para se apaixonarem. A partir dai, essas duas pessoas jogam juntas, mas não sabem o que a outra pessoa é. Se uma morrer, a outra morre automaticamente.',
      team: 'good',
      power: '-3',
      order: 1,
      qnt:0,
      icon:'cupido'
    },
    {
      name: 'Urso', 
      desc: 'Se de dia tiver um lobo ao lado dele o moderador diz "Urso sente cheiro de lobo". Quando um do lado dele morre, então o próximo é o novo vizinho dele',
      team: 'good',
      power: '+3',
      order: 100,
      qnt:0,
      icon:'urso'
    },
    {
      name: 'Raposa', 
      desc: 'Escolhe 3 pessoas, se tiver um lobo entre eles o moderador indica positivamente, mas se não tiver a raposa perde seus poderes.',
      team: 'good',
      power: '+3',
      order: 2,
      qnt:0,
      icon:'raposa'
    },
    {
      name: 'Corvo', 
      desc: 'Escolhe um jogador para começar com 2 votos de dia.',
      team: 'good',
      power: '+2',
      order: 2,
      qnt:0,
      icon:'corvo'
    },
    {
      name: 'Leprechaun', 
      desc: 'Redireciona o ataque de um lobo para um alvo adjacente.',
      team: 'good',
      power: '+5',
      order: 5,
      qnt:0,
      icon: 'leprechaun'
    },
    {
      name: 'Lider do Culto', 
      desc: 'Toda noite ele converte uma pessoas para seu culto e se todos os vivos tiverem no culto ele ganha o jogo sozinho. Depois de converter o moderador manda toda noite quem está convertido abri o olho e reconhecer, assim todos sabem se está ficando perto ou não.',
      team: 'neutral',
      power: '+1',
      order: 6,
      qnt:0,
      icon: 'liderdoculto'
    }
  ];
  classesHelp: Classes[] = this.classes;
  classesInGame: Classes[] = this.classes;
  
  constructor() {
    
    this.classes = _.sortBy(this.classes, ['team', 'power']);  
    this.classesHelp = _.sortBy(this.classesHelp, ['team', 'power']);
    this.classesInGame = _.concat(this.classesInGame,addMore("Aldeão", 3));
    this.classesInGame = _.concat(this.classesInGame,addMore("Lobo", 3));
    this.classesInGame = _.pull(this.classesInGame,undefined);
    this.classesInGame = _.shuffle(this.classesInGame);
    // var pulled = _.pullAt(array, 0);
    console.log(this.classesInGame);
    
    
  }

  ngOnInit() {
  }

  save(jogador: Jogador) {
    document.getElementById('input-player-name').focus();
    if(jogador.name !== undefined){
      if(jogador.name.trim() != ""){
        let index = 0;
        if(this.times.balance >= 6){
          index = _.findIndex(this.classes, { 'name': 'Lobisomem' });
        }else{
          index = _.findIndex(this.classes, { 'name': 'Aldeão' });
        }
        
        jogador.job = this.classes[index];
        jogador.target = false;
        jogador.dead = false;
        jogador.save = false;
        jogador.love = false;
        jogador.enchant = false;
        jogador.toughTarget = false;
        jogador.curePotion = false;
        jogador.deathPotion = false;
        this.jogadores.push(jogador);
        this.jogador = new Jogador();
        this.jogadores = Object.assign([], this.jogadores);
        let quantity =0;
        let dead =0;
        let balance =0;
        for (let index = 0; index < this.jogadores.length; index++) {
          balance = balance+Number(this.jogadores[index].job.power);
          if(this.jogadores[index].job.team === 'good' && !this.jogadores[index].dead){
            quantity++;
          }
          if(this.jogadores[index].dead){
            dead++;
          }  
        }
        this.times.balance = balance;
        this.times.aldeia = quantity;
        this.times.lobos = this.jogadores.length - dead - quantity;
      }else{
        jogador.name = "";
      }
      
    }
    this.showPlayer = false;

    this.jogadores = _.sortBy(this.jogadores, ['job.team', 'job.power','job.name']); 

    if(this.filterInGame == true){
      let classTemp=[];
      
        for (let i = 0; i < this.jogadores.length; i++) {
          
          add(classTemp,this.jogadores[i].job);
          
        }
          
        this.classesHelp = classTemp;
        this.classesHelp = _.sortBy(this.classesHelp, ['team', 'power']);  
    }
    
  }
  

  delete(jogador: Jogador) {
    this.jogadores.splice(this.jogadores.indexOf(jogador), 1);
    let quantity =0;
    let dead =0;
    let balance =0;
    for (let index = 0; index < this.jogadores.length; index++) {
      balance = balance+Number(this.jogadores[index].job.power);
      if(this.jogadores[index].job.team === 'good' && !this.jogadores[index].dead){
        quantity++;
      }
      if(this.jogadores[index].dead){
        dead++;
      }  
    }
    this.times.balance = balance;
    this.times.aldeia = quantity;
    this.times.lobos = this.jogadores.length - dead - quantity;
    this.showPlayer = false;
    this.jogadores = _.sortBy(this.jogadores, ['job.team', 'job.power','job.name']); 

    if(this.filterInGame == true){
      let classTemp=[];
      
        for (let i = 0; i < this.jogadores.length; i++) {
          
          add(classTemp,this.jogadores[i].job);
          
        }
          
        this.classesHelp = classTemp;
        this.classesHelp = _.sortBy(this.classesHelp, ['team', 'power']);  
    }

    if(this.jogadores.length - this.times.totalClasses <0){
      this.classesInGame = _.sortBy(this.classesInGame, ['qnt']);
      this.classesInGame[0].qnt--;
      this.changeBalance();
      
    }
  }

  teamsUp() {

    // _.findKey(this.jogadores.job, ['team', 'bad'])
    let quantity =0;
    let dead =0;
    let balance =0;
    for (let index = 0; index < this.jogadores.length; index++) {
      balance = balance+Number(this.jogadores[index].job.power);
      if(this.jogadores[index].job.team === 'good' && !this.jogadores[index].dead){
        quantity++;
      }
      if(this.jogadores[index].dead){
        dead++;
      }
       
    }
    this.times.balance = balance;
    this.times.aldeia = quantity;
    this.times.lobos = this.jogadores.length - dead - quantity;

    if(this.filterInGame == true){
      let classTemp=[];
      
        for (let i = 0; i < this.jogadores.length; i++) {
          
          add(classTemp,this.jogadores[i].job);
          
        }
          
        this.classesHelp = classTemp;
        this.classesHelp = _.sortBy(this.classesHelp, ['team', 'power']);  
    }
       
  }

  hasClass(className:string){
    let index = _.findIndex(this.jogadores, function(o) { return o.job.name == className; });
    return index !== -1 ? true : false;  
  }

  show(jogador: Jogador){
    
  }

  dayPass(){
    for (let index = 0; index < this.jogadores.length; index++) {
      this.jogadores[index].target = false;
      this.jogadores[index].save = false;

    }
  }

  open(jogador: Jogador){
    this.playerEditIndex = this.jogadores.indexOf(jogador);
    this.showPlayer = true;
    
  }

  voltar(){
    this.jogadores = _.sortBy(this.jogadores, ['job.team', 'job.power','job.name']);
    this.showPlayer = false;
  }

  kill(){
    let quantity =0;
    let dead =0;
    for (let index = 0; index < this.jogadores.length; index++) {

      if(this.jogadores[index].job.team === 'good' && !this.jogadores[index].dead){
        quantity++;
      }
      if(this.jogadores[index].dead){
        dead++;
      }  
    }
    this.times.aldeia = quantity;
    this.times.lobos = this.jogadores.length - dead - quantity;
  }

  nextStep(){
    this.step++;
  }

  prevStep(){
    this.step--;
  }

  saveLocal(){
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("players", JSON.stringify(this.jogadores));
    }
  }

  restart(){
    if (typeof(Storage) !== "undefined" && localStorage["players"]) {
      this.jogadores = JSON.parse(localStorage.getItem("players"));
      this.nextStep();
    }else{
      console.log("No data saved");
    }
    
  }

  addClasses(){
    console.log(this.classesInGame);
  }

  
  add(classe: Classes){
    this.classes.indexOf(classe);
    let index = this.classes.indexOf(classe);
    this.classes[index].qnt++;
    this.changeBalance();
  }

  sub(classe: Classes){
    let index = this.classes.indexOf(classe);
    this.classes[index].qnt--;
    this.changeBalance();
  }

  changeBalance(){
    this.classesInGame = _.filter(this.classes, function(o) { return o.qnt >0; });
    
    let total = 0;
    let balance = 0;
    for (let i = 0; i < this.classesInGame.length; i++) {
      // total =+ this.classesInGame[i].qnt;
      total = total+this.classesInGame[i].qnt;
      balance = balance+(this.classesInGame[i].qnt*parseInt(this.classesInGame[i].power));
    }
    console.log(total);
    this.times.totalClasses = total;
    // this.times.totalClasses = total;
    // console.log(this.times.totalClasses);
    this.times.balancing = balance;
    
    
  }

  // newGame(){
  //   if (typeof(Storage) !== "undefined") {
  //     // Store
  //     localStorage.setItem("players", );
  //     // Retrieve
  //     document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  //   } else {
  //     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  //   }
  // }

  filterClasses(){
    if(this.filterInGame == true && this.sortGame == true){
      let classTemp=[];
      
        for (let i = 0; i < this.jogadores.length; i++) {
          
          add(classTemp,this.jogadores[i].job);
          
        }
          
        this.classesHelp = classTemp;
        this.classesHelp =  _.filter(this.classesHelp, function(o) { return o.order < 99; });
        this.classesHelp = _.sortBy(this.classesHelp, ['order']);  
    }else if(this.filterInGame == false && this.sortGame == true){
      this.filterInGame = false;
      this.classesHelp =  _.filter(this.classesHelp, function(o) { return o.order < 99; });
      this.classesHelp = _.sortBy(this.classesHelp, ['order']);  
    }else if(this.sortGame == true){
      this.filterInGame = false;
      this.classesHelp =  _.filter(this.classesHelp, function(o) { return o.order < 99; });
      this.classesHelp = _.sortBy(this.classesHelp, ['order']);
    }else if(this.filterInGame == true){
      let classTemp=[];
      
        for (let i = 0; i < this.jogadores.length; i++) {
          
          add(classTemp,this.jogadores[i].job);
          
        }
          
        this.classesHelp = classTemp;
        this.classesHelp = _.sortBy(this.classesHelp, ['team', 'power']);  
    }else{
        this.classesHelp = this.classes;
        this.classesHelp = _.sortBy(this.classesHelp, ['team', 'power']);  
    }

    
    
  }
  
}



function addMore(value, quantity){
  let array =[];
  for (let i = 0; i < quantity; i++) {
      array.push(value);
      // array = _.concat(array,value);
  }
  return array;
}

function add(array, value) {
  if (array.indexOf(value) === -1) {
    array.push(value);
  }
}

function remove(array, value) {
  var index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  }
}