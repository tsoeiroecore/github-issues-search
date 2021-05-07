process.env.DEBUG = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../../app.js');
const conn = require('../../config/mongoose.js');
const constants = require('../../config/constants');
const nock = require('nock')
const { issuesFixture } = require('../mocks/issues.fixture')
const { noIssuesFixture } = require('../mocks/noissues.fixture')
chai.use(chaiHttp);

describe('API request tests', () => {

  before(function (done) {
    conn.open().then(() => done()).catch(done);
  });

  after(function (done) {
    conn.close().then(() => done()).catch(done);
  });

  it('GET: Should sucessfully return list of issues based on search string', (done) => {
    nock(constants.GITHUB_URL)
      .get('/search/issues')
      .query(true)
      .reply(200, issuesFixture)
    let searchText = 'open';
    chai.request(app).get(`/issues?search=${searchText}`)
      .then((res) => {
        const body = res.body;
        expect(res.status).to.equal(200);
        expect(body.items > 0);
        done();
      })
      .catch(function (err) {
        console.log(err);
        done(err)
      })
  });

  it('GET: Should return empty list of issues if search string not found', (done) => {
    nock(constants.GITHUB_URL)
      .get('/search/issues')
      .query(true)
      .reply(200, noIssuesFixture)
    let searchText = 'anyquerystring';
    chai.request(app).get(`/issues?search=${searchText}`)
      .then((res) => {
        const body = res.body;
        expect(res.status).to.equal(200);
        expect(!body.items);
        done();
      })
      .catch(function (err) {
        console.log(err);
        done(err)
      })
  });

  it('GET: Should throw an error with invalid filter', (done) => {
    chai.request(app).get('/issues')
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res).to.have.property('text');
        expect(res.text).to.have.string('Search filter is required.');
        done();
      })
      .catch((err) => done(err));
  });

  it('GET: Should throw an error if the service is down', (done) => {
    let searchText = 'help';
    nock(constants.GITHUB_URL)
      .get('/search/issues')
      .query(true)
      .reply(500)
    chai.request(app).get(`/issues?search=${searchText}`)
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res).to.have.property('text');
        expect(res.text).to.have.string('Something went wrong getting issues');
        done();
      })
      .catch((err) => done(err));
  });

  it('GET: Should sucessfully return list of issues if service down, but result is cached', (done) => {
    let searchText = 'open';
    nock(constants.GITHUB_URL)
      .get('/search/issues')
      .query(true)
      .reply(500)
    chai.request(app).get(`/issues?search=${searchText}`)
      .then((res) => {
        const body = res.body;
        expect(res.status).to.equal(200);
        expect(body.items > 0);
        done();
      })
      .catch((err) => done(err));
  });
})


