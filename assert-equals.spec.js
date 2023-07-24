const assertEquals = require('./assert-equals.js')

describe('assertEquals', () => {
  describe('strings and numbers', () => {

    describe('when expected and actual are the same (type and content)', () => {
      it('returns without throwing an error for strings', () => {
        expect(() => assertEquals('abc', 'abc')).not.toThrow()
        expect(() => assertEquals('', '')).not.toThrow()
      })
      it('returns without throwing an error for numbers', () => {
        expect(() => assertEquals(1, 1)).not.toThrow()
        expect(() => assertEquals(-1, -1)).not.toThrow()
        expect(() => assertEquals(1/0,1/0)).not.toThrow()
      })
    })

    describe('when expected and actual are different (content)', () => {
      it('throws error with message for string', () => {
        expect(() => assertEquals('abcef', 'abc')).toThrow("Expected \"abcef\" but found \"abc\"")
        expect(() => assertEquals('', 'a')).toThrow("Expected \"\" but found \"a\"")
        expect(() => assertEquals("  Hello, world!   ", "Hello, world!")).toThrow("Expected \"  Hello, world!   \" but found \"Hello, world!\"")
      })  
      it('throws error with message for numbers', () => {
        expect(() => assertEquals(1, 2)).toThrow("Expected 1 but found 2")
      })  
    })

    describe('when expected and actual are different types', () => {
      it('throws error with message', () => {
        expect(() => assertEquals(1, "1")).toThrow("Expected type number but found type string")
        expect(() => assertEquals([1], "1")).toThrow("Expected type object but found type string")
        expect(() => assertEquals([1], 1)).toThrow("Expected type object but found type number")
        expect(() => assertEquals(["1"],"1")).toThrow("Expected type object but found type string")
        
      })  
    })
  })

  describe('arrays and objects', () => {

    describe('when expected and actual are the same array', () => {
      it('returns without throwing an error', () => {
        expect(() => assertEquals(['a', 'b', 'c'],['a', 'b', 'c'])).not.toThrow()
        expect(() => assertEquals([1, 2, 3],[1, 2, 3])).not.toThrow()
      })
    })

    describe('when expected and actual are arrays of different length', () => {
      it('throws error with message', () => {
        expect(() => assertEquals(['a', 'b'], ['a', 'b', 'c'])).toThrow('Expected array length 2 but found 3')
      })  
    })

    describe('when expected and actual are arrays of different content', () => {
      it('throws error with message', () => {
        expect(() => assertEquals(['a', 'b'], ['a', 'd'])).toThrow('Expected \"b\" but found \"d\"')
        expect(() => assertEquals([1, 2], [1, 3])).toThrow('Expected \"2\" but found \"3\"')
      })  
    })
  })

  describe('empty, null and undefined values', () => {

    describe('when there are nulls or undefined values', () => {
      it('returns without throwing an error for null values', () => {
        expect(() => assertEquals(null, null)).not.toThrow();
      });
      it('returns without throwing an error for undefined values', () => {
        expect(() => assertEquals(undefined, undefined)).not.toThrow();
      });
      it('throws error with message for different types (null vs. undefined)', () => {
        expect(() => assertEquals(null, undefined)).toThrow('Expected type object but found type undefined');
        expect(() => assertEquals(undefined, null)).toThrow('Expected type undefined but found type object');
      });
    });

    describe('when there are empty strings, arrays or objects', ()=> {
      it('returns without throwing an error for empty arrays', () => {
        expect(() => assertEquals([], [])).not.toThrow();
      });

      it('returns without throwing an error for empty objects', () => {
        expect(() => assertEquals({}, {})).not.toThrow();
      });

      it('throws error with message for different types (array vs. object vs. string)', () => {
        expect(() => assertEquals([], {})).toThrow('Expected object but found array');
        expect(() => assertEquals({}, [])).toThrow('Expected array but found object');
        expect(() => assertEquals([], "")).toThrow('Expected type object but found type string');
        expect(() => assertEquals("", [])).toThrow('Expected type string but found type object');
      });
    })

  });
});