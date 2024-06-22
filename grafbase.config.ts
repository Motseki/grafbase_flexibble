// import { g, config } from '@grafbase/sdk'

// // const g = schema.Standalone()

// const user = g.type('User', {
//   name: g.string(),
//   age: g.int().optional(),
//   email: g.string(),
//   avatarUrl: g.url(),
//   githubUrl: g.url().optional(),
//   linkedinUrl: g.url().optional()
// })

// const address = g.type('Address', {
//   street: g.string().optional()
// })

// g.union('UserOrAddress', { user, address })

// export default config({
//   schema: g
// })

import { g, config, auth } from '@grafbase/sdk';

// @ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
})

export default config({
     schema: g
 })
