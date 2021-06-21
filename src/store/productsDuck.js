import Product from "../models/Product";

const initialState = {
  products: [
    new Product("Alfajor Block", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/1006596.jpg?alt=media&token=eafee33b-fad1-4257-ad1d-5658c7d52f03"),
    new Product("Chocolate Block grande", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/40161206-14d390e4f46382ae0015775389904811-640-0.jpg?alt=media&token=be94ff7f-74ac-4063-ac25-6da63a35ac3a"),
    new Product("Lays Clasicas", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/81TLFU5Yj6L._SY879_.jpg?alt=media&token=97b7b246-01d4-479c-a10b-48cf95a0e459"),
    new Product("ChocoPause Milka", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/867-62898.jpg?alt=media&token=143f63d6-7877-4a28-9111-94bcffeea3fd"),
    new Product("Ferrero Rocher x24 unidades", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/91qi6PV%2BXBL._SL1500_.jpg?alt=media&token=63df5096-7aac-4632-9187-1337967dfe3a"),
    new Product("Mogul Extreme", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/Arcor_MogulExtreme200gr_embalaje.jpg?alt=media&token=ab604826-f1f9-461f-b819-559080018302"),
    new Product("Halls Fuerte", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/CYP41.jpg?alt=media&token=418be194-4605-4c17-8c6c-2391a166fbfc"),
    new Product("Blockazo x 1kg", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/Chocolate-Block-x-1kg-supermercedes.jpg?alt=media&token=cb591e87-e44b-459f-83e4-9c9e168fa6d0"),
    new Product("Chocolate Milka", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/D_NQ_NP_624809-MLA42407677827_062020-O.jpg?alt=media&token=f1b99427-9529-46ca-93ef-f148bb435512"),
    new Product("Mini-Torta Milka", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/Diseno-sin-titulo-49.jpg?alt=media&token=d6957e64-7618-44dd-8292-bea66245410b"),
    new Product("Chocolate Block", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/chocolate-block-38g_60188.jpg?alt=media&token=65b1b84e-cdb4-474b-9650-40625a1b9bb4"),
    new Product("Coca-Cola 2.25lts", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/coca-cola-225L-almacen-gaseosas-casa-segal-mendoza-600x600.jpg?alt=media&token=86e9e7e7-e08c-47b6-be3e-14f081ff84cf"),
    new Product("Doritos Chili", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/doritos-chilli-44g.jpg?alt=media&token=29018f69-bb23-460e-9c2e-03bb8c372529"),
    new Product("Doritos", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/doritos_500.jpg?alt=media&token=0c972992-e2ec-4ba7-8aaf-6724b13882df"),
    new Product("Ferrero Rocher x3 unidades", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/ferrero-rocher-pack-3x16-venta-online.jpg?alt=media&token=4f9f3e81-5504-4ebb-b0f8-508fc40fd321"),
    new Product("Chocolate Milka Oreo", 100, "", "https://firebasestorage.googleapis.com/v0/b/tienda-para-bajon.appspot.com/o/milka-oreo-15511-87f3e2ce5561f6f92715905165285890-640-0.jpg?alt=media&token=5c592342-3475-4258-ba7a-12709c7d376c")
  ],
}

const ADD_PRODUCT = "ADD_PRODUCT"

const productReducer = (state = initialState, action) => {
  if (ADD_PRODUCT === action.type) {

  }

  return state;
}


export default productReducer;


