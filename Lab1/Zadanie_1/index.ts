class Person{
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    Show(){
        return `Witaj ${this.firstName} ${this.lastName} mam ${this.age} lat`;
    }
}
let p = new Person("Jack", "Blake", 11);
document.body.innerHTML = p.Show();
