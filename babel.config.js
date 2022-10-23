module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@pdcast/components": "./src/components",
            "@pdcast/containers": "./src/containers",
            "@pdcast/screens": "./src/screens",
            "@pdcast/lib": "./src/lib",
          },
        },
      ],
    ],
  };
};
