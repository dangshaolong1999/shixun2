

let http = (params) => {
	const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
	return new Promise((resolve,reject) => {
		uni.showLoading({
			title:'拼命加载中'
		})
		uni.request({
			url:baseUrl+params.url,
			method:params.method || 'get',
			data:params.data || '',
			success:res => {
				resolve(res.data)
			},
			file:err => {
				reject(err)
			},
			complete:() => {
				uni.hideLoading()
			}
		})
	})
}
export default http