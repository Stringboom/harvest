import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const CACHE_TTL = parseInt(process.env.CACHE_TTL || "60", 10);
export const WORDPRESS_URL = process.env.WORDPRESS_URL || "";
export const TRANSLATION_SERVICE_URL =
  process.env.TRANSLATION_SERVICE_URL || "";
