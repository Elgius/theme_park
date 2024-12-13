import React from 'react';

const Loader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={`flex justify-center items-center ${className}`} ref={ref} {...props}>
      <div className="animate-spin rounded-full border-t-2 border-b-2 border-blue-500 w-12 h-12" />
    </div>
  )
);

Loader.displayName = "Loader";

export { Loader };
