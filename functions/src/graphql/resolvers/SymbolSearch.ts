import SymbolSearchResult from "../../models/SymbolSearchResult.model";
import axios from "axios";

const symbolSearch = async (root: any, args: any, ctx: any): Promise<SymbolSearchResult[]> => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${args.keyword}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`;
  const method = 'get';
  const response = await axios({url, method});
  const results: SymbolSearchResult[] = [];
  if (response.data && response.data.bestMatches) {
    for (const searchResult of response.data.bestMatches) {
      results.push(new SymbolSearchResult(searchResult['1. symbol'], searchResult['2. name']))
    }
  }
  return results;
};

export default symbolSearch;

