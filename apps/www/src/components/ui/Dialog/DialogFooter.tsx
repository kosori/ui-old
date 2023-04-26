import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLDivElement>;

const DialogFooter = ({ className, ...props }: Props) => (
  <div
    className={cn(
      'flex flex-col-reverse',
      'sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
