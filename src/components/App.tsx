import { useEffect, useRef, useState } from "react";
import { asset } from "../asset";
import { getId, objKeys } from "../utils";
import { Menu } from "./Menu";
import { Maps } from "./Maps";
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
        <Maps />
      </div>
    </div>
  );
};

export default App;
