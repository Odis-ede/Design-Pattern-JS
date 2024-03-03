class dialPhone {
  constructor() {
    this.observer = new Set();
  }

  notify(phoneNumber) {
    console.log("Now Dailing", phoneNumber);
  }
}

export default dialPhone;
