type Test<T> = T extends number ? 1 : 2;

type res = Test<any>;