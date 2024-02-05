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
                prepareCmd: "npm version --no-git-tag-version ${nextRelease.version}-${nextRelease.channel ?? process.env.GITHUB_REF_NAME}-${Date.now()}-${process.env.GITHUB_SHA_SHORT}",
                // semantic-release always creates a tag, so it will be deleted afterwards
                successCmd: "git push origin :refs/tags/${nextRelease.gitTag}",
                failCmd: "git push origin :refs/tags/${nextRelease.gitTag}"
            }
        ]
    ],
    preset: "conventionalcommits"
}