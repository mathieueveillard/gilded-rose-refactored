import AbstractItem from "./items/AbstractItem";
import Item from "./items/LegacyItem";

export class GildedRose {
  private readonly items: AbstractItem[];

  constructor(legacyItems: Item[] = []) {
    this.items = legacyItems.map((item) => item.convertToSpecializedItem());
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateQuality();
      item.deprecatedLogQuality();
    });
  }
}
