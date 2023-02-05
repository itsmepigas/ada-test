require('dotenv/config');

const request = require('supertest');
const server = require('../src/server');

let token = null;
let card = null;

describe('SignUp Success', () => {
  it('Success - must be able to signup returning a token', async () => {
    const response = await request(server).post('/signup').send({
      name: "ADA.TECH",
      user: 'letscode',
      pass: 'lets@123',
    });

    expect(response.body).toHaveProperty('token');
  });
});

describe('SignUp Error', () => {
  it('Error - It should return an error due to missing information', async () => {
    const response = await request(server).post('/signup').send({
      name: "ADA.TECH",
    });

    console.log('Response --> ', response?.body?.error)

    expect(response.body).toHaveProperty('error');
  });
});

describe('SignIn Success', () => {
  it('Success - must be able to sign in returning a token', async () => {
    const response = await request(server).post('/signin').send({
      user: 'letscode',
      pass: 'lets@123',
    });

    if (response?.body?.token)
      token = response?.body?.token;

    expect(response.body).toHaveProperty('token');
  });
});

describe('SignIn Error', () => {
  it('Error - Should return an error due to authentication failure', async () => {
    const response = await request(server).post('/signup').send({
      user: "ADA.TECH",
    });

    console.log('Response --> ', response?.body?.error)

    expect(response.body).toHaveProperty('error');
  });
});

describe('Create Card Success', () => {
  it('Success - must be able to create a card', async () => {

    const response = await request(server)
    .post('/cards')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Card Test',
      description: 'Card Exemplo',
    });

    if (response?.body?.cards?.lenght > 0) card = response?.body?.cards?.[0]?.id;

    expect(response.body).toHaveProperty('cards');
  });
});

describe('Create Card Error', () => {
  it('Error - It should return an error due to missing information', async () => {
    const response = await request(server)
    .post('/cards')
    .set('Authorization', `Bearer ${token}`)
    .send({});

    console.log('Response --> ', response?.body?.error)

    expect(response.body).toHaveProperty('error');
  });
});

describe('Read Cards Success', () => {
  it('Success - must be able to list cards', async () => {
    const response = await request(server)
    .get('/cards')
    .set('Authorization', `Bearer ${token}`);

    expect(response.body).toHaveProperty('cards');
  });
});

describe('Read Cards Error', () => {
  it('Error - It should return an error due to missing authentication', async () => {
    const response = await request(server).get('/cards');

    console.log('Response --> ', response?.body?.error)

    expect(response.body).toHaveProperty('error');
  });
});

describe('update Card Success', () => {
  it('Success - must be able to update a card', async () => {
    const response = await request(server)
    .put(`/cards/${card}`)
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Updated Card Test',
      description: 'Card Exemplo',
    });

    expect(response.body).toHaveProperty('cards');
  });
});

describe('Update Card Error', () => {
  it('Error - It should return an error due to missing authentication', async () => {
    const response = await request(server)
    .put(`/cards/${card}`)
    .send({
      title: 'Updated Card Test',
      description: 'Card Exemplo',
    });

    console.log('Response --> ', response?.body?.error)

    expect(response.body).toHaveProperty('error');
  });
});

describe('Delete Card Success', () => {
  it('Success - must be able to delete a card', async () => {
    const response = await request(server)
    .delete(`/cards/${card}`)
    .set('Authorization', `Bearer ${token}`);


    expect(response.body).toHaveProperty('cards');
  });
});

describe('Delete Card Error', () => {
  it('Error - It should return an error due to missing authentication', async () => {
    const response = await request(server)
    .delete(`/cards/${card}`)
    .send({
      title: 'Updated Card Test',
      description: 'Card Exemplo',
    });

    console.log('Response --> ', response?.body?.error)

    expect(response.body).toHaveProperty('error');
  });
});