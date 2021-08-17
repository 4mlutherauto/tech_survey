
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
    },
    estimated_dollars_per_hour: (ranking, skill) => {
        var dph = 0;
        var skill = skill;
        if (skill="entry" && ranking==10) {
            dph = 18.77;
            return dph;
        }
        else if (skill="entry" && ranking==25)
        {  dph = 16.77
            return dph;
        }
        else if (skill="entry" && ranking==50)
        { dph = 16.77 
           return dph;
        }
        else if (skill="general" && ranking==10) {
            dph = 27.17;
            return dph;
        }
        else if (skill="general" && ranking==25)
        {  dph = 25.17
            return dph;
        }
        else if (skill="general" && ranking==50)
        { dph = 23.17
           return dph;
        }
        else if (skill="certified" && ranking==10) {
            dph = 32.11;
            return dph;
        }
        else if (skill="certified" && ranking==25)
        {  dph = 30.11
            return dph;
        }
        else if (skill="certified" && ranking==50)
        { dph = 28.11
           return dph;
        }
    },
    new_earn_per_week: (value1, value2) => {
        return value1 * value2;
    },
    //returns check for luther if under hood hours at current job are less than Luthers, and returns blank (no x) if luther's are less for some reason
    time_under_hood_check_luther: (value1, value2) => {
        if (value1 > value2){
            return "<i class='fa fa-check'></i>"
        }
        else return
},
//returns x if under hood hours at current job are less than Luther's
time_under_hood_check_current: (value1, value2) => {
    if (value1 < value2) {
        return "<i class='fa fa-check'></i>"
    }
    else return "<i class='fa fa-times'></i>"
},
    benefits_table_life: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('life-insurance'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_med: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    console.log(array + "is the array");
    const benefit = (array.includes('medical'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_std: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('short-term-disability'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_ltd: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('long-term-disability'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_dental: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('dental'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_401k: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('401k'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_tuition: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('tuition'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
},
benefits_table_vacationtime: (value1) => {
    const array= JSON.stringify(Object.assign([], value1));
    const benefit = (array.includes('vacation'))
    console.log(benefit);
         if (benefit == true) {
            return "<i class='fa fa-check'></i>"
        }
         else return "<i class='fa fa-times'></i>"
         }
}
