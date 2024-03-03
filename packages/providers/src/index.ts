import { GoCardLessProvider } from "./gocardless/gocardless-provider";
import { TellerProvider } from "./teller/teller-provider";
import {
  GetAccountsParams,
  GetTransactionsParams,
  TransactionProviderParams,
} from "./types";

export class TransactionProvider {
  #provider;

  constructor({ provider }: TransactionProviderParams) {
    switch (provider) {
      case "gocardless":
        this.#provider = new GoCardLessProvider();
        break;
      case "teller":
        this.#provider = new TellerProvider();
        break;
      case "plaid":
        throw Error("Not implemented");

      default:
        throw Error("No provider selected");
    }
  }

  async getTransactions(params: GetTransactionsParams) {
    return this.#provider?.getTransactions(params);
  }

  async getAccounts(params: GetAccountsParams) {
    return this.#provider?.getAccounts(params);
  }
}
