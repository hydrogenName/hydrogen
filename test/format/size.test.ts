import { formatSize } from '../../src/format/size'

describe('formatSize function test', () => {
  test('参数0', () => {
    expect(formatSize(0)).toBe('0 B')
  })
  test('formatSize function', () => {
    // const mockFun = jest.fn();
    // mockFun.mockReturnValue('1000 B')
    expect(formatSize(1000)).toBe('1000 B')
    expect(formatSize(10000)).toBe('9.77 KB')
  })
})
