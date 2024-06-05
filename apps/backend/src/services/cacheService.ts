import NodeCache from "node-cache";
import { CACHE_TTL } from "../config/env";

class CacheService {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache({ stdTTL: CACHE_TTL });
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }
}

export default new CacheService();
