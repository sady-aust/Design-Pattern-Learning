export class Sheep {
    public name:string;
    public category:string;

    constructor(name:string,category = 'Mountain Sheep'){
        this.name = name;
        this.category = category;
    }

    public setName(name:string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }

    public setCategory(category:string){
        this.category = category;
    }

    public getCategory(){
        return this.category;
    }
}