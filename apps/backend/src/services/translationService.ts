import axios from "axios";
import { TRANSLATION_SERVICE_URL } from "../config/env";

export const fetchTranslations = async (
  content: string,
  lang: string
): Promise<any> => {
  const response = await axios.post(TRANSLATION_SERVICE_URL, { content, lang });
  return response.data;
};
