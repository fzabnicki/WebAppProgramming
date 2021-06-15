class Person1{
    constructor(public name: string, public surname: string, public age: number){

    }
    Show(){
        document.body.innerHTML = `<h1>Witaj ${this.name} ${this.surname} mam ${this.age} lat</h1>`
    }
}

let p1 = new Person1("John", "Blake", 11);
p1.Show();