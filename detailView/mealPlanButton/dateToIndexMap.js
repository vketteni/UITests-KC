var dateToIndexMap = {
    'Mon': 0,
    'Tue': 1,
    'Wed': 2,
    'Thu': 3,
    'Fri': 4,
    'Sat': 5,
    'Sun': 6
}
output.WeekdayIndex = dateToIndexMap[output.weekdayString].toString()