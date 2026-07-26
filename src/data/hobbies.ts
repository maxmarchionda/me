/**
 * Hobby content. Photos and collectibles are placeholder-shaped:
 * drop real assets into public/photos and edit these arrays. No
 * component changes needed.
 */

export interface Photo {
  src: string;
  alt: string;
  /** e.g. "3 / 2"; reserves layout space before the image loads */
  aspectRatio: string;
}

export const photos: Photo[] = [
  {
    src: "/photos/web/dogs-swimming.jpg",
    alt: "Two dogs swimming through lily pads, one carrying an orange ball",
    aspectRatio: "1 / 1",
  },
  {
    src: "/photos/web/bike-in-autumn.jpg",
    alt: "Black road bike resting against a bench surrounded by autumn foliage",
    aspectRatio: "4 / 5",
  },
  {
    src: "/photos/web/mountain-in-clouds.jpg",
    alt: "Green Icelandic mountain disappearing into low cloud above small farmhouses",
    aspectRatio: "3 / 2",
  },
  {
    src: "/photos/web/glacial-lagoon.jpg",
    alt: "Icebergs floating in a calm lagoon below green Icelandic mountains",
    aspectRatio: "3 / 2",
  },
  {
    src: "/photos/web/pikachu-outdoors.jpg",
    alt: "Graded Japanese Pikachu card displayed on sunlit rock beside a lake",
    aspectRatio: "2 / 3",
  },
];

export const otherInterests = [
  "Being a Dad",
  "Cooking",
  "Video Games",
  "Biking",
  "Working Out",
  "Slinging Slabbies",
];
