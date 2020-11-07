interface ISay{
    getVoice(): string;
}


class Human implements ISay{

    getVoice(): string{
        return "Hello world"
    }
}

class Animal implements ISay{

    getVoice(): string{
        return "Wan Wan"
    }
}



class Call {
    private say: ISay

    constructor(say: ISay){
        this.say = say
    }

    saySomting(): string{
        return this.say.getVoice()
    }
}


let callHunam = new Call(new Human())
console.log(callHunam.saySomting())


let callAnimal = new Call(new Animal())
console.log(callAnimal.saySomting())
