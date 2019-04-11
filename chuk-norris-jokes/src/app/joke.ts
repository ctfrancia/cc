export class Joke {
    joke:string;
    id:number;
    showDetails:boolean;
    constructor(joke:string, id:number){
        this.joke = joke;
        this.id = id;
        this.showDetails = false;
    }
}