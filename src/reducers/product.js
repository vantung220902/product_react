var initial = [
    {
        id:1,
        name: 'Iphone 8 Plus',
        img:'https://upanh123.com/wp-content/uploads/2020/12/anh-dai-dien-chat-cho-nu16.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price:500,
        inventory:10,
        rating:2,

    },
    {
        id:2,
        name: 'Iphone 7 Plus',
        img:'https://elead.com.vn/wp-content/uploads/2020/04/anh-nu-che-mat-20.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price:500,
        inventory:10,
        rating:3,

    },
    {
        id:3,
        name: 'Iphone 6 Plus',
        img:'https://lazi.vn/uploads/users/cover/1618705141_lazi_658349.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price:500,
        inventory:10,
        rating:4,

    },
];
const product = (state=initial, action)=>{
   switch(action.type) {
       default: return state;
   }
}
export default product;