export class Result{
    constructor(value : number){
        if(value == 1)
            alert("wygrywa kółko")
        else if (value == -1)
            alert("wygrywa krzyżyk")
        else 
            alert("reamis")
    }
}