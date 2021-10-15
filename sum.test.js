// const sum = require('./sum')
// test('adds 1+2 to equal 3', () =>{
//     expect(sum(1,2)).toBe(3);
// })

// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });

// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//       for (let b = 1; b < 10; b++) {
//         expect(a + b).not.toBe(0);
//       }
//     }
// });
// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
//   });
  
//   test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
//   });
//   test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
//   });
  
//   test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
//   });
//   const shoppingList = [
//     'diapers',
//     'kleenex',
//     'trash bags',
//     'paper towels',
//     'milk',
//   ];
  
//   test('the shopping list has milk on it', () => {
//     expect(shoppingList).toContain('milk');
//     expect(new Set(shoppingList)).toContain('milk');
//   });
//   function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK');
//   }
  
//   test('compiling android goes as expected', () => {
//     expect(() => compileAndroidCode()).toThrow();
//     expect(() => compileAndroidCode()).toThrow(Error);
  
//     // You can also use the exact error message or a regexp
//     expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//     expect(() => compileAndroidCode()).toThrow(/JDK/);
//   });
//   //How to code with callbacks
// //   test('the data is peanut butter', done => {
// //     function callback(data) {
// //       try {
// //         expect(data).toBe('peanut butter');
// //         done();
// //       } catch (error) {
// //         done(error);
// //       }
// //     }
  
// //     fetchData(callback);
// //   });
// //How to code with promises
// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//       expect(data).toBe('peanut butter');
//     });
//   });
//   test('the fetch fails with an error', () => {
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e).toMatch('error'));
//   });
//   test('the data is peanut butter', () => {
//     return expect(fetchData()).resolves.toBe('peanut butter');
//   });
//   test('the fetch fails with an error', () => {
//     return expect(fetchData()).rejects.toMatch('error');
//   });
//   //How to code with Async/Await
//   test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
//   });
  
//   test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await fetchData();
//     } catch (e) {
//       expect(e).toMatch('error');
//     }
//   });
//   test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
//   });
  
//   test('the fetch fails with an error', async () => {
//     await expect(fetchData()).rejects.toMatch('error');
//   });
//   //before and after
//   beforeEach(() => {
//     initializeCityDatabase();
//   });
  
//   afterEach(() => {
//     clearCityDatabase();
//   });
  
//   test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
//   });
  
//   test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
//   });
//   beforeAll(() => {
//     return initializeCityDatabase();
//   });
  
//   afterAll(() => {
//     return clearCityDatabase();
//   });
  
//   test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
//   });
  
//   test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
//   });
//   // Applies to all tests in this file
// beforeEach(() => {
//     return initializeCityDatabase();
//   });
  
//   test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
//   });
  
//   test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
//   });
  
//   describe('matching cities to foods', () => {
//     // Applies only to tests in this describe block
//     beforeEach(() => {
//       return initializeFoodDatabase();
//     });
  
//     test('Vienna <3 veal', () => {
//       expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//     });
  
//     test('San Juan <3 plantains', () => {
//       expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//     });
//   });
const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true