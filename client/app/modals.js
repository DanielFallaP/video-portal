function showModal(){
	$('.modal').modal();
	$('#modalPopup').modal('open');
}

function showToast(message,delay){
	Materialize.toast(message,delay);
}

function setScrollFire(offset, callback){
	var options = [
		{selector: '#videoList', offset: offset, callback: callback}
	]
	Materialize.scrollFire(options);
}