import {Role} from './roleEnum'

function StandardAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.Admin;
}

function forAdmin(target: object, propKey: string, descriptor: PropertyDescriptor){
    const fn = target[propKey]; 
    descriptor.value = function(param){
        if (param.role === Role.Admin) {
            return fn.call(this, param); 
        }
    }
}

function forModerator(target: object, propKey: string, descriptor: PropertyDescriptor){
    const fn = target[propKey];
    descriptor.value = function(param){ 
        if (param.role === Role.Moderator || param.role === Role.Admin) {
            return fn.call(this, param); 
        }
    }
}

function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = target[propKey];
    descriptor.value = function(param) {
        console.log(`User: ${param} wants ${propKey}`);
        return originalFn.call(this, param);
    };    
}

class User {
    name: string;
    surname: string;
    role: Role;

    toString(): string {
        return `${this.name} ${this.surname} ${this.role}`;
    }

}

@StandardAccess
class StandardUser extends User {

    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;                
    }
}
@ModeratorAccess
class ModeratorUser extends User {

    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;                
    }
}
@AdminAccess
class AdminUser extends User {

    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;                
    }
}

class Resource {
    private resourceValue: string;
    constructor() {
        this.resourceValue = "resource value";        
    }

    @forModerator  
    public read(user: User): void {
        console.log(this.resourceValue);
     }

    @forAdmin
    public change(user: User): void {
        this.resourceValue = "change resource value";
        console.log(this.resourceValue);
    }
    
}


const user1 = new StandardUser("Luke", "Skywalker");
const user2 = new ModeratorUser("Han", "Solo");
const user3 = new AdminUser("Obi-Wan", "Kenobi");
const res = new Resource();

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

console.log('User 1:');
res.read(user1);
res.change(user1);
console.log('User 2:');
res.read(user2);
res.change(user2);
res.read(user3);
console.log('User 3:');
res.change(user3);
res.read(user3);

res.read(user3);