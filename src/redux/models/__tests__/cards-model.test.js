import CardModel from "../card-model";
import mockedCard from "../../../mocks/mockedCard";

describe("CardModel", () => {
  it("should return a correct CardModel with mocked Card values", () => {
    const newCard = new CardModel({ ...mockedCard });
    expect(newCard.id).toBe(mockedCard.id);
    expect(newCard.title).toBe(mockedCard.title);
    expect(newCard.image).toBe(mockedCard.image);
    expect(newCard.description).toBe(mockedCard.description);
  });
});
