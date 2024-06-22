import { g, config } from '@grafbase/sdk'

// const g = schema.Standalone()

const user = g.type('User', {
  name: g.string(),
  age: g.int().optional(),
  email: g.string(),
  avatarUrl: g.url(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional()
})

const address = g.type('Address', {
  street: g.string().optional()
})

g.union('UserOrAddress', { user, address })

export default config({
  schema: g
})
