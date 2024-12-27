import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, href, type = 'button', variant = 'primary' }) => {
  const baseStyles = 'py-2 px-4 rounded text-white focus:outline-none';
  const primaryStyles = 'bg-blue-500 hover:bg-blue-600';
  const secondaryStyles = 'bg-gray-500 hover:bg-gray-600';

  const classNames = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {label}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {label}
    </button>
  );
};

export default Button;
