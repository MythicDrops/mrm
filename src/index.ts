export const branches = [
  "+([0-9])?(.{+([0-9]),x}).x",
  "main",
  "next",
  "next-major",
  { name: "beta", prerelease: true },
  { name: "alpha", prerelease: true },
];

export const plugins = [
  "@semantic-release/commit-analyzer",
  "@semantic-release/release-notes-generator",
  ["@mythicdrops/semantic-release-sonatype", { extraPublishTasks: ["build"] }],
  [
    "@semantic-release/github",
    {
      assets: [
        {
          path: "**/build/libs/*.jar",
        },
        {
          path: "**/build/distributions/*.zip",
        },
      ],
    },
  ],
  [
    "@semantic-release/git",
    {
      assets: ["gradle.properties", "CHANGELOG.md"],
    },
  ],
];
