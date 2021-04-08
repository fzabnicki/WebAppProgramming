interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
        console.log(`${person.name} ${person.surname}, ${person.age}, ${person.role}`);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    }
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    admins.forEach(element => {
        console.log(element);
    });
    users.forEach(element => {
        console.log(element);
    });
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    const everyone: Person[] = [...admins, ...users];
    console.log(everyone);
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    function ageIsGreater(){
        return  > 25;
    }
    console.log(everyone.filter(ageIsGreater))
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
     