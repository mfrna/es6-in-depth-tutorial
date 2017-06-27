class Animal{
    constructor(name, height)
    {
        this.name = name;
        this.height = height;
    }

    hello()
    {
        console.log(`Hello this is ${this.name}!`);
    }
}
export default Animal