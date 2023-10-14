import normalizeDates from "../../utils/normalizeDates";

afterAll(() => {
  jest.useRealTimers();
});

test("The date is formatted for SQL date comparison", () => {
  jest.useFakeTimers().setSystemTime(new Date("1337-11-22T12:00:00"));
  const date = normalizeDates();
  expect(date).toBe("1337-11-22");
});

test("0's are prepended to months and dates less than 10", () => {
  jest.useFakeTimers().setSystemTime(new Date("1337-01-01T12:00:00"));
  const date = normalizeDates();
  expect(date).toBe("1337-01-01");
});
