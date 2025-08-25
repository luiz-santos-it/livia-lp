import type { ImageSources, RasterMap } from "../constants/imageSources";

/**
 * Converts a RasterMap to a srcSet string for use in <source> or <img> tags.
 */
const toSrcSet = (m?: RasterMap) =>
  m ? Object.entries(m).map(([w, url]) => `${url} ${w}w`).join(", ") : undefined;

/**
 * Picks the largest image URL from a RasterMap.
 */
const pickLargest = (m?: RasterMap) => {
  if (!m) return undefined;
  const maxW = Math.max(...Object.keys(m).map(Number));
  return m[maxW];
};

/**
 * Builds the data structure for a <picture> + <img> element.
 */
export function buildPicture(asset: ImageSources) {
  const webp = toSrcSet(asset.webp);
  const jpg  = toSrcSet(asset.jpg);

  const srcDefault =
    pickLargest(asset.jpg) ??
    pickLargest(asset.webp) ??
    "";

  return {
    sources: [
      webp && { type: "image/webp", srcSet: webp },
    ].filter(Boolean) as Array<{ type: string; srcSet: string }>,

    img: {
      src: srcDefault,
      srcSet: jpg || webp, // prefer JPG, fallback to WebP if JPG is missing
      sizes: asset.sizes ?? "(max-width:768px) 300px, 420px",
      alt: asset.alt,
    },
  };
}
