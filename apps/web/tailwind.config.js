const sharedConfig = require("@aurora_ai/tailwind-config/tailwind.config");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  presets: [sharedConfig],
};
