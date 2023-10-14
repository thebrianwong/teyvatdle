import compareArrays from "../../utils/compareArrays";

test("Arrays with the same items return true", () => {
  const arr1 = ["Lumine", "Paimon", "Aether"];
  const arr2 = ["Lumine", "Paimon", "Aether"];
  const comparison = compareArrays(arr1, arr2);
  expect(comparison).toBeTruthy();
});

test("Arrays with the same items but different order return true", () => {
  const arr1 = ["Lumine", "Aether", "Paimon"];
  const arr2 = ["Lumine", "Paimon", "Aether"];
  const comparison = compareArrays(arr1, arr2);
  expect(comparison).toBeTruthy();
});

test("Arrays with the same number of items but different items return false", () => {
  const arr1 = ["Lumine", "Paimon", "Aether"];
  const arr2 = ["Lumine", "Unknown God", "Aether"];
  const comparison = compareArrays(arr1, arr2);
  expect(comparison).toBeFalsy();
});

test("Arrays of different length can't have the same items", () => {
  const arr1 = ["Lumine", "Paimon"];
  const arr2 = ["Lumine", "Paimon", "Aether"];
  const comparison = compareArrays(arr1, arr2);
  expect(comparison).toBeFalsy();
});
