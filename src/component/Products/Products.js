import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        { id: 1, name: "iphone 13 pro max", price: 90000, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1644969385495" },
        { id: 2, name: "huawei p30 pro", price: 100000, img: "https://img01.huaweifile.com/sg/ms/za/pms/product/6901443374410/800_800_C4FE8E59F6ECC72E574FC545E52633699700969292068042mp.webp" },
        { id: 3, name: "Samsung galaxy s20plus", price: 60000, img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-plus-1.jpg" },
        { id: 4, name: "oneplus 8 pro", price: 80000, img: "https://m.media-amazon.com/images/I/410mmBW-AYL._AC_.jpg" },
        { id: 5, name: "oppo F17 pro", price: 25990, img: "//ik.imagekit.io/e3r5msbh3bi/wp-content/uploads/2020/09/blaaaaaaa.jpg" },
        { id: 6, name: "Xiaomi Redmi Note 10 Pro", price: 30000, img: "https://www.gizmochina.com/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Max-500x500.jpg" },
        { id: 7, name: "Vivo v17 pro", price: 39000, img: "https://phoneaqua.com/products/vivo-v17-pro-price.webp" },
        { id: 8, name: "Motorola edge plus", price: 30000, img: "https://www.electrorates.com/blogimg/Motorola_Edge_Plus.png" },
        { id: 9, name: "Huawei honor 8x", price: 27000, img: "https://www.gizmochina.com/wp-content/uploads/2018/09/Huawei-Honor-8X-Max-SD636-446x500.jpg" },
    ]
    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;