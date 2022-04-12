const acc1 = new makeAccount("Johan", 1200, 000, "0");
const acc2 = new makeAccount("Eddie", 4000, 123, "0");
const acc3 = new makeAccount("Marie", 20000, 111,"0");

//prototype

function makeAccount(owner, init, pass, iban) {
  this.name = owner;
  this.balance = init;
  this.password = pass;
  this.iban = iban;
}

(makeAccount.prototype.getIban = function (iban) {
  if (this.iban === "0") {
  iban = Math.floor(100000 + Math.random() * 900000);
  this.iban = "GR" + iban;
  return this.iban;
  } else {
    return this.iban;
  }
})

(
  (makeAccount.prototype.withdraw = function (amount, pass) {
    if (pass === this.password) {
      if (Number.isInteger(amount) && Number.isInteger(this.balance)) {
        if (this.balance - amount >= 0) {
          this.balance = this.balance - amount;
          return this.name + " your balance is " + this.balance;
        } else {
          return "Insufficient balance! " + this.name;
        }
      } else {
        return "invalid amount";
      }
    } else {
      return "wrong password";
    }
  })
),
  (makeAccount.prototype.deposit = function (amount) {
    if (Number.isInteger(amount) && Number.isInteger(this.balance)) {
      this.balance = this.balance + amount;
      return this.name + " your new balance is " + this.balance;
    } else {
      return "invalid amount";
    }
  }),
  (makeAccount.prototype.getBalance = function () {
    return this.name + "your balance is " + this.balance;
  });
