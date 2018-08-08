// var questions = [
// {
// 	question:"What HTML tags are needed for a basic HTML file structure?",
// 	answers:[
// 	" html, head, body", 
// 	" html, toe, body", " html, head, hand",
// 	 " What is a HTML file?"


// 	],
// 	correct:"html, head, body"

// },
// {
// 	question:"What is the paragraph tag used for?",
// 	answers:[" to create paragraph text on a CSS page",
// 	 " to create heading text on a HTML page",
// 	  " to create heading text on a CSS page",
// 	   " to create paragraph text on a HTML page"],
// 	correct:" to create paragraph text on a HTML page"
// },
// {
// 	question:"What are 3 ways to write CSS?",
// 	answers:[" External Style Sheet, External Style Tag & Inline Style",
// 	 " External Style Sheet, Internal Style Tag & Inline Style",
// 	  " Inline Style Sheet, Internal Style Tag & Inline Style", 
// 	  " External Style Sheet, Internal Style Tag & Inline Style Sheet"],
// 	correct: " External Style Sheet, Internal Style Tag & Inline Style"
// },
// {
// 	question : "How to declare an HTML file type?",
// 		answers  : [" <!CSS doctype>",
// 		 " <!HTML doctype>",
// 		  " <!DOCTYPE CSS>",
// 		   " <!DOCTYPE html>"],
// 		correct  : " <!DOCTYPE html>"
// },
// {
// 	question : "Where in your HTML file do you link to your CSS file?",
// 		answers  : [" What is CSS?",
// 		 " In between the opening and closing head tags", 
// 		 " In between the opening and closing body tags",
// 		  " In between the opening and closing heading tags"],
// 		correct  : " In between the opening and closing head tags"
// },
// {

// 		question : "How many different heading tags are there?",
// 		answers  : [" 6", " 5", " 7", " 2"],
// 		correct  : " 6"
// 	},
// 	{
// 		question : "What does CSS stand for?",
// 		answers  : [" Cascading Smile Sheets",
// 		 " Cascading Style Stuff", 
// 		 " Cascading Style Sheets", 
// 		 " Hypertext Markup Language"],
// 		correct  : " Cascading Style Sheets"
// 	}

// ];

// var questionForm = document.getElementById('questionForm');

// //start the questions when start button is clicked

// function startGame(){
// 	// clear previous html
// 	questionForm.innerHTML = "";

// 	//update style of form to the center elements

// 	questionForm.style.margin = "12% auto";

// 	//load the first question

// 	createQuestion();
// };

// // createQuestion()  {
// // 	//clear previous html

// // 	questionForm.innerHTML = "";

// // 	//loop through the question when page loads

// // 	for(var i = 0 ; i < 1 ; i++){

// // 		//create Elements when the loop runs
// // 		var formGroup = document.createElement('div');
// // 		var questionE1 = document.createElement('h2');

// // 		//Add attribute to elements created above
// // 		var formGroup.className = 'formGroup';
// // 		questionE1.id = "questions" + [i];

// // 		//createText for elements 

// // 		var questionText = document.createTextNode(questions[i].question);

// // 		questionE1.appendChild(questionText);

// // 		//Add question to dom
// // 		formGroup.appendChild(questionE1);

// // 		//add FormGroup to questionForm

// // 		questionForm.appendChild(formGroup)

// // 		//put answers to the dom

// // 		for(var j = 0 ; j < questions[i].answers.length; j++){
// //         // create POSIBLE answers 

// //         var answersDiv = document.createElement('div');

// //         var answersE1 = document.createElement('input');

// //         //create textNode for question
// //         var answersText = document.createTextNode(
// //         	questions[i].answers[j]);

// //         //add answers to the div

// //         answersDiv.appendChild(answerE1);
// //         answersDiv.appendChild(answersText);

// //         //add Attributes 
// //         answersDiv.className = 'questionWrap';
// //         answersE1.type = 'radio';
// //         answersE1.name = 'radio' + [i];
// //         answersE1.value = question[i].answers[j];

// //         //add questions to formGroup
// //         formGroup.appendChild(answersDiv);

// // 		};


// // 	};
// // 	//create a submit button;

// // 	var submitbtn = document.createElement('button');

// // 	//add attributes
// // 	submitbtn.className = 'btn btn-lg btn-primary';
// // 	submitbtn.textContent = 'submit Answer';
// // 	submitbtn.type = 'button';
// // 	submitbtn.onclick = submitAnswer;

// // 	// add button to form group;
// // 	questionForm.appendChild(submitbtn)
// // } ;

// function createQuestion() {
// 	// clear any previous html
// 	questionForm.innerHTML = "";

// 	// loop through questions when page loads
// 	for (var i = 0; i < 1; i++) {
// 		// Create Elements when page loads
// 		var formGroup   = document.createElement("div");
// 		var questionEl  = document.createElement("h2");

// 		// Add attributes to Elements
// 		formGroup.className = "formGroup";
// 		questionEl.id       = "questions" + [i];

// 		// Create text for question
// 		var questionText = document.createTextNode(questions[i].question);

// 		// Add question text to Element
// 		questionEl.appendChild(questionText);

// 		// Add Element to dom
// 		formGroup.appendChild(questionEl);

// 		// add formgroup to questionForm
// 		questionForm.appendChild(formGroup);

// 		// add answers to the dom
// 		for (var j = 0; j < questions[i].answers.length; j++) {
// 			// create possible answers
// 			var answerDiv  = document.createElement("div");
// 			var answerEl   = document.createElement("input");

// 			// create text node for question
// 			var answerText = document.createTextNode(questions[i].answers[j]);

// 			// add question to div
// 			answerDiv.appendChild(answerEl);
// 			answerDiv.appendChild(answerText);

// 			// add attributes
// 			answerDiv.className = "questionWrap";
// 			answerEl.type       = "radio";
// 			answerEl.name       = "radio" + [i];
// 			answerEl.value      = questions[i].answers[j];

// 			// add questions to formGroup
// 			formGroup.appendChild(answerDiv);
// 		};
// 	};

// 	// create submit button
// 	var submitBtn  = document.createElement("button");

// 	// add attributes
// 	submitBtn.className   = "btn btn-lg btn-primary";
// 	submitBtn.textContent = "Submit Answer";
// 	submitBtn.type        = "button";
// 	submitBtn.onclick     = submitAnswer;

// 	// add button to form group
// 	questionForm.appendChild(submitBtn);
// };
