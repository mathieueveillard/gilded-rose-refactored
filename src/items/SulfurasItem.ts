import AbstractItem from "./AbstractItem";

class SulfurasItem extends AbstractItem {
  static readonly SULFURAS_QUALITY = 80;

  updateQuality = () => {};

  deprecatedLogQuality() {
    console.log(`Sulfuras, Hand of Ragnaros -> ${SulfurasItem.SULFURAS_QUALITY}`);
  }
}

export default SulfurasItem;
