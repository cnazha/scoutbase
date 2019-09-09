import supertest from "supertest";
import { expect } from "chai";

const url = `http://localhost:4000`;

const request = supertest(url);

describe("GraphQL application test", function() {
  it("should return data Status code for a working /GraphQL endpoint", done => {
    request
      .post("/graphql")
      .send({ query: "{ movies { title year  } }" })
      .end((err, res) => {
        // res will contain array of movies
        if (err) return done(err);
        const { data, errors } = res.body;

        // Should not have errors
        expect(errors).to.be.undefined;
        // Should have movies
        expect(data.movies).to.be.an("array").that.is.not.empty;

        const movie = data.movies[0];
        expect(movie).to.have.own.property("title");

        expect(movie.title)
          .to.be.a("string")
          .to.equal("Focus");

        expect(movie.year)
          .to.be.a("number")
          .to.equal(2015);

        done();
      });
  });

  it("should return auth error with null value for protected field", done => {
    request
      .post("/graphql")
      .send({ query: "{ movies { title year scoutbase_rating} }" })
      .end((err, res) => {
        if (err) return done(err);
        const { data, errors } = res.body;
        const movie = data.movies[0];

        // Should have error
        expect(errors).not.be.undefined;

        // Should have auth error
        expect(errors[0].message).to.equal("You are not authenticated!");

        // Protected field should return null
        expect(movie.scoutbase_rating).to.equal(null);

        done();
      });
  });

  it("should return value for protected field with token", done => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2NvdXRiYXNlIiwiaWQiOjEwLCJpYXQiOjE1Njc5NjQyMzEsImV4cCI6MTU2ODA1MDYzMX0.fva9BI9vmHlcMTnbgbhQZdkzdX8kqJYY35AD_zfePyA";
    request
      .post("/graphql")
      .set("Authorization", `Bearer ${token}`)
      .send({ query: "{ movies { title year scoutbase_rating} }" })
      .end((err, res) => {
        if (err) return done(err);
        const { data, errors } = res.body;
        const movie = data.movies[0];

        // Should have error
        expect(errors).be.undefined;

        // Protected field should return a value greater than 5
        expect(movie.scoutbase_rating).to.be
            .greaterThan(5)
            .lessThan(9);

        done();
      });
  });
});
