/*
This is the beginning of my project to build a schedule maker for a retail store 

people will be contained in objects, containing {name,age, role, sex, availability}
this list of people is Joseph(SM), Luis(AM), Bruno(AM), 8 random associates 

*** availability will range from 0 - 24; 


I can possibly create an array containing hour objects.... a lot... I know...

scheduleMaker: 

sundayArr =     [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}]                             11-7pm     (9 hours, 30 min before opening and 30 min after closing)
mondayArr =     [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}{hour10:}{hour11:}{hour12:}]  10-9pm     (12 hours, 30 min before opening and 30 min after closing)
tuesdayArr =    [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}{hour10:}{hour11:}{hour12:}]  10-9pm     (12 hours, 30 min before opening and 30 min after closing)
wednesdayArr =  [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}{hour10:}{hour11:}{hour12:}]  10-9pm     (12 hours, 30 min before opening and 30 min after closing)
thursdayArr =   [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}{hour10:}{hour11:}{hour12:}]  10-9pm     (12 hours, 30 min before opening and 30 min after closing)
fridayArr =     [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}{hour10:}{hour11:}{hour12:}]  10-9pm     (12 hours, 30 min before opening and 30 min after closing)
saturdayArr =   [{hour1:}{hour2:}{hour3:}{hour4:}{hour5:}{hour6:}{hour7:}{hour8:}{hour9:}{hour10:}{hour11:}{hour12:}]  10-9pm     (12 hours, 30 min before opening and 30 min after closing)
*/

sunday = {
  hour1: [],
  hour2: [],
  hour3: [],
  hour4: [],
  hour5: [],
  hour6: [],
  hour7: [],
  hour8: [],
  hour9: [],
  hour10: [],
}; //11-7pm     (9 hours, 30 min before opening and 30 min after closing)
monday = {
  hour1: [],
  hour2: [],
  hour3: [],
  hour4: [],
  hour5: [],
  hour6: [],
  hour7: [],
  hour8: [],
  hour9: [],
  hour10: [],
  hour11: [],
  hour12: [],
  hour13: [],
} //10-9pm (12 hours, 30 min before opening and 30 min after closing)
tuesday = [
  { hour1: [] },
  { hour2: [] },
  { hour3: [] },
  { hour4: [] },
  { hour5: [] },
  { hour6: [] },
  { hour7: [] },
  { hour8: [] },
  { hour9: [] },
  { hour10: [] },
  { hour11: [] },
  { hour12: [] },
  { hour13: [] },
]; //10-9pm     (12 hours, 30 min before opening and 30 min after closing)
wednesday = [
  { hour1: [] },
  { hour2: [] },
  { hour3: [] },
  { hour4: [] },
  { hour5: [] },
  { hour6: [] },
  { hour7: [] },
  { hour8: [] },
  { hour9: [] },
  { hour10: [] },
  { hour11: [] },
  { hour12: [] },
  { hour13: [] },
]; //10-9pm     (12 hours, 30 min before opening and 30 min after closing)
thursday = [
  { hour1: [] },
  { hour2: [] },
  { hour3: [] },
  { hour4: [] },
  { hour5: [] },
  { hour6: [] },
  { hour7: [] },
  { hour8: [] },
  { hour9: [] },
  { hour10: [] },
  { hour11: [] },
  { hour12: [] },
  { hour13: [] },
]; //10-9pm     (12 hours, 30 min before opening and 30 min after closing)
friday = [
  { hour1: [] },
  { hour2: [] },
  { hour3: [] },
  { hour4: [] },
  { hour5: [] },
  { hour6: [] },
  { hour7: [] },
  { hour8: [] },
  { hour9: [] },
  { hour10: [] },
  { hour11: [] },
  { hour12: [] },
  { hour13: [] },
]; //10-9pm     (12 hours, 30 min before opening and 30 min after closing)
saturday = [
  { hour1: [] },
  { hour2: [] },
  { hour3: [] },
  { hour4: [] },
  { hour5: [] },
  { hour6: [] },
  { hour7: [] },
  { hour8: [] },
  { hour9: [] },
  { hour10: [] },
  { hour11: [] },
  { hour12: [] },
  { hour13: [] },
]; //10-9pm     (12 hours, 30 min before opening and 30 min after closing)

const week = {
  sunday: sunday,
  monday: monday,
  tuesday: tuesday,
  wednesday: wednesday,
  thursday: thursday,
};

console.log(week);

//function that returns an employee object
function employeeObj() {
  //employee data variables stored in this object and maninpulated with getter and setter functions
  const employeeData = {
    Name: undefined,
    Title: undefined,
    Minor: false,
    availability: [],
  };
  //setter function to change data
  const createSetter = (key) => (val) => {
    return (employeeData[key] = val);
  };
  //getter function to change data
  const createGetter = (key) => () => {
    return employeeData[key];
  };

  //object is return so that it can be reused anytime
  return {
    setName: createSetter('Name'),
    getName: createGetter('Name'),
    setTitle: createSetter('Title'),
    getTitle: createGetter('Title'),
    setMinor: createSetter('Minor'),
    getMinor: createGetter('Minor'),
    getInfo: function () {
      console.log(
        `Name: ${employeeData.Name}\nTitle: ${employeeData.Title}\nMinor: ${employeeData.Minor}`
      );
    },
  };
}
//below we store constantly used strings into variables to make it easy to access
const storeManager = 'Store Manager';
const assistantManager = 'Assistant Store Manager';
const associate = 'Associate';

//below we create employee objects using the object structure from above (closure)
const empl1 = employeeObj();
const empl2 = employeeObj();
const empl3 = employeeObj();
const empl4 = employeeObj();
const empl5 = employeeObj();
const empl6 = employeeObj();
const empl7 = employeeObj();
const empl8 = employeeObj();

//all employees are stored in this array
const employees = [empl1, empl2, empl3, empl4, empl5, empl6, empl7, empl8];

//below we use setter functions to label the titles of each employee, and set those who are minors to true

//Set up Joseph's position
employees[0].setName('Joseph');
employees[0].setTitle(storeManager);
employees[0];

// .setTitle(storeManager);
// luis.setTitle(assistantManager);
// bruno.setTitle(assistantManager);
// associate1.setTitle(associate);
// associate2.setTitle(associate);
// associate3.setTitle(associate);
// associate4.setTitle(associate);
// associate5.setTitle(associate);
// associate6.setTitle(associate);
// associate7.setTitle(associate);
// associate8.setTitle(associate);

// associate6.setMinor(true);
// associate7.setMinor(true);
// associate8.setMinor(true);

// console.log(joseph.getTitle());
// console.log(associate7.getMinor());
// console.log(joseph.getInfo());

// console.log(sunday);
// console.log(week);
// console.log(employees.joseph);

//contain function that runs and creates the sunday array of objects containing  for WEEK
//for each day, have function that calulcates hours perhaps, switch hour to 'coverage'
