import $ from "jquery";

$.fn.hoverSlippery = function () {
  $(this).hover(
    function () {
      $(this).css({ transform: "translateX(10px)" });
    },
    function () {
      $(this).css({ transform: "translateX(0)" });
    }
  );
};
