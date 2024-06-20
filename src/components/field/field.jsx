import { FieldLayout } from "@components";
import { createUniqueNumber } from "@helpers";
import { makeMove } from "@actions";
import { useSelector, useDispatch } from "react-redux";

export const Field = () => {
	const field = useSelector((state) => state.field);
	const dispatch = useDispatch();

	const handleClick = (index) => {
		dispatch(makeMove(index));
	};

	return field.map((item, index) => {
		return (
			<FieldLayout
				value={item}
				handleClick={() => handleClick(index)}
				id={index}
				key={createUniqueNumber()}
			/>
		);
	});
};
