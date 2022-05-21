import React from 'react'
import Data from "../data.json"
import styles from "./food.module.css"

const Food = () => {
    const sortProd= (e)=>{
        console.log(e)
    }
    return (
        <div className='Data'>
            <select name="" id="" >
                <option value="">Sort</option>
                <option value="high to low" onClick={sortProd}>High to low price</option>
                <option value="">Low to high price</option>
                <option value="">High to low rating</option>
            </select>
            {Data.map(el => {
                return (
                    <div className={styles.DivData} key={Date.now()}>
                        <img src={el.image} style={{ width: 200 }} alt="food_photo"/>
                        <div>
                            <h2>{el.name}</h2>
                            <h3>{el.cost}</h3>
                            <div>{el.recepie + " "}</div>
                            <p>rating is : {el.rating}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Food