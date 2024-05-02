// export type Brand = {
//   id: number;
//   name: string;
// };


// geliştirme ortamı için olan tipler
export interface BrandListItemDto {
  id: number;
  name: string;
  createdDate: Date | string; // Backend'den string gelebilir, bir oluşrurursak Date olarak oluşturabiliriz.
}

// const brandListItemDto: BrandListItemDto = {
//   id: 0,
//   name: '',
//   createdDate: "2024-05-02T13:19:14.764Z",
// }

// Date string gelirse Date'e çevirme
// if (!(brandListItemDto.createdDate instanceof Date))
//   brandListItemDto.createdDate = new Date(brandListItemDto.createdDate);
