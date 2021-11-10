import Swal from "sweetalert2";
// const Swal = require("sweetalert2");
export const confirmAlert = (text) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `User ${text} Successfully`,
    showConfirmButton: false,
    timer: 1500,
  });
};
