import { verifyAuthHeader } from "../utils/auth.helper";

const context = ({ req }) => verifyAuthHeader(req.headers);

export default context;
