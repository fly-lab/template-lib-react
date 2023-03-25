import React, { FC, HTMLAttributes, ReactNode } from "react";

export interface IProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

export const Thing: FC<IProps> = ({ children }) => {
	return <div>{children || `Sample text`}</div>;
};
