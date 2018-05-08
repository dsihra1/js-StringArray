//Devon Sihra
function btnCheckCode_onclick()
{
	// assign textbox elements to variables for easier access
	var userInputTextbox = document.getElementById("txtCode");
	var outputTextbox = document.getElementById("txtOutput");
	
	
	// array made... user can only enter these passwords or else no access
	var usercode = new Array("Admin", "Secret", "Letmein", "abc123", "qwerty");
	var input = userInputTextbox.value;
	var index;
	
	// 
	for (index = 0; index < usercode.length; index++)
	{
		if(input == usercode[index])             // user inputs password correctly 
		{
			outputTextbox.value = "Welcome Privileged User";
			break;
		}
		else
		{
			outputTextbox.value = "No Access, try again"            //else try again
		}
		
		
	}
	
	
}