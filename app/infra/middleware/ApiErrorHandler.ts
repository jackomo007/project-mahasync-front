export async function handleApiCall<T>(apiCall: Promise<T>): Promise<T> {
  try {
    return await apiCall;
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
}
