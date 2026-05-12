// Ye function server par chalega, isliye Google Sheet URL safe rahega.
exports.handler = async function(event, context) {
  const API_URL = process.env.GOOGLE_SHEET_URL; 

  try {
    if (event.httpMethod === "POST") {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: event.body
      });
      const data = await response.json();
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    
    if (event.httpMethod === "GET") {
      const response = await fetch(API_URL);
      const data = await response.json();
      return { statusCode: 200, body: JSON.stringify(data) };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server Error' }) };
  }
};