import { useEffect, useState, type RefObject } from "react";
import { getId, objKeys } from "./utils";
import { asset } from "./asset";

export const useActiveMenuIds = (mapsRef: RefObject<HTMLDivElement | null>) => {
  const [activeMenuIds, setActiveMenuIds] = useState<Set<string>>(new Set());

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
  }, [mapsRef]);

  return activeMenuIds;
};
