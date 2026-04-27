import React from "react";

interface SelectorOption extends React.SelectHTMLAttributes<HTMLOptionElement> {
    label: string;
    value: string;
}

const SelectorOption = ({ label, value, ...rest }: SelectorOption) => {
    return (
        <option value={value} {...rest}>
            {label}
        </option>
    );
};