const PersonResolver = require('./PersonResolvers');
const BlogResolver = require('./BlogResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query:{
        ...PersonResolver.Query,
        ...BlogResolver.Query,
    },
    Mutation:{
        ...PersonResolver.Mutation,
        ...BlogResolver.Mutation
    }
};
