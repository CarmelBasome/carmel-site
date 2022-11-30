import React from 'react';
const List = ({ items, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, adress, text } = item;
        return (
          <article className='form-item' key={id}>
            <p>{adress}</p>
            <p className='comment-text'>{text}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                edit comment
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
