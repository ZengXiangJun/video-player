module.exports = function (css) {
  return Enhancer.CssVar ? Enhancer.CssVar.transform(css, 'video-player') : css;
}

