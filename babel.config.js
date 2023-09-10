module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};

// module.exports = {
//   resolver: {
//     sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs"],
//     assetExts: ["glb", "gltf", "png", "jpg"],
//   },
// };
