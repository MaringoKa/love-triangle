/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
     var totals = 0;
        for (var i = 0; i < preferences.length; i++) {

            var a = preferences[preferences[i]-1];
            var b = preferences[a-1];

            if ((a != i+1) && (b == i+1)){
                    totals++;
                    preferences[i] = 0;
            }
        }
    return totals;
};
