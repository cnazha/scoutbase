import supertest from 'supertest'
import {expect} from 'chai';

const url = `http://localhost:4000`;

const request = supertest(url);


describe('GraphQL application test', function () {

    it('should return data Status code for a working /GraphQL endpoint', (done) => {
        request.post('/graphql')
            .send({query: '{ movies { title year  } }'})
            .end((err, res) => {
                // res will contain array of movies
                if (err) return done(err);
                const {data} = res.body;
                expect(data.movies)
                    .to.be.an('array')
                    .that.is.not.empty;

                const movie = data.movies[0];
                expect(movie)
                    .to.have.own.property('title')

                expect(movie.title)
                    .to.be.a('string')
                    .to.equal("Focus");

                expect(movie.year)
                    .to.be.a('number')
                    .to.equal(2015);

                done();
            })
    })

    it('should return auth error with null value for protected field', (done) => {
        request.post('/graphql')
            .send({query: '{ movies { title year scoutbase_rating} }'})
            .end((err, res) => {
                if (err) return done(err);
                const {data} = res.body;
                const movie = data.movies[0];

                // Should have auth error
                expect(res.body.errors[0].message)
                    .to.equal("You are not authenticated!");

                // Protected field should
                expect(movie.scoutbase_rating)
                    .to.equal(null);

                done();
            })
    })

});

