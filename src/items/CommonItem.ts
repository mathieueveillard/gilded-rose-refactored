import AbstractItem, { QualityParameters } from "./AbstractItem";

class CommonItem extends AbstractItem {
  private quality: number;
  private sellIn: number;

  constructor({ initialQuality, sellIn }: QualityParameters) {
    super();
    this.quality = initialQuality;
    this.sellIn = sellIn;
  }

  updateQuality = () => {
    const qualityLoss = this.sellIn <= 0 ? 2 : 1;
    this.quality = Math.max(AbstractItem.MINIMUM_QUALITY, this.quality - qualityLoss);
    this.sellIn -= 1;
  };

  deprecatedLogQuality() {
    console.log(`Common Item -> ${this.quality}`);
  }
}

export default CommonItem;
