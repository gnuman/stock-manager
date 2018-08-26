import {
  AMOUNT_INPUT,
} from "../actions/index";

export const createAmountInput = whatInput => ({
  type: AMOUNT_INPUT,
  input: whatInput
});
