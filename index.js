const { ApolloServer, gql } = require('apollo-server')

// Dummy Data:
const listings = [
  { id: '001', title: 'Large Ensuite Condo', city: 'Toronto' },
  { id: '002', title: 'Beverly Hills Mansion', city: 'Los Angeles' },
  { id: '003', title: 'Small Chic Bedroom', city: 'Dubai' }
]

// gql is a _TAGGED TEMPLATE LITERAL_!
// A tagged template literal allows you to parse a string using a function.
// See taggedTemplateLiteral.js for detailed exmample

// TypeDefs is our Schema.
const typeDefs = gql`
  type Listing {
    id: String!
    title: String!
    city: String!
  }
  type Query {
    listings: [Listing!]!
  }
`

// Resolvers are like our endpoints - they describe which data to give which request
const resolvers = {
  Query: {
    listings: () => listings
  }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen(1337).then(({ url }) => console.log(`Server running at ${url}`))