/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: [
        { name: "develop", channel: "develop" }
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        [
            "@semantic-release/exec",
            {
                prepareCmd: "npm ci"
            }
        ],
        "@semantic-release/npm",
        [
            "@semantic-release/exec",
            {
                prepareCmd: "npm version --no-git-tag-version ${nextRelease.version}-${Date.now()}-${process.env.GITHUB_SHA_SHORT}",
            }
        ]
    ],
    preset: "conventionalcommits"
}