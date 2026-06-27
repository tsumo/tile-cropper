import { useEffect, useRef, useState } from "react";
import { asset } from "../asset";
import { getId, objKeys } from "../utils";
import { Menu } from "./Menu";
import { Map } from "./Map";
import s from "./App.module.css";

const App = () => {
  const [activeMenuIds, setActiveMenuIds] = useState<Set<string>>(new Set());
  const mapsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = mapsRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveMenuIds((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            if (entry.isIntersecting) next.add(entry.target.id);
            else next.delete(entry.target.id);
          }
          return next;
        });
      },
      { root, threshold: 0 },
    );

    for (const collectionName of objKeys(asset)) {
      for (const groupName of objKeys(asset[collectionName].groups)) {
        for (const mapName of objKeys(
          asset[collectionName].groups[groupName].maps,
        )) {
          const el = document.getElementById(getId("map", mapName));
          if (el) observer.observe(el);
        }
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.app}>
      <Menu activeMenuIds={activeMenuIds} />

      <div className={s.maps} ref={mapsRef}>
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
      </div>
    </div>
  );
};

export default App;
