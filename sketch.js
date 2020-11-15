var form,player,game,canvas,bgImage,database;
var playerCount;
var gameState=0;
var allPlayer;

function setup()
{
  canvas=createCanvas(400,400);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

function draw()
{
   
}