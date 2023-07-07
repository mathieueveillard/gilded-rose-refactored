import AgedBrieItem from "./AgedBrieItem";
import BackstagePassItem from "./BackstagePassItem";
import CommonItem from "./CommonItem";
import AbstractItem from "./AbstractItem";
import SulfurasItem from "./SulfurasItem";

export type ItemName =
  | "Common Item"
  | "Aged Brie"
  | "Sulfuras, Hand of Ragnaros"
  | "Backstage passes to a TAFKAL80ETC concert";

class Item {
  constructor(public name: ItemName, public sellIn: number, public quality: number) {}

  convertToSpecializedItem = (): AbstractItem => {
    const parameters = { sellIn: this.sellIn, initialQuality: this.quality };
    switch (this.name) {
      case "Common Item":
        return new CommonItem(parameters);
      case "Aged Brie":
        return new AgedBrieItem(parameters);
      case "Backstage passes to a TAFKAL80ETC concert":
        return new BackstagePassItem(parameters);
      case "Sulfuras, Hand of Ragnaros":
        return new SulfurasItem();
    }
  };
}

export default Item;
