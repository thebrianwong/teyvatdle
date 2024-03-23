import lowerCaseFirstLetter from "../../utils/lowerCaseFirstLetter";

test("A word's first letter becomes lowercase", () => {
  const lowerCaseWord = lowerCaseFirstLetter("Paimon");
  expect(lowerCaseWord).toBe("paimon");
});

test("A sentence's first word's letter becomes lowercase", () => {
  const lowerCaseSentence = lowerCaseFirstLetter("Paimon is emergency food.");
  expect(lowerCaseSentence).toBe("paimon is emergency food.");
});
