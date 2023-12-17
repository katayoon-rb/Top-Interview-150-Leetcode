/**
  Implement the RandomizedSet class:
  
      RandomizedSet() Initializes the RandomizedSet object.
      bool insert(int val) Inserts an item val into the set if not present. Returns true
        if the item was not present, false otherwise.
      bool remove(int val) Removes an item val from the set if present.
        Returns true if the item was present, false otherwise.
      int getRandom() Returns a random element from the current set of elements
        (it's guaranteed that at least one element exists when this method is called).
        Each element must have the same probability of being returned.
  
  You must implement the functions of the class such that each function works in average O(1) time complexity.
*/


class RandomizedSet {
    private set: Set<number>
    private array: number[]

    constructor() {
        this.set = new Set<number>()
        this.array = []
    }

    insert(val: number): boolean {
        if ( this.set.has(val) ) { return false }

        this.set.add(val)
        this.array.push(val)
        return true
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) { return false }

        this.set.delete(val)
        this.array[ this.array.indexOf(val) ] = this.array[this.array.length - 1]
        this.array.pop()
        return true
    }

    getRandom(): number {
        const randomIndex = Math.floor( Math.random() * this.array.length )
        return this.array[randomIndex]
    }
}
