// javascript:window.open("https://freedium.cfd/"+encodeURIComponent(window.location))

import { getCurrentTabUrl } from "./helpers/utils.js";

export default {
  icon: "https://s2.googleusercontent.com/s2/favicons?domain=freedium.cfd",
  name: {
    en: "Read full medium article",
    vi: "Đọc bài viết medium full",
  },
  description: {
    en: "Read full medium article without login",
    vi: "Đọc bài viết medium full không cần đăng nhập",
  },

  // whiteList: ["https://medium.com/*"],

  onClickExtension: async () => {
    let url = await getCurrentTabUrl();
    url = prompt("Nhập link medium:", url);

    if (url) {
      window.open("https://freedium.cfd/" + url);
    }
  },
};
