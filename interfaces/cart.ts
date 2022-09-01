export interface ICartProduct {
    _id:string;
    image: string;
    price: number;
    size?: ISize;
    slug: string;
    title: string;
    gender: 'men'|'women'|'kid'|'unisex'
    quantity:number;
}

type ISize = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';