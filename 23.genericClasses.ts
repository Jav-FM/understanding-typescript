//Generic class:
//In this example, we have a generic class that doesn't care by the type
//of the data it will manage, only cares that the data is from the same type:

class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

//Then we can for example create a storage for strings:
const textStorage = new DataStorage<string>();

//But we can also create a storage for numbers:
const numberStorage = new DataStorage<number>();

//*We can also add generic types on the methods inside a class!!
