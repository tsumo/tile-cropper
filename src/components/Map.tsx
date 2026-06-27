import { useRef } from "react";
import { type Region } from "../asset";
import { copyTile, range } from "../utils";
import s from "./Map.module.css";

const factor = 4;

export const Map = ({ src, inheritedSize, regions }: { src: string; inheritedSize: number; regions: Region[] }) => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className={s.mapContainer}>
      <img src={src} ref={ref} className={s.tileMap} style={{ zoom: factor }} />
      {regions.map((region, i) => {
        const size = region.size || inheritedSize;
        return (
          <div className={s.region} key={i}>
            {range(region.y).map((y) => {
              const top = ((region.yOffset ?? 0) + y) * size + (region.yOffsetPx ?? 0);
              return (
                <div className={s.regionRow} style={{ top: top * factor }} key={y}>
                  {range(region.x).map((x) => {
                    const left = ((region.xOffset ?? 0) + x) * size + (region.xOffsetPx ?? 0);
                    return (
                      <div
                        className={s.tile}
                        style={{
                          left: left * factor,
                          width: size * factor,
                          height: size * factor,
                        }}
                        onClick={() => ref.current && copyTile(ref.current, left, top, size, factor)}
                        key={x}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
