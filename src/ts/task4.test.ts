import { Order, filterOnlyInitialAndInWorkOrder } from "./task4";

const order1: Order =
{
  state: "initial",
  sum: 1
};

const order2: Order =
{
  state: "buyingSupplies",
  sum: 1,
  workerId: 12,
  suppliesSum: 123,
};

describe("function getOrderState", () => {

  it("filterOnlyInitialAndInWorkOrder to be instance of Function", () => {
    expect(filterOnlyInitialAndInWorkOrder).toBeInstanceOf(Function);
  });

  it("return 'order1'", () => {
    expect(filterOnlyInitialAndInWorkOrder(order1)).toEqual(
      {
        state: "initial",
        sum: 1
      });
  });

  it("return 'order2'", () => {
    expect(filterOnlyInitialAndInWorkOrder(order2)).toEqual(null);
  });

});
