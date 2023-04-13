import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLDivElement>;

const AlertDialogHeader = ({ className, ...props }: Props) => (
  <div
    className={cn(
      'flex flex-col space-y-2 first-letter:sm:text-left',
      className,
    )}
    {...props}
  />
);

AlertDialogHeader.displayName = 'AlertDialogHeader';

export default AlertDialogHeader;
