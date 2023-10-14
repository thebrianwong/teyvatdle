import formatBirthday from "../../utils/formatBirthday";

test("A date string gets converted to MONTH DAY format", () => {
  const birthday = formatBirthday("1337-09-13T07:00:00.000Z");
  expect(birthday).toBe("September 13th");
});

describe("The ordinal indicator for the day is correct", () => {
  describe("Days that end with st", () => {
    test("1st", () => {
      const birthday = formatBirthday("1337-09-01T07:00:00.000Z");
      expect(birthday).toBe("September 1st");
    });
    test("21st", () => {
      const birthday = formatBirthday("1337-09-21T07:00:00.000Z");
      expect(birthday).toBe("September 21st");
    });
    test("31st", () => {
      const birthday = formatBirthday("1337-12-31T07:00:00.000Z");
      expect(birthday).toBe("December 31st");
    });
  });
  describe("Days that end with nd", () => {
    test("2nd", () => {
      const birthday = formatBirthday("1337-09-02T07:00:00.000Z");
      expect(birthday).toBe("September 2nd");
    });
    test("22nd", () => {
      const birthday = formatBirthday("1337-09-22T07:00:00.000Z");
      expect(birthday).toBe("September 22nd");
    });
  });
  describe("Days that end with rd", () => {
    test("3rd", () => {
      const birthday = formatBirthday("1337-09-03T07:00:00.000Z");
      expect(birthday).toBe("September 3rd");
    });
    test("23rd", () => {
      const birthday = formatBirthday("1337-09-23T07:00:00.000Z");
      expect(birthday).toBe("September 23rd");
    });
  });
});

test("Null returns null", () => {
  const none = formatBirthday(null);
  expect(none).toBeNull();
});
