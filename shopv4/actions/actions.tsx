"use server";

import prisma from "@/prisma/client";

export async function seed() {
  // await prisma.categories.createMany({
  //   data: [
  //     {
  //       name: "electronics",
  //     },
  //     {
  //       name: "fashion",
  //     },
  //     {
  //       name: "beauty",
  //     },
  //   ],
  // });
  // await prisma.subcategories.createMany({
  //   data: [
  //     {
  //       name: "phones and accesories",
  //       categoriesId: "950a64d9-1a08-49d6-96bb-df8ce7391064",
  //     },
  //     {
  //       name: "pcs",
  //       categoriesId: "950a64d9-1a08-49d6-96bb-df8ce7391064",
  //     },
  //     {
  //       name: "tvs and accesories",
  //       categoriesId: "950a64d9-1a08-49d6-96bb-df8ce7391064",
  //     },
  //   ],
  // });
  // await prisma.subcategoriesentries.createMany({
  //   data: [
  //     {
  //       name: "phones",
  //       subcategoriesId: "1d6bddb4-48ab-4240-bf72-971379e81454",
  //     },
  //     {
  //       name: "accesories",
  //       subcategoriesId: "1d6bddb4-48ab-4240-bf72-971379e81454",
  //     },
  //     {
  //       name: "cases",
  //       subcategoriesId: "1d6bddb4-48ab-4240-bf72-971379e81454",
  //     },
  //   ],
  // });
  // await prisma.products.createMany({
  //   data: [
  //     {
  //       name: "iphone 14 pro",
  //       image: "iphone14pro.jpg",
  //       long: "long description for a product",
  //       short: "sh desc",
  //       link: "www.op.pl",
  //       recomended: true,
  //       thisweeksbest: true,
  //       bestvalue: true,
  //       prime: true,
  //       subcategoriesentriesId: "efbc0f9b-df36-41f0-aeb8-88c4522f52f6",
  //     },
  //     {
  //       name: "samsung m51",
  //       image: "samsungm51.jpg",
  //       long: "long description for a product",
  //       short: "sh desc",
  //       link: "www.op2.pl",
  //       recomended: true,
  //       thisweeksbest: false,
  //       bestvalue: false,
  //       prime: false,
  //       subcategoriesentriesId: "efbc0f9b-df36-41f0-aeb8-88c4522f52f6",
  //     },
  //     {
  //       name: "samsung m52",
  //       image: "samsungm52.jpg",
  //       long: "long description for a product",
  //       short: "sh desc",
  //       link: "www.op3.pl",
  //       recomended: false,
  //       thisweeksbest: true,
  //       bestvalue: false,
  //       prime: false,
  //       subcategoriesentriesId: "efbc0f9b-df36-41f0-aeb8-88c4522f52f6",
  //     },
  //     {
  //       name: "samsung m53",
  //       image: "samsungm53.jpg",
  //       long: "long description for a product",
  //       short: "sh desc",
  //       link: "www.op4.pl",
  //       recomended: false,
  //       thisweeksbest: false,
  //       bestvalue: true,
  //       prime: false,
  //       subcategoriesentriesId: "efbc0f9b-df36-41f0-aeb8-88c4522f52f6",
  //     },
  //   ],
  // });
}

export async function getProducts() {
  const res = await prisma.products.findMany({});
  return res;
}

export async function getCategories() {
  const res = await prisma.categories.findMany({});
  return res;
}

export async function getSubcategories() {
  const res = await prisma.subcategories.findMany({});
  return res;
}

export async function getSubcategoriesEntries() {
  const res = await prisma.subcategoriesentries.findMany({});
  return res;
}

export async function getProductsByStatement(
  category,
  subcategory,
  enrty,
  search
) {
  const res = await prisma.products.findMany({
    where: {
      name: {
        contains: search,
      },
      subcategoriesentries: {
        name: { contains: enrty },
        subcategories: {
          name: { contains: subcategory },
          categories: {
            name: { contains: category },
          },
        },
      },
    },
  });
  return res;
}
// export async function resetDb() {
//   await prisma.categories.deleteMany();
// await prisma.subcategories.deleteMany();
// await prisma.subcategoriesentries.deleteMany();
// await prisma.categories.create({
//   data: {
//     name: "Electronicts",
//     icon: "BsPlug",
//     entries: {
//       create: {
//         name: "Phones and accesories",
//         icon: "BsLightningCharge",
//         entries: {
//           create: {
//             name: "Smartphones",
//             icon: "BsPeqwehoneee",eq
//           },
//         },
//       },
//     },
//   },
// });

// await prisma.users.create({
//   data: {
//     username: "marek",
//     email: "test@gmail.com",
//     password: "hashtahis",
//   },
// });

// await prisma.categories.createMany({
//   data: [
//     {
//       name: "Electronics",
//       icon: "BsPlug",
//     },
//     {
//       name: "Fashion",
//       icon: "BsPlug",
//     },
//     {
//       name: "Beauty",
//       icon: "BsPlug",
//     },
//   ],
// });
// }
