export interface WorkPhoto {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  width: number;
  height: number;
}

export interface WorkVideo {
  src: string;
  poster: string;
  title: string;
  description: string;
}

export const workPhotos: WorkPhoto[] = [
  {
    src: "/work/kitchen-finished.jpg",
    alt: "Remodeled kitchen with white shaker cabinets, butcher block countertops, and subway tile backsplash",
    caption:
      "Fresh white cabinetry, butcher block counters & a subway tile backsplash",
    tag: "Kitchen Remodel",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/kitchen-demo.jpg",
    alt: "Kitchen gutted down to the studs during demolition",
    caption: "Full gut down to the studs — every great remodel starts clean",
    tag: "Kitchen Remodel",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/kitchen-progress-1.jpg",
    alt: "Kitchen walls skim-coated with subfloor prepped for new flooring",
    caption: "Walls skim-coated and subfloor prepped for new finishes",
    tag: "Kitchen Remodel",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/kitchen-progress-2.jpg",
    alt: "Kitchen renovation in progress with new hardwood flooring",
    caption: "New hardwood flowing into the opened-up kitchen space",
    tag: "Kitchen Remodel",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/entryway-demo.jpg",
    alt: "Old tile floor demolished in a mudroom entryway",
    caption: "Tile demo in the mudroom — out with the old",
    tag: "Demo & Prep",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/entryway-tile.jpg",
    alt: "New patterned tile being installed over backer board in an entryway",
    caption: "Patterned tile going in over fresh backer board",
    tag: "Tile Work",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/sunroom-conversion.jpg",
    alt: "Bonus room with OSB walls being converted into living space",
    caption: "Converting this bonus space into livable square footage",
    tag: "Sunroom Conversion",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/sunroom-floor.jpg",
    alt: "Fresh self-leveling compound poured on a sunroom floor",
    caption: "Self-leveling compound down — ready for flooring",
    tag: "Sunroom Conversion",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/floor-repair.jpg",
    alt: "Damaged hardwood flooring removed down to the subfloor for dry rot repair",
    caption: "Damaged flooring torn out down to a solid subfloor",
    tag: "Dry Rot Repair",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/flooring-install.jpg",
    alt: "New dark wood plank flooring being installed over green underlayment",
    caption: "New hardwood-style plank flooring going down",
    tag: "Flooring",
    width: 1080,
    height: 1350,
  },
  {
    src: "/work/staircase-rebuild.jpg",
    alt: "Custom wooden staircase rebuilt with new treads",
    caption: "Custom staircase rebuild with brand-new treads",
    tag: "Carpentry",
    width: 1080,
    height: 1440,
  },
  {
    src: "/work/room-renovation.jpg",
    alt: "Interior room fully primed and ready for finishes during renovation",
    caption: "Full interior refresh — primed and ready for finishes",
    tag: "Interior Renovation",
    width: 1080,
    height: 1350,
  },
];

export const workVideos: WorkVideo[] = [
  {
    src: "/work/fence-build.mp4",
    poster: "/work/fence-build-poster.jpg",
    title: "Custom Cedar Fence Build",
    description: "A backyard transformation, board by board.",
  },
  {
    src: "/work/home-walkthrough.mp4",
    poster: "/work/home-walkthrough-poster.jpg",
    title: "Renovation Walkthrough",
    description: "A walk through one of our recent whole-home projects.",
  },
];
