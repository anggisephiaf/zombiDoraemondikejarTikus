class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2,2), random(-2,2)) 
    this.acceleration = createVector(0,0); 
  }
  display(){ 
    noStroke()
    //kepala
    fill(169,169,169)
    ellipse(this.location.x,this.location.y,35,35)
    //kuping besar
    ellipse(this.location.x+15,this.location.y-15,25,25)
    ellipse(this.location.x-18,this.location.y-15,25,25)
    //kuping kecil
    fill(255,277,200)
    ellipse(this.location.x+15,this.location.y-15,15,15)
    ellipse(this.location.x-18,this.location.y-15,15,15)
    //mata
    fill(0,0,0)
    ellipse(this.location.x-5,this.location.y-10,5,8)
    ellipse(this.location.x+5,this.location.y-10,5,8)
    //idung besar
    fill(255,277,200)
    ellipse(this.location.x,this.location.y+4,15,10)
    //idung keci
    fill(0,0,0)
    ellipse(this.location.x,this.location.y+4,5,5)
    
  } 
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 8
    dir.normalize(); 
    dir.mult(0.3); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<5;i++){
    movers[i] = new Mover(random(windowWidth), random(windowHeight));   
  }
}
function draw() {
  background(0); 
  stroke(0)
  //lingkaran muka biru
  fill(43,191,254)
  ellipse(mouseX,mouseY-20,60,60)
  //lingkaran muka putih
  fill(248,248,255)
  ellipse(mouseX,mouseY-15,50,50)
  //mata putih
  fill(248,248,255)
  ellipse(mouseX+8,mouseY-35,15,20)
  ellipse(mouseX-8,mouseY-35,15,20)
  //mata item
  fill(0,0,0)
  ellipse(mouseX+7,mouseY-33,7,10)
  ellipse(mouseX-7,mouseY-33,7,10)
  //mata putih kecil
  fill(248,248,255)
  ellipse(mouseX+7,mouseY-33,3,5)
  ellipse(mouseX-7,mouseY-33,3,5)
  //hidung merah
  fill(255,0,0)
  ellipse(mouseX,mouseY-25,10,10)
  //garis mulut
  fill(0,0,0)
  line(mouseX,mouseY-20,mouseX,mouseY-10)
  //mulut
  fill(250,128,114)
  ellipse(mouseX,mouseY-5,10,15)
  //kumis kanan
  fill(0,0,0)
  line(mouseX-10,mouseY-20,mouseX-30,mouseY-30)
  line(mouseX-10,mouseY-15,mouseX-30,mouseY-15)
  line(mouseX-10,mouseY-10,mouseX-30,mouseY)
  //kumis kiri
  fill(0,0,0)
  line(mouseX+10,mouseY-20,mouseX+30,mouseY-30)
  line(mouseX+10,mouseY-15,mouseX+30,mouseY-15)
  line(mouseX+10,mouseY-10,mouseX+30,mouseY)
  
  
  
  
    for (let i=0; i<5;i++){
      movers[i].cekUjung(); 
      movers[i].display(); 
      movers[i].update();    
  }  
}