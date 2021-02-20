const EntityBase = require("./entityBase");

class Employee extends EntityBase {
  #TAXES_PERCENTUAL = 0.2;
  #grossPay = 5000.4;

  get grossPay() {
    return Intl.NumberFormat("pt-br", {
      currency: "BRL",
      style: "currency",
    }).format(this.#grossPay);
  }
}

module.exports = Employee;
