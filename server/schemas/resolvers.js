const { User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth.js')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
        if (context.user) {
            return await User.findOne({ _id: context.user._id })
        }

        throw new AuthenticationError('User not logged in.')
        },
    },
    
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password })
        const token = signToken(user)
        return { token, user }
        },
        login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
    
        if (!user) {
            throw new AuthenticationError('No email with this User');
        }
    
        const correctPw = await user.isCorrectPassword(password);
    
        if (!correctPw) {
            throw new AuthenticationError('The Password is wrong!');
        }
    
        const token = signToken(user);

        return { token, user };
        },
    
        // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
        saveBook: async (parent, { books }, context) => {
        if (context.user) {
            const UserUpdated = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: books } },
            { new: true, runValidators: true }
            );
    
            return UserUpdated;
        }
    
        throw new AuthenticationError('You are not logged in!');
        },
    
        // remove a book from `savedBooks`
        removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
            const UserUpdated = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
            );
    
            return UserUpdated;
        }
    
        throw new AuthenticationError('You are not logged in!');
        },
    },
    };

module.exports = resolvers;