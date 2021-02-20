const { schedulingPolicy } = require("cluster");
const Employee = require("./employee");
const Util = require("./util");

class Manager extends Employee {
  #bonuses = 2000;

  get bonuses() {
    return Util.formatCurrency(this.#bonuses);
  }

  get netPay() {
    // super get the value from dad class
    return Util.formatCurrency(
      Util.unformatCurrency(super.netPay) + Util.unformatCurrency(this.bonuses)
    );
  }
}

module.exports = Manager;
