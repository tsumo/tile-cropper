export type Region = {
  size?: number;
  xOffset?: number;
  yOffset?: number;
  xCount: number;
  yCount: number;
};

type TileMap = {
  size?: number;
  regions: Region[];
};

type TileGroup = Record<
  string,
  { size?: number; maps: Record<string, TileMap> }
>;

type TileCollection = { size: number; groups: TileGroup };

type TileCollections = Record<string, TileCollection>;

export const asset: TileCollections = {
  DawnLike: {
    size: 16,
    groups: {
      Characters: {
        maps: {
          "Aquatic0.png": {
            regions: [{ xCount: 8, yCount: 6 }],
          },
        },
      },
    },
  },
};
