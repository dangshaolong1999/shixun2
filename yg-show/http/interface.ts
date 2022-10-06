//楼层
// floor_title
interface Floor_title {
	name: string,
	image_src: string
}
interface List1 {
	image_src: string,
	image_width: string,
	name: string,
	navigator_url: string,
	open_type: string
}

interface Acc {}

type FloorList = Array<
	{
		floor_title: Floor_title,
		product_list: Array<
			{
				product_list: List1
			}
		>
	}
>
type List = Array<{
	list2: Array<{
		goods_id: number,
		image_src: string,
		navigator_url: string,
		open_type: string
	}>
}>

type CatesList = Array<{
	catesList1:Array<{
		image_src:string,
		name:string,
		navigator_url:string,
		open_type:string
	}>
}>


//详情·数据

interface detailslist {
	add_time: number,
	attrs:[],
	cat_id: number
	cat_one_id: number
	cat_three_id: number
	cat_two_id: number
	delete_time: null
	goods_big_logo: string
	goods_cat: string
	goods_id: number
	goods_introduce: string
	goods_name: "创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）"
	goods_number: number
	goods_price: number
	goods_small_logo: "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg"
	goods_state: number
	goods_weight: number
	hot_mumber: number
	is_del: string
	is_promote: boolean
	pics: Carousel
	upd_time: number
	num:number
	checked:boolean
}

//轮播
type Carousel = Array<{
	pics:{
		goods_id: number
		pics_big: string
		pics_big_url: string
		pics_id: number
		pics_mid: string
		pics_mid_url: string
		pics_sma: string
		pics_sma_url:string
	}
}>
export {
	Floor_title,
	List1,
	FloorList,
	List,
	CatesList,
	Acc,
	detailslist,
	Carousel
}