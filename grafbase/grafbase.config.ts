import {config, graph } from '@grafbase/sdk'

const g = graph.Standalone()

const user = g.type('User', {
  name: g.string().optional(),
  email: g.string().optional(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
  
})


const Project = g.type('Project', {
  title: g.string(),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(), 
  githubUrl: g.url(), 
  category: g.string().optional(),
})

export default config({ graph: g })
