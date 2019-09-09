import 'mocha';
import { expect } from 'chai';
import {generateToken, verifyAuthHeader, verifyToken} from "../utils/auth.helper";

describe('Authentication Suite unit test', () => {


    describe("JWT utils", () => {
        it('should return token when generating token',  () => {
            const token = generateToken({username: "chris"});
            expect(token).to.be.a("string")
        });
        it('should return payload value when decoding token',  () => {
            const token = generateToken({username: "chris"});
            const decoded = verifyToken(token)
            expect(decoded.username).to.equal("chris");
        });
    });


    describe("Auth Header Verification", () => {

        it('Should return a null user when auth header is missing', () => {
            const {user} = verifyAuthHeader({});
            expect(user).to.be.null
        });

        it('Should return a null user when auth header is empty', () => {
            const {user} = verifyAuthHeader({authorization: ''});
            expect(user).to.be.null
        });

        it('Should return a null user when auth header token is malformed', () => {
            const {user} = verifyAuthHeader({authorization: 'Bearee secret token'});
            expect(user).to.be.null
        });

        it('Should return a null user when bearer token is empty', () => {
            const {user} = verifyAuthHeader({authorization: 'Bearer '});
            expect(user).to.be.null
        });

        it('Should return a null user when auth header token is invalid or expired', () => {
            const {user} = verifyAuthHeader({authorization: 'Bearer anExpiredOrInvalidToken'});
            expect(user).to.be.null
        });

        it('Should return a user when auth header token is valid', () => {
            const token = generateToken({username: "chris"});
            const {user} = verifyAuthHeader({authorization: `Bearer ${token}`});
            expect(user).to.not.be.null;
            expect(user.username).to.equal('chris')
        });
    })

});
