const express = require('express');
const router = require('../router');
const supertest = require('supertest');
const pool = require('../models/db');
const mock = require('./mock/mock');



describe('Integration tests', () => {
  const app = express();
  app.use(express.json());
  app.use(router);

  const request = supertest(app);

  let token = null;

  

  beforeAll(async () => {
    await pool.connect();
  })


  describe('Organization Routes', () => {

    it('should not login with incomplete fields', async () => {

      const post1 = await request.post("/login")
        .send(mock.loginWithoutPassword);
  
      expect(post1.status).not.toBe(200);

      const post2 = await request.post("/login")
      .send(mock.loginWithoutEmail);

      expect(post2.status).not.toBe(200);
    })


    it('should not login with wrong password', async () => {

      const post = await request.post("/login")
        .send(mock.loginWithWrongPassword);
  
      expect(post.status).not.toBe(200);
    })


    it('should login with correct login information', async () => {

      const post = await request.post("/login")
        .send(mock.mockLogin)

      isAuthorizationHeaderPresent = post.header['authorization'] !== undefined;
  
  
      expect(post.status).toBe(200);
      expect(isAuthorizationHeaderPresent).toEqual(true);

      token = post.header['authorization'];
    })


    it('should not get user information if not logged in', async () => {

      const get = await request.get("/user");
  
      expect(get.status).not.toBe(200);
    })


    it('should get user information if logged in', async () => {

      const get = await request.get("/user")
        .set('authorization', token);
  
      expect(get.status).toBe(200);
    })


    it('should not get user suggestions if not logged in', async () => {

      const get = await request.get("/suggestion");
  
      expect(get.status).not.toBe(200);
    })


    it('should get user suggestions if logged in', async () => {

      const get = await request.get("/suggestion")
        .set('authorization', token);
  
      expect(get.status).toBe(200);
    })
  })
})