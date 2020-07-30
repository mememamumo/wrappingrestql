import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";


const server = new GraphQLServer({
	typeDefs: "graphql/schema.graphql",
	resolvers,
	introspections: true,
	playground: true
});

// server.start({ port: 7000 },() => console.log("🤡Graphql Server Running"));

server.listen({ port: process.env.PORT || 7000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});