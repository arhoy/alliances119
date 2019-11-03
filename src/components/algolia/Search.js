// Search.js

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
// import styled from '@emotion/styled';
// import { Link } from 'gatsby-link';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import ProductSearchPreview from './ProductSearchPreview';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

export default function Search() {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits hitComponent={ProductSearchPreview} />
    </InstantSearch>
  );
}
