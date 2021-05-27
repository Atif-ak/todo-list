import React from 'react'

function List({updateItemList, itemList}) {
    
    const deleteItemHandler = (key) =>{
        const newList = itemList.filter(item =>{
            return item.key !== key
        })
        updateItemList(newList)
    } 
    return (
        <div id='list'>
           { itemList.map(itemObj=>{
              return (
              <div id='items'>
                   <p id='para'>{itemObj.item}</p>
                   <button onClick={()=>deleteItemHandler(itemObj.key)} id='remove'>X</button>
                   </div>
              );
           })}
          
        </div>
    )
}

export default List
