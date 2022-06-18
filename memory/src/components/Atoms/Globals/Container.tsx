import React from 'react';

type Container = {
	children: JSX.Element;
	className?: string;
};

function Container({ children, className }: Container): JSX.Element {
	return <div className={`container mx-auto ${className}`}>{children}</div>;
}

export default Container;
