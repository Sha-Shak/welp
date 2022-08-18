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

  let user1 = null;
  let user2 = null;

  let token = null;

  

  beforeAll(async () => {
    await pool.connect();
    await pool.query('DELETE FROM users WHERE email = $1 OR email = $2;', [mock.newOrganizationAdmin.email, mock.newUser.email]);

    const newUserRes = await request.post("/organization/create")
      .send(mock.newOrganizationAdmin);

    user1 = newUserRes.body;
  })


  describe('User Routes', () => {

    describe ('Login Route', () => {
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
        user1 = post.body;
      })
    })



    describe ('User profile routes', () => {
      it('should not get user information if not logged in', async () => {
  
        const get = await request.get("/user");
    
        expect(get.status).not.toBe(200);
      })
  
  
      it('should get user information if logged in', async () => {
  
        const get = await request.get("/user")
          .set('authorization', token);
    
        expect(get.status).toBe(200);
      })



      it('should get other user information if logged in', async () => {

        const newUserRes = await request.post('/organization/users')
          .set('authorization', token)
          .send(mock.newUser);

        user2 = newUserRes.body;

  
        const get = await request.get(`/user/${user2.id}`)
          .set('authorization', token);

    
        expect(get.status).toBe(200);
      })


      it('should not get other user information if not logged in', async () => {

        const get = await request.get(`/user/${user2.id}`)

        expect(get.status).not.toBe(200);
      })
    })


    describe ('Edit profile routes', () => {
      
      it("should not edit a user's profile without being logged in", async () => {

        const newUserInfo = {...user1, ...mock.editUserFields};

        const post = await request.put('/user')
          .send(newUserInfo);

        expect(post.status).not.toBe(200);

      })


      it("should not edit a user's profile with missing information", async () => {

        const incompleteInfo = {...mock.editUserFields};

        const post = await request.put('/user')
          .set('authorization', token)
          .send(incompleteInfo);

        expect(post.status).not.toBe(200);
      })


      it("should edit a user's profile with correct information", async () => {

        const newUserInfo = {...user1, ...mock.editUserFields};

        const post = await request.put('/user')
          .set('authorization', token)
          .send(newUserInfo);

        expect(post.status).toBe(200);
      })
    })
  })
})