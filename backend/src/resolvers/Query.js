//const { getUserId } = require("../utils");

const Query = {
  users: async (parent, args, context, info) => {
    return context.db.query.users();
  },
  dataShareConsents: async (parent, args, context, info) => {
      return context.db.query.dataShareConsents();
  }
};

module.exports = {
  Query
};
