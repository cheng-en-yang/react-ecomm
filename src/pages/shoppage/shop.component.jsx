import React from 'react';
import './shop.styles.scss';
import CollectionPreview from '../../components/CollectionPreview/collection-preview.component.jsx';
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;