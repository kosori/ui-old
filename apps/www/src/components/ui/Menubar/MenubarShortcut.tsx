import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLSpanElement>;

const MenubarShortcut = ({ className, ...props }: Props) => (
  <span
    className={cn(
      'ml-auto text-xs text-mauveText',
      'group-data-[disabled]:text-mauveSolid',
      className,
    )}
    {...props}
  />
);

export default MenubarShortcut;
