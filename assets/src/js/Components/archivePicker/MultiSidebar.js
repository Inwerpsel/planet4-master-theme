import { Component, Fragment } from '@wordpress/element';
import { toSrcSet } from '../ImagePicker';

const { __ } = wp.i18n;

export class MultiSidebar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      processingImages: false,
      processingError: null,
    };
  }

  render() {
    const { parent } = this.props;
    const { getSelectedImages, toggleMultiSelection } = parent;

    const selectedImages = getSelectedImages();

    return <Fragment>
      <p>{ selectedImages.length }{ __( 'images selected', 'planet4-master-theme-backend' ) }</p>
      <ul
      >
        { selectedImages.map( selected => (
          <li
            key={ selected.id }
          >
            <img
              srcSet={ toSrcSet( selected.sizes, { maxWidth: 700 } ) }
              title={ selected.title }
              alt={ selected.title }
              width={ 80 }
              onClick={ () => toggleMultiSelection( selected ) }
            />
          </li>
        ) ) }
      </ul>
    </Fragment>;
  }

}
