import { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    // gererate a search field with an x to clear the field
    type='search'
    placeholder={placeholder}
    // we changed this to not re-run everytime its intialized
    onChange={onChangeHandler}
  />
);

export default SearchBox;

// class Component
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={this.props.className}
//         // gererate a search field with an x to clear the field
//         type="search"
//         placeholder={this.props.placeholder}
//         // we changed this to not re-run everytime its intialized
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

// export default SearchBox;
