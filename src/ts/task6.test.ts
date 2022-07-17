import {
  OnePlusOneTest,
  TwoMinusOneTest,
  Test_res7,
  Test_res13,
} from "./task6";

describe("function getOrderState", () => {
  it("OnePlusOneTest", () => {
    const res1: OnePlusOneTest = "success";
    expect(res1).toBe("success");
  });

  it("TwoMinusOneTest'", () => {
    const res2: TwoMinusOneTest = "success";
    expect(res2).toBe("success");
  });

  it("Test_res7'", () => {
    const res3: Test_res7 = "success";
    expect(res3).toBe("success");
  });

  it("Test_res13'", () => {
    const res4: Test_res13 = "success";
    expect(res4).toBe("success");
  });
});
