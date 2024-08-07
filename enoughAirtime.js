export function enoughAirtime(projectedUsage, airtime) {
    const bill = projectedUsage.split(',');
    let countForCall = 0;
    let countForSms = 0;
    let countForData = 0;
    
    for (var i = 0; i < bill.length; i++) {
        const bills = bill[i];
        if (bills === 'call') {
            countForCall++;
        } else if (bills === 'sms') {
            countForSms++;
        } else if (bills === 'data') {
            countForData++;
        }
    }
    const calls = countForCall * 1.88; 
    const smss = countForSms * 0.75;
    const data = countForData * 12.00;
    const total = calls + smss + data;
    const totalCost = airtime - total;
    
		if (totalCost < 0) {
        return 'R0.00'; 
    }

    return 'R'+ totalCost.toFixed(2);
}

