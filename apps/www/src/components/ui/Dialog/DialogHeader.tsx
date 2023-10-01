import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLDivElement>;

const DialogHeader = ({ className, ...props }: Props) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center',
      'sm:text-left',
      className,
    )}
    {...props}
  />
);

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
