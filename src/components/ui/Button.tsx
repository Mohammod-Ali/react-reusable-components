import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type TRef = HTMLButtonElement;

type TVariant = 'solid' | 'ghost' | 'outline';

type TButtonOptions = {
    variant: TVariant
} 

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & TButtonOptions

const Button = forwardRef<TRef, TButton>( ({ className, variant, ...rest }, ref) => {

  const getVariant = (variant : TVariant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";

      default:
        return "btn-solid";
    }
  };

  return (
    <div>
      <button
      {...rest}
        className={cn( getVariant(variant), className
        )}
      >
        
      </button>
    </div>
  );
});

export default Button;
