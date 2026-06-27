import { Fragment } from "react";
import { asset } from "../asset";
import { getId, objKeys, scrollIntoView } from "../utils";
import s from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={s.menu}>
      {objKeys(asset).map((collectionName) => {
        const collection = asset[collectionName];
        const collectionId = getId("collection", collectionName);

        return (
          <Fragment key={collectionId}>
            <p onClick={() => scrollIntoView(collectionId)} className={s.item}>
              {collectionName}
            </p>

            {objKeys(collection.groups).map((groupName) => {
              const group = collection.groups[groupName];
              const groupId = getId("group", groupName);

              return (
                <Fragment key={groupId}>
                  <p
                    onClick={() => scrollIntoView(groupId)}
                    className={s.item}
                    style={{ marginLeft: 20 }}
                  >
                    {groupName}
                  </p>

                  {objKeys(group.maps).map((mapName) => {
                    const mapId = getId("map", mapName);

                    return (
                      <p
                        onClick={() => scrollIntoView(mapId)}
                        className={s.item}
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
