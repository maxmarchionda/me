/**
 * Hobby content. Photos and collectibles are placeholder-shaped:
 * drop real assets into public/photos and edit these arrays — no
 * component changes needed.
 */

export interface Photo {
  src: string;
  alt: string;
  /** e.g. "3 / 2" — reserves layout space before the image loads */
  aspectRatio: string;
}

export const photos: Photo[] = [
  // TODO: add real photography. Example:
  // { src: "/photos/north-shore.jpg", alt: "Lake Superior, North Shore", aspectRatio: "3 / 2" },
];

export const collectibles = {
  title: "Collectibles & Someday Cards",
  description:
    "Building Someday Cards — buying, grading, and selling trading cards, plus Signal, a pricing engine for graded cards.",
  link: "https://somedaycards.com", // TODO: confirm URL
  linkLabel: "Someday Cards",
};

export const otherInterests = [
  "Photography",
  "Music",
  "Collectibles",
  "Cooking",
  "App Development",
  "Video Games",
];
