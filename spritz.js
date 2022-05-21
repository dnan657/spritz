function spritz_word(word=""){
		let result = {
			start: "",
			middle: "",
			end: ""
		};
		
		word += "";
		let len = word.length;
		let i_middle = Math.floor(len * 0.38);
		
		result.start = word.slice(0, i_middle);
		result.middle = word.slice(i_middle, i_middle+1);
		result.end = word.slice(i_middle+1);
		
		return result;
}
