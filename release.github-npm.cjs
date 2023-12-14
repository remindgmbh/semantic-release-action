/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: [
        "main"
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/exec",
            {
                prepareCmd: "npm ci",
            }
        ],
        "@semantic-release/npm",
        "@semantic-release/github"
    ],
    preset: "conventionalcommits"
}