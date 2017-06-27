import Animal from './Animal'
class Lion extends Animal
{
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }

    hello(){
        console.log(`Hi, I'm ${this.name}. I'm a Lion!`);
    }
}

export default Lion