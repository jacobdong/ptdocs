var fs =  require('fs');
var _ =  require('underscore');

var content = fs.readFileSync('bower.json', 'utf8');
console.log(content);




var dep = content;


var depObj = JSON.parse(dep);
//console.log(_.isObject(depObj));

//console.log(depObj.dependencies);


var keys = _.keys(depObj.dependencies);
//console.log(keys);

var sourceMap = [];


function loadFinish(){
	console.log("======================");
	console.log("load finish");
	console.log("======================");

	_.each(sourceMap,function(element, index, list){
		console.log(element.name + "--" + element.items);
	})
}



_.each(keys,function(element, index, list){
	console.log(index + '--' +element);
	//console.log(list);
	fs.readFile('bower_components/'+element+"/bower.json",'utf8',function(err,data){
		if(err){
			console.log('error');
			return;
		}
		var itemDep = JSON.parse(data).main;
		//console.log(element + '======' + itemDep) ;

		var source = {
			name:element,
			items:itemDep
		}
		sourceMap.push(source);
		console.log("load item"+index);


		if(sourceMap.length == list.length){
			loadFinish();
		}
	})
});






