export type Region = {
  size?: number;
  xOffset?: number;
  yOffset?: number;
  xOffsetPx?: number;
  yOffsetPx?: number;
  x: number;
  y: number;
};

type TileMap = {
  size?: number;
  regions: Region[];
};

type TileGroup = Record<string, { size?: number; maps: Record<string, TileMap> }>;

type TileCollection = { size: number; groups: TileGroup };

type TileCollections = Record<string, TileCollection>;

export const asset: TileCollections = {
  DawnLike: {
    size: 16,
    groups: {
      Characters: {
        maps: {
          "Aquatic0.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Avian0.png": {
            regions: [{ x: 8, y: 13 }],
          },
          "Cat0.png": {
            regions: [{ x: 8, y: 5 }],
          },
          "Demon0.png": {
            regions: [{ x: 8, y: 9 }],
          },
          "Dog0.png": {
            regions: [{ x: 8, y: 7 }],
          },
          "Elemental0.png": {
            regions: [{ x: 8, y: 11 }],
          },
          "Humanoid0.png": {
            regions: [{ x: 8, y: 27 }],
          },
          "Misc0.png": {
            regions: [{ x: 8, y: 8 }],
          },
          "Pest0.png": {
            regions: [{ x: 8, y: 11 }],
          },
          "Plant0.png": {
            regions: [{ x: 8, y: 8 }],
          },
          "Player0.png": {
            regions: [{ x: 8, y: 15 }],
          },
          "Quadraped0.png": {
            regions: [{ x: 8, y: 12 }],
          },
          "Reptile0.png": {
            regions: [{ x: 8, y: 13 }],
          },
          "Rodent0.png": {
            regions: [{ x: 8, y: 4 }],
          },
          "Slime0.png": {
            regions: [{ x: 8, y: 5 }],
          },
          "Undead0.png": {
            regions: [{ x: 8, y: 10 }],
          },
        },
      },
      Commissions: {
        maps: {
          "Engineer.png": {
            regions: [{ x: 4, y: 4 }],
          },
          "Icons.png": {
            regions: [{ x: 3, y: 3 }],
          },
          "Mage.png": {
            regions: [{ x: 4, y: 4 }],
          },
          "Paladin.png": {
            regions: [{ x: 4, y: 4 }],
          },
          "Rogue.png": {
            regions: [{ x: 4, y: 4 }],
          },
          "Template.png": {
            regions: [{ x: 4, y: 4 }],
          },
          "Warrior.png": {
            regions: [{ x: 4, y: 4 }],
          },
        },
      },
      GUI: {
        maps: {
          "GUI0.png": {
            regions: [{ x: 16, y: 19 }],
          },
        },
      },
      Items: {
        maps: {
          "Ammo.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Amulet.png": {
            regions: [{ x: 8, y: 3 }],
          },
          "Armor.png": {
            regions: [{ x: 8, y: 9 }],
          },
          "Book.png": {
            regions: [{ x: 8, y: 9 }],
          },
          "Boot.png": {
            regions: [{ x: 8, y: 2 }],
          },
          "Chest0.png": {
            regions: [{ x: 8, y: 3 }],
          },
          "Flesh.png": {
            regions: [{ x: 8, y: 9 }],
          },
          "Food.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Glove.png": {
            regions: [{ x: 8, y: 1 }],
          },
          "Hat.png": {
            regions: [{ x: 8, y: 4 }],
          },
          "Key.png": {
            regions: [{ x: 8, y: 1 }],
          },
          "Light.png": {
            regions: [{ x: 8, y: 1 }],
          },
          "LongWep.png": {
            regions: [{ x: 8, y: 7 }],
          },
          "MedWep.png": {
            regions: [{ x: 8, y: 2 }],
          },
          "Money.png": {
            regions: [{ x: 8, y: 8 }],
          },
          "Music.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Potion.png": {
            regions: [{ x: 8, y: 5 }],
          },
          "Ring.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Rock.png": {
            regions: [{ x: 8, y: 2 }],
          },
          "Scroll.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Shield.png": {
            regions: [{ x: 8, y: 1 }],
          },
          "ShortWep.png": {
            regions: [{ x: 8, y: 5 }],
          },
          "Tool.png": {
            regions: [{ x: 8, y: 3 }],
          },
          "Wand.png": {
            regions: [{ x: 8, y: 7 }],
          },
        },
      },
      Objects: {
        maps: {
          "Decor0.png": {
            regions: [{ x: 8, y: 22 }],
          },
          "Door0.png": {
            regions: [{ x: 8, y: 6 }],
          },
          "Effect0.png": {
            regions: [{ x: 8, y: 26 }],
          },
          "Fence.png": {
            regions: [{ x: 8, y: 12 }],
          },
          "Floor.png": {
            regions: [{ x: 21, y: 39 }],
          },
          "Ground0.png": {
            regions: [{ x: 8, y: 7 }],
          },
          "Hill0.png": {
            regions: [{ x: 16, y: 18 }],
          },
          "Map0.png": {
            regions: [{ x: 12, y: 15 }],
          },
          "Ore0.png": {
            regions: [{ x: 9, y: 7 }],
          },
          "Pit0.png": {
            regions: [{ x: 8, y: 32 }],
          },
          "Tile.png": {
            regions: [{ x: 8, y: 4 }],
          },
          "Trap0.png": {
            regions: [{ x: 8, y: 5 }],
          },
          "Tree0.png": {
            regions: [{ x: 12, y: 36 }],
          },
          "Wall.png": {
            regions: [{ x: 20, y: 51 }],
          },
        },
      },
    },
  },
};
