class MySet {
    constructor() {
        this.items = {}; // The object acts as a hash table
    }

    // Method to add a new item to the set
    add(value) {
        if (!this.has(value)) { // Only add if the value is not already present
            this.items[value] = value; // Store the value as the key and value
            return true;
        }
        return false; // Return false if the value was already in the set
    }

    // Method to check if a value exists in the set
    has(value) {
        return this.items.hasOwnProperty(value);
    }

    // Method to delete an item from the set
    delete(value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false; // Return false if the value was not found
    }

    // Method to clear all items from the set
    clear() {
        this.items = {};
    }

    // Getter to return the number of items in the set
    get size() {
        return Object.keys(this.items).length;
    }

    // Method to apply a function to each item in the set
    forEach(callback) {
        for (let value in this.items) {
            if (this.items.hasOwnProperty(value)) {
                callback(this.items[value]);
            }
        }
    }
    
    // Method to return an array of all values in the set
    values() {
        return Object.values(this.items);
    }
}


const mySet = new MySet();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Won't be added since 1 is already present
console.log(mySet.has(1)); // true
console.log(mySet.size); // 2
mySet.delete(2);
console.log(mySet.size); // 1
mySet.forEach(value => console.log(value)); // Outputs: 1
console.log(mySet.values()); // [1]
mySet.clear();
console.log(mySet.size); // 0
