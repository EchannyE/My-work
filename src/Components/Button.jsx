import React, { forwardRef } from 'react';

const VARIANT_STYLES = {
  // Solid brand pink, matches the Contact button in the navbar
  primary:
    'bg-pink-400 text-black hover:bg-pink-300 focus:ring-pink-400 disabled:hover:bg-pink-400',
  // Transparent with a pink border, fills in on hover/focus
  outline:
    'border border-pink-400 bg-transparent text-pink-400 hover:bg-pink-400 hover:text-black focus:ring-pink-400 disabled:hover:bg-transparent disabled:hover:text-pink-400',
  secondary:
    'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-400 disabled:hover:bg-gray-200 dark:disabled:hover:bg-gray-700',
  danger:
    'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 focus:ring-red-500 disabled:hover:bg-red-500',
  ghost:
    'bg-transparent text-pink-400 hover:bg-pink-400/10 focus:ring-pink-400 disabled:hover:bg-transparent',
};

const SIZE_STYLES = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-base gap-2',
  lg: 'px-6 py-3 text-lg gap-2.5',
};

const Spinner = ({ size }) => (
  <svg
    className={`animate-spin ${size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'}`}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const Button = forwardRef(
  (
    {
      title,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      type = 'button',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
    const sizeStyles = SIZE_STYLES[size] || SIZE_STYLES.md;

    const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading && <Spinner size={size} />}
        {children ?? title}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;