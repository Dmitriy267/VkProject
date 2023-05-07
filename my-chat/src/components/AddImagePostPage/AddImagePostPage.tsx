import React from 'react';
import styles from './AddImagePostPage.module.scss';
import img1 from '../../image/productPost/img1.jpg';
import img2 from '../../image/productPost/img2.jpg';
import img3 from '../../image/productPost/img3.jpg';
import img4 from '../../image/productPost/img4.jpg';
import img5 from '../../image/productPost/img5.jpg';
import img6 from '../../image/productPost/img6.jpg';
const imageProduct=[{
    id:1,
    image:`${img1}`,
    altDescript:'Фото',
}, 
{
    id:2,
    image:`${img2}`,
    altDescript:'Фото', 
},
{
    id:3,
    image:`${img3}`,
    altDescript:'Фото', 
},
{
    id:4,
    image:`${img4}`,
    altDescript:'Фото', 
},
{
    id:5,
    image:`${img5}`,
    altDescript:'Фото', 
},
{
    id:6,
    image:`${img6}`,
    altDescript:'Фото', 
}
]
function AddImagePostPage (){
    return(
        <div className={styles.addImage__div}>
            <button>Добавить</button>
        </div>
    )
}
export {AddImagePostPage}