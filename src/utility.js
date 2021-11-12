import Swal from "sweetalert2";
// const Swal = require("sweetalert2");
export const confirmAlert = (text) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: ` ${text} Successfully`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const errorAlert = (text) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: ` ${text} `,
    showConfirmButton: false,
    timer: 1500,
  });
};