window.onload = function () {
  document.documentElement.style.fontSize =
    Math.max(
      document.body.clientWidth,
      document.documentElement.clientWidth,
      window.screen.availWidth
    ) / 7.5 + 'px'
}
