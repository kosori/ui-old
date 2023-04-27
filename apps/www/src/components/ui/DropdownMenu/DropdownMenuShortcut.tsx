import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLSpanElement>;

const DropdownMenuShortcut = ({ className, ...props }: Props) => (
  <span
    className={cn(
      'ml-auto text-xs text-mauveText',
      'group-data-[disabled]:text-mauveSolid',
      className,
    )}
    {...props}
  />
);

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export default DropdownMenuShortcut;
