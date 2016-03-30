// window.onload = function() {
// 	console.log("HI Vanilla")

// 	var handle = document.getElementById("handle");
// 	var parent = document.getElementById("parent")
// 	var map = document.getElementById("map");
// 	var content = document.getElementById("content");	
// 	console.log(handle)
// 	var resize = false;

// 	handle.addEventListener('click', function(ev){
// 		resize = true;
// 		console.log("DOWN")
// 		drag(ev);
// 	});

// 	function drag(ev){
// 		console.log("move")
// 		if(!resize)
// 			return;

//     // var offsetRight = container.width() - (e.clientX - container.offset().left);

//     // left.css('right', offsetRight);
//     // right.css('width', offsetRight);

// 		var offSetTop = parent.clientWidth - (ev.clientY - parent.offsetTop)
// 		map.style.height = offSetTop;
// 		content.style.height = offSetTop;
		
// 		// console.log("New val",  offSetTop,  "off set top: ", parent.offsetTop, "parent.scrollHeight: ", parent.scrollHeight)
// 	};


// 	// handle.addEventListener('mouseup', function(ev){
// 	// 	resize = false;
// 	// 	console.log("UP")

// 	// })



// }