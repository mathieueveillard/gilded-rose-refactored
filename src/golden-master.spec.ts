import runGoldenMaster from "jest-golden-master";
import { GildedRose, Item } from ".";

const age =
  (fn: () => void) =>
  (days: number): void => {
    for (let day = 0; day < days; day++) {
      console.log("--- Next day ---");
      fn();
      console.log("");
    }
  };

describe("Common item", () => {
  test("Aging of Common item (sell in < quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Common Item", 10, 30);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(50);
    });
  });

  test("Aging of Common item (sell in > quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Common Item", 30, 10);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(50);
    });
  });
});

describe("Aged Brie", () => {
  test("Aging of Aged Brie (sell in < quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Aged Brie", 10, 30);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(50);
    });
  });

  test("Aging of Aged Brie (sell in > quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Aged Brie", 30, 10);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(50);
    });
  });
});

describe("Sulfuras", () => {
  test("Aging of Sulfuras (sell in < quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 10, 80);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(110);
    });
  });

  test("Aging of Sulfuras (sell in > quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 100, 80);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(110);
    });
  });
});

describe("Backstage passes", () => {
  test("Aging of Backstage passes (sell in < quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(50);
    });
  });

  test("Aging of Backstage passes (sell in > quality)", async () => {
    await runGoldenMaster(async () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
      const inn = new GildedRose([item]);
      age(() => inn.updateQuality())(50);
    });
  });
});

describe("All combined", () => {
  test("All combined (sell in < quality)", async () => {
    await runGoldenMaster(async () => {
      const items = [
        new Item("Common Item", 10, 30),
        new Item("Aged Brie", 10, 30),
        new Item("Sulfuras, Hand of Ragnaros", 10, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30),
      ];
      const inn = new GildedRose(items);
      age(() => inn.updateQuality())(50);
    });
  });

  test("All combined (sell in > quality)", async () => {
    await runGoldenMaster(async () => {
      const items = [
        new Item("Common Item", 30, 10),
        new Item("Aged Brie", 30, 10),
        new Item("Sulfuras, Hand of Ragnaros", 100, 80),
        new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10),
      ];
      const inn = new GildedRose(items);
      age(() => inn.updateQuality())(110);
    });
  });
});

describe("No item", () => {
  test("No itme", async () => {
    await runGoldenMaster(async () => {
      const inn = new GildedRose();
      age(() => inn.updateQuality())(50);
    });
  });
});
