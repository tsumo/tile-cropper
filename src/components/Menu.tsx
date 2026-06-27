import { Fragment } from "react";
import cl from "clsx";
import { asset } from "../asset";
import { getId, objKeys, scrollIntoView } from "../utils";
import s from "./Menu.module.css";

export const Menu = ({ activeMenuIds }: { activeMenuIds: Set<string> }) => {
  return (
    <div className={s.menu}>
      {objKeys(asset).map((collectionName) => {
        const collection = asset[collectionName];
        const collectionId = getId("collection", collectionName);
        const collectionActive = objKeys(collection.groups).some((groupName) =>
          objKeys(collection.groups[groupName].maps).some((mapName) => activeMenuIds.has(getId("map", mapName))),
        );

        return (
          <Fragment key={collectionId}>
            <p onClick={() => scrollIntoView(collectionId)} className={cl(s.item, collectionActive && s.active)}>
              {collectionName}
            </p>

            {objKeys(collection.groups).map((groupName) => {
              const group = collection.groups[groupName];
              const groupId = getId("group", groupName);
              const groupActive = objKeys(group.maps).some((mapName) => activeMenuIds.has(getId("map", mapName)));

              return (
                <Fragment key={groupId}>
                  <p
                    onClick={() => scrollIntoView(groupId)}
                    className={cl(s.item, groupActive && s.active)}
                    style={{ marginLeft: 20 }}
                  >
                    {groupName}
                  </p>

                  {objKeys(group.maps).map((mapName) => {
                    const mapId = getId("map", mapName);
                    const mapActive = activeMenuIds.has(mapId);

                    return (
                      <p
                        onClick={() => scrollIntoView(mapId)}
                        className={cl(s.item, mapActive && s.active)}
                        style={{ marginLeft: 40 }}
                        key={mapId}
                      >
                        {mapName}
                      </p>
                    );
                  })}
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
};
