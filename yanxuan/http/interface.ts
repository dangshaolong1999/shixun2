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

export {
	Floor_title,
	List1,
	FloorList,
	List,
	CatesList,
	Acc
}