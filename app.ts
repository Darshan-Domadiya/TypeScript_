class Human{

    public name : string;

    constructor(name:string){
        this.name = name;
    }



}

class Person extends Human{

    public age : number;

    constructor(age:number, name:string){
        super(name)
    }

}



