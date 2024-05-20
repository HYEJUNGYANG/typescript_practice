/**
 * Let's make a calculator 🧮
 */
function calculate(operate: string, num1: number, num2: number): number {
  enum Operate {
    add = '+',
    substract = '-',
    multiply = '*',
    divide = '/',
    remainder = '%'
  }
  const op = Operate[operate as keyof typeof Operate];
  return eval(num1 + op + num2);
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
