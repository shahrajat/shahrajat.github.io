var rows = 10; //prompt("#Rows", 5);
var cols = 10; //prompt("#Columns", 5);
table  = document.getElementById("grid");
 
//initializing datastructures
var grid=new Array(rows);
for (i=0; i <rows; i++){
	grid[i]=new Array(cols);
}

//manhattan distance function
var h=new Array(rows);
for (i=0; i <rows; i++){
	h[i]=new Array(cols);
}

var f = new Array();

var openedSet = Array();
var closedSet = Array();
var parent = Array();

//creating tabular representation
for( var i=0; i<rows; i++ )
{
	var row = table.insertRow(i);
	for( var j=0; j<rows; j++ )
	{
		var cell = row.insertCell(j);
		cell.height = cell.width = "40";
		cell.bgColor = "grey";
		cell.id= i +""+ j;
		grid[i][j] = 1;
	}
}
  
//randomly block few boxes
for( var i=0; i<30; i++)
{
	var cellId = Math.floor(Math.random()*100);
	cellId = ("0" + cellId).slice(-2);
	document.getElementById(cellId).bgColor = "red";
	//grid[i][j] = 0; //blocking the table
}

//setting start and finish boxes
var start = ("0" + Math.floor(Math.random()*100)).slice(-2);
var finish = ("0" + Math.floor(Math.random()*100)).slice(-2);

document.getElementById(start).bgColor = "green";
document.getElementById(finish).bgColor = "blue";

var startX = Math.floor(start/10);
var startY = start%10;
var finishX = Math.floor(finish/10);
var finishY = finish%10;

//storing manhattan distance
for(var i=0;i<rows;i++)
{
	for(var j=0; j<cols; j++)
	{
		cellId = i+""+j;
		if(document.getElementById(cellId).bgColor == "red")
			h[i][j]  = 100000;
		else
			h[i][j]  = Math.abs((finishX - i)) + Math.abs((finishY - j));
		
		//document.getElementById(cellId).innerText = h[i][j] ;
		//document.getElementById(cellId).innerText += "("+i+","+j+")" ;
		document.getElementById(cellId).className  = "cell" ;
	}
}

//setting costs of movement
stCost = 10;
diaCost = 14; // sqroot(10^2, 10^2)

function getMin()
{
	var minX=0, minY=0, minValue=100000,openedSetX,openedSetY;
	//document.writeln("openedSet = ");
	for (var i=0; i<openedSet.length; i++)
	{
		openedSetX = Math.floor(openedSet[i]/10);
		openedSetY = openedSet[i]%10;
		//document.writeln("("+openedSet[i]+")");
		if(h[openedSetX][openedSetY] < minValue)
		{
			minX  = openedSetX;
			minY = openedSetY;
			minValue = h[openedSetX][openedSetY];
		}
	}
	//document.writeln("<br>");
		return [minX,minY,minValue];
}

function pushNeighbours(node)
{
	//document.writeln("psuing neighbours of  = "+ node+ "<br>");
	nodeX = Math.floor(node/10);
	nodeY = node%10;
	//update this neighbours list for diagonal values
	neighbours = [ (nodeX+1)+""+(nodeY) ,(nodeX)+""+(nodeY+1) ,(nodeX-1)+""+(nodeY) , (nodeX)+""+(nodeY-1), (nodeX+1)+""+(nodeY+1) ,(nodeX+1)+""+(nodeY-1) ,(nodeX-1)+""+(nodeY-1) , (nodeX-1)+""+(nodeY+1)];
	for (var index in neighbours)
	{
		neighbour = neighbours[index];
		//document.writeln("neigbours  = "+neighbour +",");	
		//document.writeln("<br/>");
		if(document.getElementById(neighbour)) 
		{
			//document.writeln("pushed neigbours  = "+neighbour +",");	
			neighbourX = Math.floor(neighbour/10);
			neighbourY = neighbour%10;
			//document.writeln(neighbour);
			if(closedSet.indexOf(neighbour) <0)
				openedSet.push(neighbour);
			
			parent[neighbour] = node;
			if(index <4)
				f[neighbour] = h[neighbourX][neighbourY] + stCost;
			else
				f[neighbour] = h[neighbourX][neighbourY] + diaCost;
		}
	}
	document.writeln("<br/>");
	openedSet.sort();
}

//A* algorithm

closedSet.push(start);
pushNeighbours(start);

//document.writeln("min = "+getMin());

while(openedSet.length != 0)
{
	current = getMin();
	currentX = current[0];
	currentY = current[1];
	minValue = current[2];
	cellId = document.getElementById(currentX+""+currentY);
	if(cellId.bgColor != "green" && cellId.bgColor != "blue" && cellId.bgColor != "red"){
		//document.writeln("ciloring<br>");
		cellId.bgColor = "pink";
	}
	//document.writeln("<br>pushing - min =  " + currentX+","+currentY + " -  minValue = "+minValue+"<br>");
		if(minValue == 0 )
		break;
	pushNeighbours(currentX+""+currentY);
	closedSet.push(currentX+""+currentY);
	openedSet.splice(openedSet.indexOf(currentX+""+currentY),1);
}
