import { ECRDeployer } from '@jcoreio/aws-ecr-utils'
import { fileURLToPath } from 'url'

export const ecrDeployer = new ECRDeployer({
  repositoryName: 'jcore/allas',
  build: {
    path: fileURLToPath(import.meta.resolve('..')),
    args: ['--platform', 'linux/amd64,linux/arm64'],
  },
})
