var library = [ 
	{ 
		author: 'Bill Gates',
		title: 'The Road Ahead', 
		readingStatus: true
	}, 
	{
		author: 'Steve Jobs', 
		title: 'Walter Isaacson',
		readingStatus: true 
	}, 
	{
		author: 'Suzanne Collins', 
		title: 'Mockingjay: The Final Book of The Hunger Games', 
		readingStatus: false 
	}];
	
	
library.map(function(status)
	{
	if(status.readingStatus==true)
		{
		document.write(`Already read '${status.author}' by ${status.title}`);
		document.write("<br>");
		}
		else
		{
		document.write(`you Still need to read '${status.title}' by ${status.author}`);

		}
	});	