$(function(){
	var myPrimes = [1, 2, 3, 5, 7, 11, 13, 17];
	console.log(myPrimes);

	console.log($.inArray(3, myPrimes));

	console.log($.unique(myPrimes));

	var myPrimesToMerge = [19, 23, 29];
	console.log($.merge(myPrimes, myPrimesToMerge));

	var.myMappedArray = $.map(myPrimes, function(variable, index){});
		return variable * 5;
	});
	
	console.log(myMappedArray);

	var grepArray = $.grep(myMappedArray, function(variable, index){})
	return variable % 5 == 1;
	});
	
	console.log(grepArray);

