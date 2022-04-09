const axios = require("axios").default;
<pre>{process.env.REACT_APP_TELEGRAM_BOT_TOKEN}</pre>;
export async function sendMessage(chat_id, text) {
  return await axios
    .post(
      `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: chat_id,
        text: text,
      }
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
