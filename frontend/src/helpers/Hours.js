export function hoursToTime(hour) {
   const times = [
      '08:00h', '08:30h', '09:00h', '09:30h', '10:00h', '10:30h', 
      '11:00h', '11:30h', '12:00h', '12:30h', '13:00h', '13:30h', 
      '14:00h', '14:30h', '15:00h', '15:30h', '16:00h', '16:30h', 
      '17:00h', '17:30h', '18:00h', '18:30h', '19:00h', '19:30h', 
      '20:00h'
   ];
   return times[hour];
}

export function hoursOfTheDay(date) {
   return 24;
}
