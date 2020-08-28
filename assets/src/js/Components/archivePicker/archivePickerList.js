import classNames from 'classnames';
import { toSrcSet } from '../ImagePicker';

export const archivePickerList = () => ( imagePicker ) => {

  const { props, isSelected, toggleMultiSelection, toggleSingleSelection } = imagePicker;

  const { images } = props;

  return !images ? '' : images.map( image => {
    const {
      id,
      sizes,
      title,
      alt,
      wordpress_id,
      original,
    } = image;

    try {

      return <li
        key={ id }
        data-wordpress-id={ wordpress_id }
        className={ classNames( { 'picker-selected': isSelected( image ) } ) }>
        <img
          srcSet={ toSrcSet( sizes, { maxWidth: 900 } ) }
          title={ `${ title }` }
          alt={ alt }
          width={ 200 * ( original.width / original.height ) }
          height={ 200 }
          onClick={ ( event ) =>
            event.ctrlKey
              ? toggleMultiSelection( image )
              : toggleSingleSelection( image )
          }
        />
      </li>;
    } catch ( exception ) {
      return <li
        key={ id }
      >
        <span>{ image.title }</span>
        <span>No image available.</span>
      </li>;
    }
  } );
};
