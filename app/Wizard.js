function Wizard(name, house, pet){
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `Hello, I'm ${this.name} from house ${this.house}`
}

Wizard.prototype.pet_name = ""

Wizard.prototype.showPet = function(){
    return `This is my ${this.pet}. it's called ${this.pet_name}`;
}

export default Wizard;