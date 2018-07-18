/*这里存放一些公共的js方法*/

export default {
	set(key,val){
		if(typeof === 'object'){
			value = JSON.stringify(VALUE)
		}
		sessionStorage.setItem(key,value)
	},
	get(key){
		//如果是object类型的，应该返回JSON.parse的结果
		let value = sessionStorage.getItem(key) || '' ;
		if(value.startsWith('{')||value.startsWith('[')){
			return JSON.parse(value);
		}

	}
}