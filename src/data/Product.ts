export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  link: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Soy Protein Isolate Powder – Vanilla",
    image: "https://m.media-amazon.com/images/I/61LflWsZ6yL._AC_SL1000_.jpg",
    price: 26.90,
    link: "https://www.amazon.com/Puritans-Pride-Protein-Isolate-Vanilla-28/dp/B004R63YQA/ref=sr_1_48?crid=3HS8U5C9GSJRK&dib=eyJ2IjoiMSJ9._F1q4b1gcyMPRRlt4J1MVFTNSTUVVFyWCw3uGIvP7E5iHQhz5svVnhD9nxuWAwcxowHNkX5Rigd8MGYNgxdwblqwE3rQwRbOZTkhF05qBQuMC7coJbPrgVeWP76Im_-l-fw4qA-QdtLX4js3xzoZtdnqBRqV1U3yckbgg64wYM9BGohqVRteI540la_1kT2k8YIRHN5iDIsx3q_oaOLXBPBIN2ufcujszAu0eHa10D8m1dpeYCMFGGz76B8Sm63e30rIEzEyICrjPeWpEGlaBbDfqkitE0r8JwvMoHWOgNc._i9gIXETt2GFvY_-dc_MsJWs55FD0H8pZ-JlWFSUr3c&dib_tag=se&keywords=soy+protein+shake+vanilla&qid=1754060721&sprefix=soy+protein+shake+vanilla%2Caps%2C177&sr=8-48",
  },
  {
    id: "2",
    title: "Whey Protein Isolate Power – Chocolate",
    image: "https://m.media-amazon.com/images/I/51-HavIqceS._AC_SL1024_.jpg",
    price: 47.84,
    link: "https://www.amazon.com/Bluebonnet-Nutrition-Protein-Isolate-Vanilla/dp/B0025PZQ0M/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.3afbfb03-37f9-433d-812b-5618f5fce9ff%3Aamzn1.sym.3afbfb03-37f9-433d-812b-5618f5fce9ff&crid=3DED09R71KSJ0&cv_ct_cx=soy%2Bprotein%2Bisolate%2Bpuritan%27s%2Bpride&keywords=soy%2Bprotein%2Bisolate%2Bpuritan%27s%2Bpride&pd_rd_i=B00CQ7PW2G&pd_rd_r=587b521d-0a63-4494-9daa-18fb3cdea105&pd_rd_w=40uBA&pd_rd_wg=HCQbZ&pf_rd_p=3afbfb03-37f9-433d-812b-5618f5fce9ff&pf_rd_r=ZKEMD0JA3FX30SSREWJQ&qid=1754061015&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=soy%2Bprotein%2Bisolate%2Bpuritans%2Bpride%2Caps%2C189&sr=1-3-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
  },
];