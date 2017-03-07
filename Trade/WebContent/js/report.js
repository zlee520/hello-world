var data = [
            
{'name':'2015', 'order':1, 'level':1, 'leaf':'N', 'parent':'-1'},
{'name':'2016', 'order':2, 'level':1, 'leaf':'N', 'parent':'-1'},

{'name':'康拓普', 'order':1, 'level':2, 'leaf':'Y', 'parent':'2015'},
{'name':'不加班', 'order':2, 'level':2, 'leaf':'Y', 'parent':'2015'}, 

{'name':'启捷', 'order':1, 'level':2, 'leaf':'Y', 'parent':'2016'},
{'name':'加班', 'order':2, 'level':2, 'leaf':'Y', 'parent':'2016'}
            
];

function maxLevel(data){
	var max = 1;
	$(data).each(function(){
		if(this.level>max){
			max = this.level;
		}
	});
	return max;
}

function rowspan(node, maxLevel){
	
	if(node.leaf == 'N'){
		return 1;
	}else{
		return (maxLevel - node.level + 1);
	}
}

function colspan(node, data){
	var col = 0;
	if(node.leaf == 'Y'){
		col = 1;
	}else{
		$(data).each(function(){
			if(data.parent == node.name){
				col++;
			}
		});
	}
	return col;
}




$(document).ready(function(){
	alert('hello');
});

