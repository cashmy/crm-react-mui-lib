import { RuleConfigSeverity } from "@commitlint/types";

const Configuration = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "subject-case": [
      RuleConfigSeverity.Error,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
};

export default Configuration;
