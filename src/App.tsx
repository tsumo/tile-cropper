import { useRef } from "react";
import { asset, type Region } from "./asset";
import { copyTile, objKeys, range } from "./utils";

const factor = 4;

const Map = ({
  src,
  inheritedSize,
  regions,
}: {
  src: string;
  inheritedSize: number;
  regions: Region[];
}) => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className="map-container">
      <img src={src} ref={ref} className="tile-map" style={{ zoom: factor }} />
      {regions.map((region, i) => {
        const size = region.size || inheritedSize;
        return (
          <div className="region" key={i}>
            {range(region.yCount).map((y) => {
              const top = (region.yOffset || 1) * size * y;
              return (
                <div
                  className="region-row"
                  style={{
                    top: top * factor,
                  }}
                  key={y}
                >
                  {range(region.xCount).map((x) => {
                    const left = (region.xOffset || 1) * size * x;
                    return (
                      <div
                        className="tile visual"
                        style={{
                          width: size * factor,
                          height: size * factor,
                        }}
                        onClick={() =>
                          ref.current &&
                          copyTile(ref.current, left, top, size, factor)
                        }
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

const App = () => {
  return (
    <>
      {objKeys(asset).map((collectionName) => {
        const collection = asset[collectionName];

        return (
          <div key={collectionName}>
            <h1>{collectionName}</h1>

            {objKeys(collection.groups).map((groupName) => {
              const group = collection.groups[groupName];

              return (
                <div key={groupName}>
                  <h2>{groupName}</h2>

                  {objKeys(group.maps).map((mapName) => {
                    const map = group.maps[mapName];
                    const src = `${collectionName}/${groupName}/${mapName}`;
                    const size = map.size || group.size || collection.size;

                    return (
                      <div key={mapName}>
                        <h3>{mapName}</h3>
                        <Map
                          src={src}
                          inheritedSize={size}
                          regions={map.regions}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default App;
