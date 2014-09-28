describe("Matrix", function () {
    describe("complexEquals", function () {
        var equal_1, equal_2, not_equal;

        beforeEach(function () {
            equal_1 = [
                [{real: 1, imaginary: 2}, {real: 3, imaginary: 4}],
                [{real: 5, imaginary: 6}, {real: 7, imaginary: 8}]
            ];

            equal_2 = [
                [{real: 1, imaginary: 2}, {real: 3, imaginary: 4}],
                [{real: 5, imaginary: 6}, {real: 7, imaginary: 8}]
            ];

            not_equal = [
                [{real: 9, imaginary: 9}, {real: 9, imaginary: 9}],
                [{real: 9, imaginary: 9}, {real: 9, imaginary: 9}]
            ];
        });

        it("returns true when passed two equivalent complex matricies", function () {
            expect(JP.Matrix.complexEquals(equal_1, equal_2)).toBe(true);
        });

        it("returns false when passed two different complex matricies", function () {
            expect(JP.Matrix.complexEquals(equal_1, not_equal)).toBe(false);
        });
    });
});