import { useContext } from "react";
import { RsiContext } from "../components/Providers";
import { RsiProps } from "../types";
import { MarkRequired } from "ts-essentials";
import { defaultRSIProps } from "../ReactSpreadsheetImport";
import { Translations } from "../translationsRSIProps";

export const useRsi = <T extends string>() =>
  useContext<
    MarkRequired<RsiProps<T>, keyof typeof defaultRSIProps> & {
      translations: Translations;
    }
  >(RsiContext);
