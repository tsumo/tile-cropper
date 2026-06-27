import { memo } from "react";
import { asset } from "../asset";
import { getId, objKeys } from "../utils";
import { Map } from "./Map";

function MapsComponent() {
  return (
    <>
      {objKeys(asset).map((collectionName) => {
        const collection = asset[collectionName];

        return (
          <div key={collectionName} id={getId("collection", collectionName)}>
            <h1>{collectionName}</h1>

            {objKeys(collection.groups).map((groupName) => {
              const group = collection.groups[groupName];

              return (
                <div key={groupName} id={getId("group", groupName)}>
                  <h2>{groupName}</h2>

                  {objKeys(group.maps).map((mapName) => {
                    const map = group.maps[mapName];
                    const src = `${collectionName}/${groupName}/${mapName}`;
                    const size = map.size || group.size || collection.size;

                    return (
                      <div key={mapName} id={getId("map", mapName)}>
                        <h3>{mapName}</h3>
                        <Map src={src} inheritedSize={size} regions={map.regions} />
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
}

export const Maps = memo(MapsComponent);
