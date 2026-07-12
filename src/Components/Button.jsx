const Button = ({ title, variant = 'primary', size = 'md', className, ...props }) => {
    
    let baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variant styles for different button types
    let variantStyles = '';
    switch (variant) {
        case 'primary':
            // Gradient from pink-500 to white
            variantStyles = 'bg-gradient-to-r from-pink-500 to-pink-100 text-pink-900 hover:from-pink-600 hover:to-gray-100 focus:ring-pink-500';
            break;
        case 'outline':
            // Outline variant with a subtle gradient background
            variantStyles = 'bg-gradient-to-r from-pink-500 to-white p-[1px] text-pink-600 hover:opacity-90 focus:ring-pink-500';
            
            variantStyles = 'bg-gradient-to-r from-pink-500/10 to-pink-100 text-pink-600 hover:from-pink-500 hover:to-pink-400 hover:text-white focus:ring-pink-500';
            break;
        case 'secondary':
            variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-400';
            break;
        case 'danger':
            variantStyles = 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500';
            break;
        default:
            variantStyles = 'bg-gradient-to-r from-pink-500 to-white text-pink-900 focus:ring-pink-500';
    }

    let sizeStyles = '';
    switch (size) {
        case 'sm': sizeStyles = 'px-3 py-1.5 text-sm'; break;
        case 'md': sizeStyles = 'px-4 py-2 text-base'; break;
        case 'lg': sizeStyles = 'px-6 py-3 text-lg'; break;
        default: sizeStyles = 'px-4 py-2 text-base';
    }

    const buttonClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`;

    return (
        <button className={buttonClasses} {...props}>
            {title}
        </button>
    );
};

export default Button;