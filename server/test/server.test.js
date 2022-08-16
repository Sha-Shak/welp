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
        .send(mock.invalidLogin1);
  
      expect(post1.status).not.toBe(200);

      const post2 = await request.post("/login")
      .send(mock.invalidLogin2);

      expect(post2.status).not.toBe(200);
    })


    it('should not login with wrong password', async () => {

      const post = await request.post("/login")
        .send(mock.invalidLogin3);
  
      expect(post.status).not.toBe(200);
    })


    it('should login', async () => {

      const post = await request.post("/login")
        .send(mock.mockLogin)
  
  
      expect(post.status).toBe(200);
    })
  })
})