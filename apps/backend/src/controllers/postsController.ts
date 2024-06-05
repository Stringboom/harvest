import { Request, Response } from "express";
import axios from "axios";

// Env
import { WORDPRESS_URL } from "../config/env";

// Services
import cacheService from "../services/cacheService";
import { fetchTranslations } from "../services/translationService";

// Types
import { WordpressPost } from "../types/WordpressPost";
import { SinglePost } from "../types/SinglePost";

// Helpers
import { cleanString } from "../helpers/cleanString";

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  const targetLang = req.body.lang || "en";
  const cacheKey = `processedData_${targetLang}`;
  const cachedData = cacheService.get(cacheKey);

  if (cachedData) {
    res.json(cachedData);
    return;
  }

  try {
    const response = await axios.get(WORDPRESS_URL);
    const rawData = response.data;

    let processedData: SinglePost[];

    if (targetLang === "en") {
      processedData = await Promise.all(
        rawData
          .filter((item: WordpressPost) => item.status === "publish")
          .map(async (item: WordpressPost) => ({
            id: item.id,
            title: await cleanString(item.title.rendered),
            content: await cleanString(item.content.rendered),
          }))
      );
    } else {
      processedData = await Promise.all(
        rawData
          .filter((item: WordpressPost) => item.status === "publish")
          .map(async (item: WordpressPost) => ({
            id: item.id,
            title: await fetchTranslations(
              await cleanString(item.title.rendered),
              targetLang
            ),
            content: await fetchTranslations(
              await cleanString(item.content.rendered),
              targetLang
            ),
          }))
      );
    }

    cacheService.set(cacheKey, processedData);
    res.json(processedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching or processing data");
  }
};

export const getPost = async (req: Request, res: Response): Promise<void> => {
  const postId = req.params.id;
  const targetLang = req.body.lang || "en";
  const cacheKey = `processedData_${targetLang}_${postId}`;
  const cachedData = cacheService.get(cacheKey);

  if (cachedData) {
    res.json(cachedData);
    return;
  }

  try {
    const response = await axios.get(`${WORDPRESS_URL}/${postId}`);
    const rawData = response.data;

    let processedData: SinglePost;

    if (targetLang === "en") {
      processedData = {
        id: rawData.id,
        title: await cleanString(rawData.title.rendered),
        content: await cleanString(rawData.content.rendered),
      };
    } else {
      processedData = {
        id: rawData.id,
        title: await fetchTranslations(
          await cleanString(rawData.title.rendered),
          targetLang
        ),
        content: await fetchTranslations(
          await cleanString(rawData.content.rendered),
          targetLang
        ),
      };
    }

    cacheService.set(cacheKey, processedData);
    res.json(processedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching or processing data");
  }
};
