import { showLoading } from "./helpers/utils.js";

export default {
  icon: "",
  name: {
    en: "Test",
    vi: "Test",
  },
  description: {
    en: "",
    vi: "",
  },

  onClickExtension: async () => {
    let url = prompt("Nhập link facebook bạn bè: ");
    if (url == null) return;

    let { setLoadingText, closeLoading } = showLoading("Đang chuẩn bị...");
    try {
      let { getUidFromUrl, getYourUserId, getFbdtsg, searchAllGroupForOther } =
        UsefulScriptGlobalPageContext.Facebook;

      setLoadingText("Đang lấy uid, token...");
      let other_uid = await getUidFromUrl(url);
      let uid = await getYourUserId();
      let dtsg = await getFbdtsg();

      setLoadingText("Đang tải thông tin group...");
      let allGroups = await searchAllGroupForOther(
        other_uid,
        uid,
        dtsg,
        (groups, all) => {
          setLoadingText(
            "Đang tải thông tin group...\nTải được " + all.length + " group."
          );
        }
      );
      console.log(allGroups);
    } catch (e) {
      alert("ERROR: " + e);
    } finally {
      closeLoading();
    }
  },
};