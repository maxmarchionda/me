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

export const otherInterests = [
  "Being a Dad",
  "Cooking",
  "Video Games",
  "Biking",
  "Working Out",
  "Slinging Slabbies",
];
