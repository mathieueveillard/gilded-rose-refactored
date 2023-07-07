import AbstractItem, { QualityParameters } from "./AbstractItem";

class BackstagePassItem extends AbstractItem {
  private quality: number;
  private sellIn: number;

  constructor({ initialQuality, sellIn }: QualityParameters) {
    super();
    this.quality = initialQuality;
    this.sellIn = sellIn;
  }

  updateQuality = () => {
    if (this.sellIn <= 0) {
      this.quality = 0;
      this.sellIn -= 1;
      return;
    }

    const qualityGain = (() => {
      if (this.sellIn < 6) {
        return 3;
      }
      if (this.sellIn < 11) {
        return 2;
      }
      return 1;
    })();

    this.quality = Math.min(AbstractItem.MAXIMUM_QUALITY, this.quality + qualityGain);
    this.sellIn -= 1;
  };

  deprecatedLogQuality() {
    console.log(`Backstage passes to a TAFKAL80ETC concert -> ${this.quality}`);
  }
}

export default BackstagePassItem;
