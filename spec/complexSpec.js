describe("Complex", function () {
    describe("equals", function () {
        var equal1, equal2, notEqual;

        beforeEach(function () {
            equal1   = {real: 1.2345, imaginary: 6.7890};
            equal2   = {real: 1.2345, imaginary: 6.7890};
            notEqual = {real: 1, imaginary: 0};
        });

        it("returns true for complex numbers that are equal", function () {
            expect(JP.Complex.equals(equal1, equal2)).toBe(true);
        });

        it("returns false for complex numbers that are not equal", function () {
            expect(JP.Complex.equals(equal1, notEqual)).toBe(false);
        });
    });

    describe("addition", function () {
        var number1, number2;

        beforeEach(function () {
            number1 = {real: 1.23, imaginary: 7.89};
            number2 = {real: 6.54, imaginary: 2.10};
        });

        it("adds two complex numbers", function () {
            var rightAnswer, answer;

            rightAnswer = {real: 7.77, imaginary: 9.99};
            answer      = JP.Complex.addition(number1, number2);

            expect(JP.Complex.equals(answer, rightAnswer)).toBe(true);
        });
    });

    describe("multiply", function () {
        var number1, number2;

        beforeEach(function () {
            number1 = {real:  2, imaginary:  2};
            number2 = {real: -2, imaginary: -2};
        });

        it("adds two complex numbers", function () {
            var rightAnswer, answer;

            rightAnswer = {real: 0, imaginary: -8};
            answer      = JP.Complex.multiply(number1, number2);

            expect(JP.Complex.equals(answer, rightAnswer)).toBe(true);
        });
    });
});