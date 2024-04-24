import axios, { AxiosError } from "axios";

const API_URL = "https://legendary-zebra-44wvr9vv49rc574j-3000.app.github.dev/api";

// export const getWeatherData = async (city: string): Promise<WeatherData> => {
//   return new Promise<WeatherData>((resolve, reject) => {
//     axios
//       .get(`${API_URL}/weather/${city}`)
//       .then((res) => {
//         resolve({
//           city: city,
//           temperature: res.data.temperature,
//           humidity: res.data.humidity,
//           wind: res.data.wind,
//           rain: res.data.rain,
//         });
//       })
//       .catch((error) => {
//         if (axios.isAxiosError(error)) {
//           const axiosError = error as AxiosError;
//           if (axiosError.response?.status === 404) {
//             reject("City not found");
//           } else {
//             // It's a good practice to reject with an Error object
//             reject(axiosError.message);
//           }
//         } else {
//           // Handle non-Axios errors
//           reject("An unknown error occurred");
//         }
//       });
//   });
// };



export const getpropertyData = async (property: string): Promise<propertyData> => {
  return new Promise<propertyData>((resolve, reject) => {
    axios
      .get(`${API_URL}/property/${property}`)
      .then((res) => {
        resolve({
          type: res.data.type,
          buyingprice: res.data.buyingprice,
          sellingprice: res.data.sellingprice,
          rentprice: res.data.rentprice,
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("property not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
