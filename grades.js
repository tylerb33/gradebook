console.log ("all ready");

let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;
let lowGrade = 100;
let highGrade = 0;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (let i=0; i < scores.length; i++) {
	if (scores[i] < 61) {
		gradeF += 1;	
	}else if (scores[i] < 71) {
		gradeD += 1;
	}else if (scores[i] < 81) {
		gradeC += 1;
	}else if (scores[i] < 91) {
		gradeB += 1;
	}else (gradeA += 1);
		if (scores[i] < lowGrade) {
			lowGrade = scores[i];	
		}
			if(scores[i] > highGrade) {
				highGrade = scores[i];
			}
}

console.log("How many of each grade?", "F:", gradeF, "D:", gradeD, "C:", gradeC, "B:", gradeB, "A:", gradeA )
console.log ("What is highest?", highGrade);
console.log ("What is lowest", lowGrade);