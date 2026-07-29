module.exports = {
  // cjsBabelEnv: { targets: { node: 16 } },
  // esmBabelEnv: { targets: { node: 16 } },
  outputCjs: false, // disables CJS output (default: true)
  outputEsm: false, // disables ESM output (default: true)
  buildIgnore: [],
  hasTypeScriptSources: true,
  // esWrapper: true, // outputs ES module wrappers for CJS modules (default: false)
  // sourceMaps: false, // default is true (outputs .map files, also accepts 'inline' or 'both')
  scripts: {
    prerelease: {
      description: 'push manifest to ECR before release',
      run: async () => {
        const { ecrDeployer } = await import('./scripts/ecrDeployer.ts')
        await ecrDeployer.pushManifest()
      },
    },
  },
}
