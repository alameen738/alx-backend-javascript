// getResponseFromAPI.js

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    try {
      resolve({ status: 200, body: 'Success' });
    } catch (error) {
      reject(error);
    }
  });
}
