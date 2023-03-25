import React, { FC, HTMLAttributes, ReactNode } from "react";

export interface IProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

export const Thing: FC<IProps> = ({ children }) => {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		setValue(50);
	}, []);

	return <div>{children || value}</div>;
};
