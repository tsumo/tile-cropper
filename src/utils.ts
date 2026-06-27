export const objKeys = <T extends Record<string, unknown>>(
  obj: T,
): (keyof T)[] => Object.keys(obj);

export const range = (n: number) => [...Array(n).keys()];

export const copyTile = (
  el: HTMLImageElement,
  xOffset: number,
  yOffset: number,
  size: number,
  factor: number,
) => {
  const canvas = document.createElement("canvas");
  canvas.width = size * factor;
  canvas.height = size * factor;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Cannot get 2d context");
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(
    el,
    xOffset,
    yOffset,
    size,
    size,
    0,
    0,
    size * factor,
    size * factor,
  );
  canvas.toBlob(function (blob) {
    if (!blob) throw new Error("Cannot get blob");
    const item = new ClipboardItem({ "image/png": blob });
    navigator.clipboard.write([item]);
  });
  document.body.removeChild(canvas);
};

export const getId = (type: "collection" | "group" | "map", name: string) =>
  `${type}-${name}`;

export const scrollIntoView = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
