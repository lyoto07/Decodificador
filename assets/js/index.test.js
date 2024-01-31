import { criptografar, descriptografar } from './index.js';

test('Criptografar "gato" para ser igual a "gaitober"', () => {
  expect(criptografar('gato')).toBe('gaitober');
});

test('Descriptografar "gaitober" para ser igual a "gato"', () => {
    expect(descriptografar('gaitober')).toBe('gato');
});

test('Criptografar "eu e voce" para ser igual a "enterufat enter vobercenter"', () => {
  expect(criptografar('eu e voce')).toBe('enterufat enter vobercenter');
});

test('Descriptografar "enterufat enter vobercenter" para ser igual a "eu e voce"', () => {
  expect(descriptografar('enterufat enter vobercenter')).toBe('eu e voce');
});

test('Criptografar "eu e você" deve retornar uma mensagem de erro', () => {
  const entradaInvalida = 'eu e você';
  expect(() => criptografar(entradaInvalida)).toThrowError('O texto inserido não é válido');

});

test('Descriptografar "é" deve lançar uma exceção', () => {
  const entradaInvalida = 'é';
  expect(() => descriptografar(entradaInvalida)).toThrowError('O texto inserido não é válido');
});

