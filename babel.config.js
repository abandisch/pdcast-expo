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
            "@pdcast/hooks": "./src/hooks",
            "@pdcast/screens": "./src/screens",
            "@pdcast/lib": "./src/lib",
          },
        },
      ],
    ],
  };
};
