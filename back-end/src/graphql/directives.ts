import { SchemaDirectiveVisitor } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";

class isAuthUserDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...args) {
      const { user } = args[2];
      if (!user) {
        throw new Error("You are not authenticated!");
      }

      return resolve.apply(this, args);
    };
  }
}
const schemaDirectives = {
  isAuth: isAuthUserDirective
};

export default schemaDirectives;
