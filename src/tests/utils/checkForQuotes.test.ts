import checkForQuotes from "../../utils/checkForQuotes";

test("Strings are stripped of double quotes", () => {
  const parsedData = checkForQuotes('"Lumine"');
  expect(parsedData).toBe("Lumine");
});

test("Strings without double quotes are not transformed", () => {
  const regularData = checkForQuotes("Lumine");
  expect(regularData).toBe("Lumine");
});
