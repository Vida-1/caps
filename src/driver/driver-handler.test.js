const { events, chance, EVENT_NAMES } = require("../eventPool");
const {
  toTest: { deliver, handlePickup},
} = require("./handler");

jest.useFakeTimers();

test("Driver deliver", () => {
  // Arrange
  const emitMock = jest.spyOn(events, "emit");

  // Act  (call the method)
  deliver("1234");

  // Assert (expect)
  expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.delivered, "1234");
});

test("Driver handlePickup", () => {
  // Arrange
  const emitMock = jest.spyOn(events, "emit");
  
  // Act
  handlePickup({
    store: "test",
    orderId: "1234",
    customer: "Jane Snow",
    address: "123 Some Street",
  });

  // Timers -skip setTimeout
  jest.runAllTimers();

  // Assertion
  expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.delivered, "1234");

});