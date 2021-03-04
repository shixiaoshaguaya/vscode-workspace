/*//////////懒人建站 独家整理 http://www.51xuediannao.com/////////////*/
var timeout2=1000;  
var timeout3=5000; //mouse over 
var now_content=0;
var total_content=7; //个数
var way=1;
var start_content=Math.round(Math.random()*(total_content-1))+1; 

function content_mouse(num)
{
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;

	now_content=num;
	window.clearInterval(theTimer2);
	
	for (var i=1;i<=total_content;i++)
	{
		document.getElementById('pban_list_'+i).style.display='none';
		document.getElementById('pban_num_'+i).className ='pban_off';
	}
	document.getElementById('pban_list_'+num).style.display='block';
	document.getElementById('pban_num_'+num).className ='pban_on';
	theTimer2=setTimeout('change_content()', timeout3);
}

function change_content()
{
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;

	for (var i=1;i<=total_content;i++)
	{
	document.getElementById('pban_list_'+i).style.display='none';
	document.getElementById('pban_num_'+i).className ='pban_off';
	}
	document.getElementById('pban_list_'+now_content).style.display='block';
	document.getElementById('pban_num_'+now_content).className ='pban_on';

	if (way) now_content++;
	else now_content--;
	if(now_content>total_content) 
	{
		now_content=total_content-1;
		way=0;
	}
	else if(now_content==0) 
	{
		now_content=1;
		way=1;
	}
	theTimer2=setTimeout('change_content()', timeout2);
}
theTimer2=setTimeout(function(){	now_content=1;change_content();}, timeout2);