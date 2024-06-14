import { FieldLayout } from "@components";
import { createUniqueNumber } from "@helpers";
import { store } from "@store";
import { makeMove } from "@actions";

export const Field = () => {
	const state = store.getState();
	const { field } = state;

	const handleClick = (index) => {
		store.dispatch(makeMove(index));
	};

	return field.map((item, index) => {
		return (
			<FieldLayout
				value={item}
				handleClick={handleClick}
				id={index}
				key={createUniqueNumber()}
			/>
		);
	});
};
