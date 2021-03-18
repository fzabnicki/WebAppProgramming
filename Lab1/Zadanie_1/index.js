var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.Show = function () {
        return "Witaj " + this.firstName + " " + this.lastName + " mam " + this.age + " lat";
    };
    return Person;
}());
var p = new Person("Jack", "Blake", 11);
document.body.innerHTML = p.Show();
