expect(() => {
  class A {
    static [{ x: A || 0 }.x];
  }
}).toThrow(ReferenceError);
