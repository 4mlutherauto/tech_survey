
module.exports = {

    yearly_wage_calculator: (value) => {
        return (value * 52);
    },
    current_under_hood_calculator: (value1, value2) => {
        return Math.round(value1 * value2);
    },
    potential_under_hood_calculator: (value1) => {
        return Math.round(value1 * .9);
    },
    dollars_under_hood_calculator: (value1, value2, value3) => {
        return Math.round((100 * value1) / (value2 * value3)) / 100;
    },
    potential_dollars_under_hood_calculator: (ranking, hours) => {
        const uhhours = Math.round((100 * hours) * .9 / 100);
        const weeklyearnings = Math.round(100 * ranking * (uhhours) / 100);
        return Math.round(weeklyearnings / uhhours);
    },
    difference_under_hood_calculator: (value1, value2, value3) => {
        return (value3 * .9) - (value1 * value2);
        // if (difference > 0) {
        //   return difference;
        //  }
    },
    potential_weekly_earnings_calculator: (value1, value2) => {
        const earnings = Math.round(100 * value1 * (value2 * .9) / 100);
        return (earnings).toLocaleString();
    },
    potential_yearly_earnings_calculator: (value1, value2) => {
        const yearlysalary = Math.round(100 * value1 * (value2 * .9) / 100) * 52;
        return (yearlysalary).toLocaleString();
    },
    difference_yearly_earnings_calculator: (value1, value2, value3) => {
        const difference = (Math.round((100 * value1 * (value2 * .9) / 100) * 52) - (value3 * 52));
        return (difference).toLocaleString();
    },
    under_hood_calculator: function (value, options) {
        //value = {{hours}}, need to * by {{ranking}}
        options(fn({ test: value, test2: value }))
    },
    percent_frontend_display: (value1) => {
        const percent = value1 * 100;
        return percent + "%";
    },
    potential_dollars_under_hood_calculator: (ranking, hours) => {
        const uhhours = Math.round((100 * hours) * .9 / 100);
        const weeklyearnings = Math.round(100 * ranking * (uhhours) / 100);
        return Math.round(weeklyearnings / uhhours);
    }

};