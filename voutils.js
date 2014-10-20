function ResponseJson(status,code,data,msg){
	return {
		status:status,
		code:code,
		data:data,
		msg:msg
	}
}

module.exports.ResponseJson = ResponseJson;