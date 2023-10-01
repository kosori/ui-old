import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLSpanElement>;

const MenubarShortcut = ({ className, ...props }: Props) => (
  <span
    className={cn(
      'ml-auto text-xs text-greyText',
      'group-data-[disabled]:text-greySolid',
      className,
    )}
    {...props}
  />
);

export default MenubarShortcut;
