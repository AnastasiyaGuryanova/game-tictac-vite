import styles from "./field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({ value, handleClick, id }) => {
	return (
		<button onClick={() => handleClick(id)} className={styles.btn} id={id}>
			{value}
		</button>
	);
};

FieldLayout.propTypes = {
	value: PropTypes.string,
	id: PropTypes.number,
	handleClick: PropTypes.func,
};
