import AbstractItem, { QualityParameters } from "./AbstractItem";

class AgedBrieItem extends AbstractItem {
  private quality: number;
  private sellIn: number;

  constructor({ initialQuality, sellIn }: QualityParameters) {
    super();
    this.quality = initialQuality;
    this.sellIn = sellIn;
  }

  updateQuality = () => {
    const qualityGain = this.sellIn <= 0 ? 2 : 1;
    this.quality = Math.min(AbstractItem.MAXIMUM_QUALITY, this.quality + qualityGain);
    this.sellIn -= 1;
  };

  deprecatedLogQuality() {
    console.log(`Aged Brie -> ${this.quality}`);
  }
}

export default AgedBrieItem;
