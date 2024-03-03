import printPhone from "./printNumber.mjs";
import dialPhone from "./dialNumber.mjs";

class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObserver(phoneNumber);
    } else {
      console.log("Invalid number");
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(function (item) {
      return item !== observer;
    });
  }

  notifyObserver(phoneNumber) {
    this.observers.forEach(function (observer) {
      observer.notify(phoneNumber);
    });
  }
}

const telephone = new Telephone();
const printObserver = new printPhone();
const dialingObserver = new dialPhone();

telephone.addObserver(printObserver);
telephone.addObserver(dialingObserver);
telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("2347023232");
