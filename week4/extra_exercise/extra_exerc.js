class Group {
    // creates an empty array
    constructor(){
        this.members = [];
    }

    // checks if value already exists, if not adds the value
    add(value){
        if(!this.has(value)){
            this.members.push(value);
        }
    }

    // deletes the value by creating a new array without the value using 'filter'
    delete(value){
        this.members = this.members.filter(v => v !== value);
    }

    // checks if a value is already present
    has(value){
        return this.members.includes(value);
    }

    // static function that takes an iterable object as argument
    // and creates a group that contains all the values produced
    // by iterating over it.
    static from(collection){
        let group = new Group;
        for(let value of collection){
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
    console.log(group.has(10));
    console.log(group.has(30));

    group.add(10);
    group.delete(10);
    console.log(group.has(10));