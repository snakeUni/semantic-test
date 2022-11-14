module.exports = {
  branches: [
    { name: 'main', channel: 'latest' },
    {
      name: 'qa/latest',
      channel: 'canary',
      prerelease: 'beta'
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'yarn build'
      }
    ],
    '@semantic-release/git'
  ]
}
