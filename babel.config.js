module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            $Components: "./src/components",
            $Containers: "./src/containers",
            $Contexts: "./src/contexts",
            $Constants: "./src/constants",
            $Domain: "./src/domain",
            $Lib: "./src/lib",
            $Modules: "./src/modules",
            $Models: "./src/domain/models",
            $Repositories: "./src/domain/repositories",
            $Selectors: "./src/selectors",
            $Usecases: "./src/usecases",
            $Types: "./src/@types",
          },
        },
      ],
    ],
  };
};
