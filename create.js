const { execSync } = require("child_process");

const installDependencies = () => {
    const dependencies = [
        "@hookform/resolvers",
        "@react-navigation/bottom-tabs",
        "@react-navigation/drawer",
        "@react-navigation/native",
        "@react-navigation/native-stack",
        "@react-navigation/stack",
        "@tanstack/react-query",
        "axios",
        "husky",
        "nativewind",
        "phosphor-react-native",
        "plop",
        "react",
        "react-hook-form",
        "react-native",
        "react-native-bootsplash",
        "react-native-gesture-handler",
        "react-native-mmkv",
        "react-native-reanimated",
        "react-native-safe-area-context",
        "react-native-screens",
        "react-native-svg",
        "zod",
        "zustand",
    ];

    const devDependencies = [
        "@babel/core",
        "@babel/preset-env",
        "@babel/runtime",
        "@react-native-community/eslint-config",
        "@react-native/babel-preset",
        "@react-native/eslint-config",
        "@react-native/metro-config",
        "@react-native/typescript-config",
        "@testing-library/jest-native",
        "@testing-library/react-native",
        "@types/jest",
        "@types/react",
        "@types/react-test-renderer",
        "babel-jest",
        "babel-plugin-module-resolver",
        "eslint",
        "eslint-config-prettier",
        "eslint-plugin-import",
        "eslint-plugin-prettier",
        "jest",
        "prettier",
        "react-test-renderer",
        "reactotron-react-native",
        "tailwindcss",
        "typescript",
    ];

    console.log("\n");

    console.log("Installing dependencies... 🛠️\n");
    execSync(`yarn add ${dependencies.join(" ")}`, { stdio: "inherit" });
    console.log("Dependencies installed successfully. 🚀\n");

    console.log("Installing dev dependencies... 🛠️\n");
    execSync(`yarn add ${devDependencies.join(" ")} -D`, { stdio: "inherit" });
    console.log("Dev dependencies installed successfully.🚀\n");
};

const main = () => {
    execSync("git init", { stdio: "inherit" });
    installDependencies();
};

new Promise((resolve) => {
    main();
    resolve();
})
    .then(() => {
        console.log("- 🎉  Congrats! Your project is ready 🎉\n");

        console.log(
            "- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/gbrlcoelho/rn-boilerplate\n"
        );
    })
    .catch((error) => {
        console.error(`🚨 An error occurred with post init script: ${error}`);
        throw new Error();
    });
