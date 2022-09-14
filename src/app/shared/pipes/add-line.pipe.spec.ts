import { AddLinePipe } from './add-line.pipe';

describe('AddLinePipe', () => {
  const testCase = {
    text: 'Lorem ipsum dolor sit amet. consectetur adipiscing',
    expectedResult:
      'Lorem ipsum dolor sit amet<br /> <br /> consectetur adipiscing',
  };

  it(`should return ${testCase.expectedResult} for text ${testCase.text}}`, () => {
    const addLinePipe = new AddLinePipe();
    const result = addLinePipe.transform(testCase.text);
    expect(result).toBe(testCase.expectedResult);
  });
});
