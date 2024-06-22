import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()

// types are generated with the `type` method,
// followed by the name and fields.
const profile = g.type('Profile', {
  address: g.string()
})

// finally we export the default config
export default config({
  graph: g
})