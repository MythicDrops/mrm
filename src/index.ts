export const branches = ["main"];

export const plugins = [
  "@semantic-release/commit-analyzer",
  "@semantic-release/release-notes-generator",
  "@semantic-release/changelog",
  "@mythicdrops/semantic-release-sonatype",
  [
    "@semantic-release/github",
    {
      assets: [
        {
          path: "**/build/libs/*.jar",
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
