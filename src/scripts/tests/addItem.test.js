import { validText, validItemPrice, validImageURL } from "./addItem";

test("Verify that the title is right", () => {
  //Arrange
  const title = "Beef Dishes";

  //Action
  const addedTitle = validText(title);

  //Assert
  expect(addedTitle).toEqual(true);
});

test("Verify that title is not empty", () => {
  //Arrange
  const title = "";

  //Action
  const addedTitle = validText(title);

  //Assert
  expect(addedTitle).toEqual(false);
});

test("Verify that title is not only spaces", () => {
  //Arrange
  const title = "    ";

  //Action
  const addedTitle = validText(title);

  //Assert
  expect(addedTitle).toEqual(false);
});

test("Verify that the imageURL is right", () => {
  //Arrange
  const url =
    "https://media-cdn.greatbritishchefs.com/media/hezh5yvx/img66550.whqc_1423x711q90.webp";

  //Action
  const addedImgURL = validImageURL(url);

  //Assert
  expect(addedImgURL).toEqual(true);
});

test("Verify that imageURL is not empty", () => {
  //Arrange
  const url = "";

  //Action
  const addedImgURL = validImageURL(url);

  //Assert
  expect(addedImgURL).toEqual(false);
});

test("Verify that image URL is not only spaces", () => {
  //Arrange
  const url = "    ";

  //Action
  const addedImgURL = validImageURL(url);

  //Assert
  expect(addedImgURL).toEqual(false);
});

test("Verify that image URL has image extension", () => {
  //Arrange
  const url = "imageurl";

  //Action
  const addedImgURL = validImageURL(url);

  //Assert
  expect(addedImgURL).toEqual(false);
});

test("Verify that the description is right", () => {
  //Arrange
  const description = "Beef Dishes";

  //Action
  const addedDescription = validText(description);

  //Assert
  expect(addedDescription).toEqual(true);
});

test("Verify that description is not empty", () => {
  //Arrange
  const description = "";

  //Action
  const addedDescription = validText(description);

  //Assert
  expect(addedDescription).toEqual(false);
});

test("Verify that description is not only spaces", () => {
  //Arrange
  const description = "    ";

  //Action
  const addedDescription = validText(description);

  //Assert
  expect(addedDescription).toEqual(false);
});

test("Verify that price is not empty", () => {
  //Arrange
  const price = null;

  //Action
  const addedItemPrice = validItemPrice(price);

  //Assert
  expect(addedItemPrice).toEqual(false);
});

test("Verify that price is not less than 1", () => {
  //Arrange
  const price = -1;

  //Action
  const addedItemPrice = validItemPrice(price);

  //Assert
  expect(addedItemPrice).toEqual(false);
});
