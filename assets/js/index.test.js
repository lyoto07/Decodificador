const { criptografar, descriptografar } = require('./index').default;

test('Criptografar gato para ser igual a gaitober', () => {
  expect(criptografar('gato')).toBe('gaitober');
});

test('Descriptografar gaitober para ser igual a gato', () => {
    expect(descriptografar('gaitober')).toBe('gato');
});