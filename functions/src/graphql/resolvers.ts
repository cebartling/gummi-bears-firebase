import symbolSearch from './resolvers/SymbolSearch';

const resolverFunctions = {
  Query: {
    hello: () => 'world',
    symbolSearch
  }
};

export default resolverFunctions;
