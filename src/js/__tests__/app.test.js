import orderByProps from "../app.js";

test("Testing how the orderByProps method sorts of property", () => {
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
  const arr = ["name", "level"];

  const expectedResult = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];

  expect(orderByProps(obj, arr)).toEqual(expectedResult);
});

test("Testing the orderByProps method with unavailable argument", () => {
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
  const arr = ["name", "rate"];

  expect(() => orderByProps(obj, arr)).toThrow("Передано неверное значение");
});
