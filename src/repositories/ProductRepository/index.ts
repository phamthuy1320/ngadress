import axios from "axios";
import { ICategory } from "./types";
import { convertCategoriesListResponse } from "./converts";

export class ProductRepository {
  constructor() {}

  async categoriesList(): Promise<ICategory[]> {
    const response = await axios.get("/api/categories");
    return convertCategoriesListResponse(response.data);
  }

  async list() {
    const response = await axios.get("/api/products");
    return response.data;
  }
}
