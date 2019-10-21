# GraphQL With Apollo

An Apollo server is easy to get up and running with.

1. Run `npm i apollo-server` in the terminal.
2. Import `ApolloServer` from _apollo-server_.
    * ApolloServer is a constructor, so use it to create a new server:
    * `const server = new ApolloServer()`
    * _ApolloServer_ requires an object parameter with `typeDefs` and `resolvers` as keys.

**typeDefs** utlizes the `gql` _tagged template literal_ to parse out the data and return an object. 

* `gql`'s template string should include types of data, which will become the schema.

**resolvers** are like endpoints which describe the data to send back to certain queries.