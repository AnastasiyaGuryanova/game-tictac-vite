import styles from "./information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ children }) => {
	return <div className={styles.information}>{children}</div>;
};

InformationLayout.propTypes = {
	children: PropTypes.string,
};
