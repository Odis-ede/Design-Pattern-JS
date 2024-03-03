class printPhone {
  constructor() {
    this.observer = new Set();
  }

  notify(phoneNumber) {
    console.log("Phone number:", phoneNumber);
  }
}

export default printPhone;
