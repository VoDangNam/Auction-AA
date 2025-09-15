import axios from "axios";

export default function (from, to, next) {
  axios
    .get("http://127.0.0.1:8000/api/", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("")
      }
    })
    .then((res) => {
      if (res.data.status) {
        next();
        // localStorage.setItem("name_kh", res.data.name);
        // localStorage.setItem("email_kh", res.data.email);
        // localStorage.setItem("check_kh", res.data.status);
      } else {
        next("/client/dang-nhap");
        // this.$toast.error("Bạn cần đăng nhập trước!!!!");

      }
    });
}
