const BASE_API_URL = "http://localhost:5000/api/";

const apiurls = {
  Allbooks: `${BASE_API_URL}`,
  books: (id) => `${BASE_API_URL}/${id}`,
};



export default apiurls;
