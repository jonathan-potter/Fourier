describe("Vector", function () {
    describe("bisect", function () {
        it("splits a vector", function () {
            var length, result, vector;

            _.times(5, function () {
                length = JP.MathStuff.randomIntegerBelow(100);
                length = length - (length % 2);
                vector = JP.MathStuff.vectorOfLength(length);
                result = JP.Vector.bisect(vector);

                expect(result.left.length).toEqual(length / 2);
                expect(result.right.length).toEqual(length / 2);
            });
        });
    });

    describe("equals", function () {
        var equals_1, equals_2, not_equals, not_even_the_same_length;

        beforeEach(function () {
                            equals_1 = [1,2,3,4,5];
                            equals_2 = [1,2,3,4,5];
                          not_equals = [2,3,4,5,6];
            not_even_the_same_length = [1,2,3,4];
        });

        it("returns true if vectors are equal", function () {
            expect(JP.Vector.equals(equals_1, equals_2)).toBe(true);
        });

        it("returns false if vectors are not equal", function () {
            expect(JP.Vector.equals(equals_1, not_equals)).toBe(false);
        });

        it("returns false if vectors are not the same length", function () {
            expect(JP.Vector.equals(equals_1, not_even_the_same_length)).toBe(false);
        });
    });

    describe("lengthenToRadix2", function () {
        it ("increases the length of a vector to a radix 2 number", function () {
            var checks, radix2number, resultVector, vector;

            checks = [
                {
                    number: 13,
                    answer: 16
                },
                {
                    number: 17,
                    answer: 32
                },
                {
                    number: 37,
                    answer: 64
                }
            ]

            _.each(checks, function (check) {
                vector = JP.MathStuff.vectorOfLength(check.number);

                resultVector = JP.Vector.lengthenToRadix2(vector)
                expect(resultVector.length).toEqual(check.answer);
            });
        });
    });

    describe("unzip", function () {
        it("unzips a vector", function () {
            var correctOutput, inputVector, outputVector;

            inputVector = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
            correctOutput = {
                 left: ["a", "c", "e", "g", "i", "k", "m", "o"],
                right: ["b", "d", "f", "h", "j", "l", "n", "p"]
            }

            outputVector = JP.Vector.unzip(inputVector);

            expect(outputVector).toEqual(correctOutput);
        });
    });
});