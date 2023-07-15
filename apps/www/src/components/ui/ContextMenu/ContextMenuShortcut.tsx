import { cn } from '~/utils';

type Props = React.HTMLAttributes<HTMLSpanElement>;

const ContextMenuShortcut = ({ className, ...props }: Props) => (
  <span
    className={cn(
      'text-greyText ml-auto text-xs',
      'group-data-[disabled]:text-greySolid',
      className,
    )}
    {...props}
  />
);

export default ContextMenuShortcut;
