import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

const ShopPage = ({collections}) => (
     <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
 
  );

const mapStateToProps = createStructuredSelector({
  collections:selectCollections
});

export default connect(mapStateToProps)(ShopPage);
