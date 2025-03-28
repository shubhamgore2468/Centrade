import axios from "axios";

async function getMarketData() {
  try {
    const response = await axios.get(
      "https://api.backpack.exchange/api/v1/markets"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching market data:", error);
  }
}

getMarketData();
