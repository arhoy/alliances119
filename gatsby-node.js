const path = require('path');

const { getAmazonProducts } = require('./apis/pilotjs');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  // getting api data
  const amazonProductData = await getAmazonProducts();

  const { data } = await graphql(`
    {
      allArticles: allContentfulFashionTwoArticles {
        nodes {
          slug
        }
      }
      allBags: allContentfulFashionTwoBags {
        nodes {
          productSlug
        }
      }
    }
  `);

  // create pages for Article Content Model
  data.allArticles.nodes.forEach(article => {
    createPage({
      path: `articles/${article.slug}`,
      component: path.resolve('./src/templates/Article.js'),
      context: {
        slug: article.slug,
      },
    });
  });

  // create page for each bag product and list them all in /bags
  data.allBags.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Bag.js'),
      context: {
        slug: item.productSlug,
      },
    });
  });

  // create page for each pants product and list them all in /pants
  data.allPants.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Pant.js'),
      context: {
        slug: item.productSlug,
      },
    });
  });

  // create page from APIS
  amazonProductData.data.forEach(item => {
    createPage({
      path: `amzn/amazonproducts/${item.slug}`,
      component: path.resolve('./src/templates/AmazonProduct.js'),
      context: {
        slug: item.slug,
        name: item.name,
        rating: item.rating,
        priceValue: item.priceValue,
        image: item.image,
        department: 'amazonproducts',
      },
    });
  });
};
