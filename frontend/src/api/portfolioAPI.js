import axios from "axios";

export const getPortfolioData = async () => {
  const res = await axios.get("/api/portfolio");
  return res.data;
};
