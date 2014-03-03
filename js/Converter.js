
var Converter = (function () {
    // private stuff goes here

    return {
        convertFromImperialToMetric: function (weight) {
            if (isNaN(parseFloat(weight))) {
                return "Not a Number";
            };
            var answer = weight / 2.2;
            return answer;
         
                
        },

        convertFromMetricToImperial: function (weight) {
            if (isNaN(parseFloat(weight))) {
                return "Not a Number";
            };
            var answer = weight * 2.2;
            return answer;
        }
    }

})();

