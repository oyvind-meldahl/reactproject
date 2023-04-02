//filter items by tag
export default function filterByTags(products, tags) {
  return products.filter((product) => {
    return tags.some((tag) => product.tags.includes(tag));
  });
}
