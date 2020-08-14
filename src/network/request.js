 import axios from 'axios'


export function request(config){
	const instance =	axios.create( {
		baseURL:'http://152.136.185.210:8000/api/z8'
	} )

  instance.interceptors.request.use(config1=>config1)

  instance.interceptors.response.use(res=>res.data)

  return instance(config)


}
