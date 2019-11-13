import {
  required,
  isValidUrl,
  maxDescriptionLength
} from "../CardFormValidations";

describe("CardFormValidations", () => {
  describe("required", () => {
    it("required validation returns error message if no value", () => {
      const validation = required();
      expect(validation).toBe("This field is required.");
    });
    it("required validation returns undefined if value is sent", () => {
      const validation = required("someValue");
      expect(validation).toBe(undefined);
    });
  });

  describe("isValidUrl", () => {
    it("isValidUrl validation returns error message if no value", () => {
      const validation = isValidUrl("notavalidURL");
      expect(validation).toBe("Enter a valid URL.");
    });
    it("isValidUrl validation returns undefined if valid url is sent", () => {
      const validation = isValidUrl("https://www.validurl.com");
      expect(validation).toBe(undefined);
    });
  });

  describe("maxDescriptionLength", () => {
    it("maxDescriptionLength validation returns error message if text is above 160 characters", () => {
      const validation = maxDescriptionLength(
        "This is a long description text to test if the 160 characters limitation is correctly working or it is not a valid way of preventing broken data in the website. Now this are 189 characters."
      );
      expect(validation).toBe("Maximum description length: 160.");
    });
    it("maxDescriptionLength validation returns undefined if valid url is sent", () => {
      const validation = maxDescriptionLength(
        "This is a long description text to test if the 160 characters limitation is correctly working or it is not a valid way of preventing broken data in the website."
      );
      expect(validation).toBe(undefined);
    });
  });
});
