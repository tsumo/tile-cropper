import { useRef } from "react";
import cl from "clsx";
import { type Region } from "../asset";
import { copyTile, range } from "../utils";
import { useAppContext } from "./AppContext";
import s from "./Map.module.css";

export const Map = ({ src, inheritedSize, regions }: { src: string; inheritedSize: number; regions: Region[] }) => {
  const ref = useRef<HTMLImageElement>(null);
  const { scaleFactor } = useAppContext();

  return (
    <div className={s.mapContainer}>
      <img src={src} ref={ref} className={s.tileMap} style={{ zoom: scaleFactor }} />
      {regions.map((region, i) => {
        const size = region.size || inheritedSize;
        return (
          <div className={s.region} key={i}>
            {range(region.y).map((y) => {
              const top = ((region.yOffset ?? 0) + y) * size + (region.yOffsetPx ?? 0);
              return (
                <div className={s.regionRow} style={{ top: top * scaleFactor }} key={y}>
                  {range(region.x).map((x) => {
                    const left = ((region.xOffset ?? 0) + x) * size + (region.xOffsetPx ?? 0);
                    return (
                      <div
                        className={cl(s.tile, region.debug && s.debug)}
                        style={{
                          left: left * scaleFactor,
                          width: size * scaleFactor,
                          height: size * scaleFactor,
                        }}
                        onClick={() => ref.current && copyTile(ref.current, left, top, size, scaleFactor)}
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
