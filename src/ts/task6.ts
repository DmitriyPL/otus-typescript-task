// Задача состоит в том что написать калькулято для натуральных чисел, но только на типах!
// Ниже приведена заготовка
// Хочется поддержки сложения и вычитания, если хочется еще челленджа, то деление и умножение
// Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально

type Increase< A, HELPER extends Array<number> = [] > =
  HELPER['length'] extends A
  ? [...HELPER, 0]['length']
  : Increase<A, [...HELPER, 0]>;

type Decrease< A, HELPER extends Array<number> = [] > = 
  [...HELPER, 0]['length'] extends A
  ? HELPER['length']
  : Decrease<A, [...HELPER, 0]>;   

type Add<A, B> = A extends 0 ? B : Add<Decrease<A>, Increase<B>>;
type Subtract<A, B> = B extends 0 ? A : Subtract<Decrease<A>, Decrease<B>>;

type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

export type OnePlusOneTest  = Equals<Add<1, 1>, 2>;
export type TwoMinusOneTest = Equals<Subtract<2, 1>, 1>;
export type Test_res7       = Equals<Subtract<10, 3>, 7>;
export type Test_res13      = Equals<Add<10, 3>, 13>;