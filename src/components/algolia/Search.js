// Search.js

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import styled from '@emotion/styled';

import {
  InstantSearch,
  SearchBox,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';

import ProductSearchPreview from './ProductSearchPreview';

const Results = connectStateResults(({ searchState }) =>
  searchState && searchState.query ? (
    <StyledHits hitComponent={ProductSearchPreview} />
  ) : //<div>No query</div>
  null,
);

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const StyledSearchBox = styled(SearchBox)`
  .ais-SearchBox-form {
    display: flex;
  }

  & input,
  button {
    border: none;
    padding: 1rem;
    outline: none;
  }
  .ais-SearchBox-reset {
    display: none;
  }
  & input {
    width: 100%;
  }
`;

const StyledHits = styled(Hits)`
  position: relative;
  & ul {
    min-width: 40rem;
    list-style: none;
    background: ${props => props.theme.colors.white};
    z-index: 4;
    position: absolute;
    top: 20px;
    left: 0;
  }
  & li {
    &:hover {
      background: ${props => props.theme.colors.lightgrey};
    }
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    & ul {
      border-top: 1px solid ${props => props.theme.colors.black};
      width: 100%;
      top: 0;
    }
  }
`;

export default function Search() {
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <StyledSearchBox
        translations={{
          submitTitle: 'Submit search query.',
          resetTitle: 'Clear search query.',
          placeholder: 'Search Products...',
        }}
      />
      <Results />
    </InstantSearch>
  );
}
