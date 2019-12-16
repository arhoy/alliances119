const path = require('path');

const { getAmazonProducts, getAmazonElectronics } = require('./apis/pilotjs');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  // getting api data
  const amazonProductData = await getAmazonProducts();
  const amazonElectronicData = await getAmazonElectronics();

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
      allPants: allContentfulFashionTwoPants {
        nodes {
          productSlug
        }
      }
      allShoes: allContentfulFashionTwoShoes {
        nodes {
          productSlug
        }
      }
      allShirt: allContentfulFashionTwoShirts {
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

  // create page for each shoes product and list them all in /shoes
  data.allShoes.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Shoe.js'),
      context: {
        slug: item.productSlug,
      },
    });
  });

  // create page for each shirt product and list them all in /products
  data.allShirt.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Shirt.js'),
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

  // create page from APIS
  amazonElectronicData.data.forEach(item => {
    // replace . with - from incoming data
    const substringArray = [')', '!', '('];
    // only create page if data for slug is valid WIN32 path (slug doesn't start with JUNK)
    if (
      !substringArray.some(substring => item.slug.charAt(0).includes(substring))
    ) {
      createPage({
        path: `amzn/electronics/${item.slug}`,
        component: path.resolve('./src/templates/AmazonProduct.js'),
        context: {
          slug: item.slug,
          name: item.name,
          rating: item.rating,
          priceValue: item.priceValue,
          image: item.image,
          department: 'electronics',
        },
      });
    }
  });
};
