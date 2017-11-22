var test = ["X.O",
						"XX.",
						"XOO"];

function xoReferee(data) {



	let winner;

	let dataArr = Array.from(data);

	if(dataArr[0] === dataArr[1] || 
		dataArr[0] === dataArr[2] || 
		dataArr[0] === dataArr[3] || 
		dataArr[2] === dataArr[3]) {

		winner = "D"

		console.log(winner);

		return winner;
	}

	let dataString = "";

	for(let i = 0; i < dataArr.length; i++) {
		dataString = dataString + dataArr[i]
	}

	let winCombinationStart = [0, 1, 2, 3, 6];

	let target;

	for(let i = 0; i < winCombinationStart.length; i++) {
		target = dataString[winCombinationStart[i]];
		if(target === dataString[0] && target === dataString[1] && target === dataString[2] ||
			target === dataString[0] &&target === dataString[4] && target === dataString[8] || 
			target === dataString[0] &&target === dataString[3] && target === dataString[6]) {
			winner = target;
		} else if(target === dataString[1] && target === dataString[4] && target === dataString[7]) {
			winner = target;
		} else if(target === dataString[2] && target === dataString[5] && target === dataString[8] ||
							target === dataString[2] && target === dataString[4] && target === dataString[6]) {
			winner = target;
		} else if(target === dataString[3] && target === dataString[4] && target === dataString[5]) {
			winner = target;
		} else if(target === dataString[6] && target === dataString[7] && target === dataString[8]) {
			winner = target;
		} else winner = "D";
	}

	console.log(dataArr);
	console.log(dataString);
	console.log(dataString[0]);
	console.log(winner);

	return winner;
}

xoReferee(test);