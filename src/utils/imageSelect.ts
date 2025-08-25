import type { ImageSources, RasterMap } from "../constants/imageSources";

/**
 * Converts a RasterMap to a srcSet string for use in <source> or <img> tags.
 * @param m - The RasterMap object mapping widths to image URLs.
 * @returns A srcSet string or undefined if the map is not provided.
 */
const toSrcSet = (m?: RasterMap) =>
  m ? Object.entries(m).map(([w, url]) => `${url} ${w}w`).join(", ") : undefined;

/**
 * Picks the largest image URL from a RasterMap.
 * @param m - The RasterMap object mapping widths to image URLs.
 * @returns The URL of the largest image or undefined if the map is not provided.
 */
const pickLargest = (m?: RasterMap) => {
  if (!m) return undefined;
  const maxW = Math.max(...Object.keys(m).map(Number));
  return m[maxW];
};

/**
 * Builds the data structure for a <picture> + <img> element.
 * - sources: Use for <source type=... srcSet=... sizes=...>
 * - img: Fallback <img> with src/srcSet/sizes/alt ready
 * @param asset - The image asset containing different formats and sizes.
 * @returns An object with `sources` for <source> tags and `img` for the fallback <img>.
 */
export function buildPicture(asset: ImageSources) {
  const webp = toSrcSet(asset.webp);
  const jpg  = toSrcSet(asset.jpg);
  const png  = toSrcSet(asset.png);

  // Picks a safe default src (priority: jpg -> webp -> avif -> png)
  const srcDefault =
    pickLargest(asset.jpg) ??
    pickLargest(asset.webp) ??
    pickLargest(asset.png) ??
    "";

  return {
    sources: [
      webp && { type: "image/webp", srcSet: webp },
      // PNG usually doesn't need a <source>; <img> covers it.
    ].filter(Boolean) as Array<{ type: string; srcSet: string }>,
    img: {
      src: srcDefault,
      // Keeps jpg srcSet for better compatibility (or png, if available)
      srcSet: jpg ?? png,
      sizes: asset.sizes ?? "(max-width:768px) 300px, 420px",
      alt: asset.alt,
    },
  };
}
