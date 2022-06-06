function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  const Dog=function(name,color){
    this.name=name;
    this.color=color;
    this.numLegs=4;
  }
  const terrier=new Dog('teriier','black')