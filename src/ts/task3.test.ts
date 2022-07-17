import { omit } from "./task3";

type Test = {
  name: string, 
  id: number
}

const obj: Test = {
  name: "Nik", 
  id: 123456
}

describe("function getOrderState", () => {

  it("getUserOrderStates to be instance of Function", () => {
    expect(omit).toBeInstanceOf(Function);
  });

  it("return 'initial'", () => {
    expect(omit<Test, "name">(obj, "name")).toEqual({
      id: 123456  
    });
  });
});
