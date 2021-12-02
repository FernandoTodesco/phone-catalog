import { request } from "../api/client";

export async function getPhones() {
  try {
    const response = await request("GET", "/phones");
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
