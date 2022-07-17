import { Order, getOrderState} from "./task2";

const order: Order =
{
  state: "initial",
  sum: 1
};

describe("function getOrderState", () => {

  it("getUserOrderStates to be instance of Function", () => {
    expect(getOrderState).toBeInstanceOf(Function);
  });

  it("return 'initial'", () => {
    expect(getOrderState(order)).toBe("initial");
  });
});
