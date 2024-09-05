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
const employees = {
  joseph: {
    title: 'store manager',
    minor: 'no'
  },
  luis: {
    title: 'assistant manager',
    minor: 'no'

  },
  bruno: {
    title: 'assistant manager',
    minor: 'no'

  },
  associate1: {
    title: 'associate',
    minor: 'no'

  },
  associate2: {
    title: 'associate',
    minor: 'no'

  },
  associate3: {
    title: 'associate',
    minor: 'no'

  },
  associate4: {
    title: 'associate',
    minor: 'no'

  },
  associate5: {
    title: 'associate',
    minor: 'no'

  },
  associate6: {
    title: 'associate',
    minor: 'no'

  },
  associate7: {
    title: 'associate',
    minor: 'yes'

  },
  associate8: {
    title: 'associate',
    minor: 'yes'

  },
};



sunday = [
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
]; //11-7pm     (9 hours, 30 min before opening and 30 min after closing)
monday = [
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
]; //10-9pm (12 hours, 30 min before opening and 30 min after closing)
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

// console.log(sunday);
// console.log(week);
 console.log(employees.joseph);





  //contain function that runs and creates the sunday array of objects containing  for WEEK
  //for each day, have function that calulcates hours perhaps, switch hour to 'coverage'




