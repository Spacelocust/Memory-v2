import React from 'react';

type TContainer = {
	children: JSX.Element | JSX.Element[];
	className?: string;
};

function Container({ children, className }: TContainer): JSX.Element {
	return <div className={`container mx-auto ${className}`}>{children}</div>;
}

export default Container;
