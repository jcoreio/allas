import { ECRDeployer } from '@jcoreio/aws-ecr-utils'
import { fileURLToPath } from 'url'

export const ecrDeployer = new ECRDeployer({
  repositoryName: 'jcore/allas',
  architectures: ['amd64', 'arm64'],
  build: {
    path: fileURLToPath(import.meta.resolve('..')),
  },
})
