// Total Phone bill API

export function totalPhoneBill (amount) {
	const bill = amount.toLowerCase().split(', ');
		let countForCall = 0;
        let countForSms = 0;
		
		for (var i = 0; i < bill.length; i++) {
          const bills = bill[i]
			if (bills === 'call') {
            countForCall++;
        } else if (bills === 'sms') {
            countForSms++;
        }
    }
	const calls = countForCall * 2.75; 
    const smss = countForSms * 0.65;
    const totalCost = calls + smss;

    return 'R' + totalCost.toFixed(2); 
}