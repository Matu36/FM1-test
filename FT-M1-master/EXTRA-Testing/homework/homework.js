function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
  
    const layout = [
        [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
        [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
        [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
      ];
    
    const numberRow = getRowNumber(row);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[number];
    return seat.booked;
};

function getRowNumber (letter) {
     return letter.charCodeAt(0) - 65;
     
}

function book(row, number) {
    if(checkSeatStatus(row,number)) return `Seat in ${row}${number} is already booked`;
    const numberRow = getRowNumber(row);
    const layoutRows = layout[numberRow];
    const seat = layoutRows[number];
    seat.booked = true;
    return `Seat in ${row}${number} successfully booked`
  }


module.exports = {
    checkSeatStatus, getRowNumber, book, 
}

