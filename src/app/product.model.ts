/**
  * Task Model
  */
 export class Product {
    constructor(
      public item: string,
      public price: number,
      public productId: number,
      public qnty: number,
      public isAvailable: boolean,
    ) {
      this.isAvailable = isAvailable || false;
    }
  }
