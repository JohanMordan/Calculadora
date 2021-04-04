let screen = document.querySelector('#screen-result');

function getData(ref){
	let value = ref.value;
	screen.value += value;
}

function clean(){
	screen.value='';
}

function calculadora(){
	try{
		screen.value = eval(screen.value);
	} catch (error){
			screen.value = 'error';
			setTimeout(() =>{
				clean();
			},500);
	}

}