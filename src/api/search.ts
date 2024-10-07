import { IPagination } from "@src/interfaces/Pagination.interface";
import { IProduct } from "@src/interfaces/Product.interface";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const suggestionRequest = async (text: string) => {
  const res = await axiosInstance.get("/search/suggestion", {
    params: {
      prefix: text,
      index_name: "amazon-store",
    },
  });

  return res.data;
};

export const searchItem = async (
  text: string
): Promise<{
  data: IProduct[];
  pagination: IPagination;
}> => {
  const res: { data: { data: IProduct[]; pagination: IPagination } } =
    await axiosInstance.get("/search", {
      params: {
        index: "amazon-store-search",
        query: text,
        to: 10,
        from: 0,
      },
    });

  return res.data;
};
